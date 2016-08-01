#r "../node_modules/fable-core/Fable.Core.dll"
#load "../../src/Keyboard.fsx"
#load "../../src/Loader.fsx"
#load "../../src/Win.fsx"

namespace Herebris.Sample

module Main =

  open Fable.Core
  open Fable.Import.Browser
  open System
  open Fable.Helpers.Herebris.Ste
  open Fable.Helpers.Herebris.Ste.Keyboard
  open Fable.Helpers.Herebris.Ste.Win
  open Fable.Helpers.Herebris.Ste.Utils

  Fable.Import.Node.require.Invoke("core-js") |> ignore

  [<StringEnum>]
  type Alignment =
  | Grass
  | Dirt

  let kickOff (value: Loader.CachedSpriteSheet) =
    let win = new Window "game" // Not working
    console.log win.Id
    ()

  Loader.GetSpriteSheetsImageFromJson "/static/game/assets/spritesheets/tiles/spritesheet_tiles.json" kickOff
