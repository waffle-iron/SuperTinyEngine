#r "../node_modules/fable-core/Fable.Core.dll"
#load "Utils.fsx"

namespace Fable.Helpers.Herebris.Ste

open Fable.Core
open Fable.Import.Browser
open Fable.Helpers.Herebris.Ste.Utils
open System

module Tilesheets =

  type Tilesheet = {
    Name: string
    Path: string
    TileWidth: float
    TileHeight: float
    VerticalSpacing: float
    HorizontalSpacing: float
  }

  type Tile = {
    Name: string
    X: float
    Y: float
  }

  type TilesheetJson = {
    Tilesheet: Tilesheet
    Tiles: Tile list
  }

  type CacheTilesheet = {
    TilesheetJson: TilesheetJson
    Canvas: HTMLCanvasElement
    Context: CanvasRenderingContext2D
  }

  type Status =
    | Pending
    | Loaded

  type TilesheetSourceStatus = {
    Source: string
    Status: Status
    Cache: CacheTilesheet option
  }

  type Cache = TilesheetSourceStatus list

  type LoaderMsg =
    Load of string * CacheTilesheet

  let mutable cache : Cache = createEmpty<Cache>

  let coordinateToPixel cache (xr:int, yr:int) =
    let x = (float xr * cache.TilesheetJson.Tilesheet.HorizontalSpacing) + float xr * cache.TilesheetJson.Tilesheet.TileWidth
    let y = (float yr * cache.TilesheetJson.Tilesheet.VerticalSpacing) + float yr * cache.TilesheetJson.Tilesheet.TileHeight
    (x, y)

  let drawTile cache (ctx:CanvasRenderingContext2D) (xr:int, yr:int) (dx:float) (dy:float) =
    let (x, y) = coordinateToPixel cache (xr, yr)
    ctx.drawImage (U3.Case2 cache.Canvas, x, y, cache.TilesheetJson.Tilesheet.TileWidth, cache.TilesheetJson.Tilesheet.TileHeight, dx, dy, cache.TilesheetJson.Tilesheet.TileWidth, cache.TilesheetJson.Tilesheet.TileHeight)

  let load tilesheetJsonPath (mailbox: MailboxProcessor<LoaderMsg>) () =
    let mutable tilesheet : TilesheetJson = createEmpty<TilesheetJson>

    let loadImg (tilesheet: TilesheetJson) () =
      let img = document.createElement_img()
      img.onload <- Func<_,_>(fun e ->
        let c = document.createElement_canvas()
        let ctx = c.getContext_2d()
        // Set directly (no css) the width and height of the canvas
        // To ensure to draw the whole image. Otherwise, the browsers seems to
        // set the size to 300*150
        c.width <- img.width
        c.height <- img.height
        // Store the image in the canvas
        ctx.drawImage (U3.Case1 img, 0., 0.)
        let json = { TilesheetJson = tilesheet; Canvas = c; Context = ctx }
        mailbox.Post(Load (tilesheetJsonPath, json))
        null
      )
      img.src <- tilesheet.Tilesheet.Path

    ajax (Get tilesheetJsonPath)
      (fun data ->
        let tilesheet = Serialize.ofJson<TilesheetJson> data
        loadImg tilesheet ()
        //cache?(tilesheet.Tilesheet.Name) <- tilesheet
        )
      (fun error ->
        console.error ((sprintf "Error when loading %s" tilesheetJsonPath), status))

  // Init the cache for the Tilesheet.
  let init (tilesheets: string list) (cb: unit -> unit) () =
    let loader =
      MailboxProcessor.Start(fun inbox ->


        let rec loop () =
          async {
            let! message = inbox.Receive()
            match message with
            | Load (source, tilesheetJson) ->



              return! loop()
          }
        loop()
      )
    ()

    // Init the index cache
    cache <- []
    let rec initIndex tilesheets () =
      match tilesheets with
      | x::xs ->
        cache <- {
          Source = x
          Status = Pending
          Cache = None
        } :: cache
        initIndex xs ()
      | _ -> ()

    initIndex tilesheets ()

    let rec loadTilesheet tilesheets () =
      match tilesheets with
      | x::xs ->
        load x loader ()
        loadTilesheet xs ()
      | _ -> ()

    loadTilesheet tilesheets ()
    ()
