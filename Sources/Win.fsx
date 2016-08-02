#r "../node_modules/fable-core/Fable.Core.dll"

namespace Fable.Helpers.Herebris.Ste

open Fable.Core
open Fable.Import.Browser

module Win =
  let canvas = document.getElementById "game" :?> HTMLCanvasElement
  let context = canvas.getContext_2d ()

  // Format RGB color as "rgb(r,g,b)"
  let ($) s n = s + n.ToString()
  let rgb r g b = "rgb(" $ r $ "," $ g $ "," $ b $ ")"

  let filled color rect =
    context.fillStyle <- U3.Case1 color
    context.fillRect rect

  let dimensions () =
    canvas.width, canvas.height

  type Window (idStr) =
    member this.Id = idStr
    member this.Canvas = document.getElementById "game" :?> HTMLCanvasElement
    member this.Context = this.Canvas.getContext_2d()

    member this.dimensions =
      this.Canvas.width, this.Canvas.height
