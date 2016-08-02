#r "../node_modules/fable-core/Fable.Core.dll"
#load "Utils.fsx"

namespace Fable.Helpers.Herebris.Ste

open Fable.Core
open Fable.Import.Browser
open Fable.Helpers.Herebris.Ste.Utils
open System

module Loader =

  type SpriteSheetNameJson = {
    Name: string
    Path: string
    TileWidth: float
    TileHeight: float
    VerticalSpacing: float
    HorizontalSpacing: float
  }

  type Sprite = {
    Name: string
    X: float
    Y: float
  }

  type SpriteSheet = {
    Sheet: SpriteSheetNameJson
    Sprites: Sprite list
  }

  type CachedSpriteSheet = {
    Json: SpriteSheet
    Canvas: HTMLCanvasElement
    Context: CanvasRenderingContext2D
  }

  let GetJson<'T> url (giveBack: 'T ->  unit)=
    ajax (Get url)
      (fun data ->
        let json = Serialize.ofJson<'T> data
        giveBack json
        ())
      (fun error ->
        console.error (sprintf "Error when loading: %s" url)
        )

  let GetSpriteSheetsImageFromJson url (giveBack: CachedSpriteSheet -> unit) =
    GetJson<SpriteSheet> url (fun json ->
      let img = document.createElement_img()
      img.onload <- Func<_,_>(fun _ ->
        let c = document.createElement_canvas()
        let ctx = c.getContext_2d()
        // Set directly (no css) the width and height of the canvas
        // To ensure to draw the whole image. Otherwise, the browsers seems to
        // set the size to 300*150
        c.width <- img.width
        c.height <- img.height
        // Store the image in the canvas
        ctx.drawImage (U3.Case1 img, 0., 0.)
        giveBack { Json = json; Canvas = c; Context = ctx }
        null
      )
      img.src <- json.Sheet.Path
      ()
    )
