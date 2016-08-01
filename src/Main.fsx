#r "../node_modules/fable-core/Fable.Core.dll"
#load "Keyboard.fsx"
#load "Tilesheets.fsx"
#load "Win.fsx"

namespace Fable.Helpers.Herebris.Ste

module Main =

  open Fable.Core
  open Fable.Import.Browser
  open System
  open Fable.Helpers.Herebris.Ste.Keyboard
  open Fable.Helpers.Herebris.Ste.Tilesheets
  open Fable.Helpers.Herebris.Ste.Win
  open Fable.Helpers.Herebris.Ste.Utils

  Fable.Import.Node.require.Invoke("core-js") |> ignore

  type Direction =
    Left
    |Right

  type Player =
    { x: float; y: float;
      vx: float; vy: float;
      dir: Direction
    }

  let walk (x, _) m =
    let dir =
      if x < 0 then
        Left
      elif x > 0 then
        Right
      else
        m.dir
    { m with vx = float x; dir = dir }

  let step dir player =
    player |> walk dir

  let render (w, h) (player: Player) =
    (0., 0., w, h) |> Win.filled (Win.rgb 174 238 238)
    (0.,h-50.,w,50.) |> Win.filled (Win.rgb 74 163 41)

  let w, h = Win.dimensions ()

  let rec update player () =
    let player = player |> step (Keyboard.arrows())
    render (w, h) player
    window.setTimeout(update player, 1000. / 60.) |> ignore

  let player = { x = 0.; y = 0.; vx = 0.; vy = 0.; dir = Right }
  //update player ()

  let kickOff () =
    Keyboard.init ()
    console.log "maxime"

  Tilesheets.init ["/static/game/assets/tilesheets/tiles/spritesheet_tiles.json"] kickOff ()
