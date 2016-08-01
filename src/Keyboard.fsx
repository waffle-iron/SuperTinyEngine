#r "../node_modules/fable-core/Fable.Core.dll"

namespace Fable.Helpers.Herebris.Ste

open Fable.Core
open Fable.Import.Browser

module Keyboard =
  /// Set of currently pressed keys
  let mutable keysPressed = Set.empty

  let code x =
    if keysPressed.Contains(x) then 1 else 0

  let update (e: KeyboardEvent, pressed) =
    let keyCode = int e.keyCode
    let op = if pressed then Set.add else Set.remove
    keysPressed <- op keyCode keysPressed
    null

  let arrows () =
    (code 39 - code 37, code 38 - code 40)

  let init () =
    document.addEventListener_keydown (fun e -> update(e, true))
    document.addEventListener_keyup (fun e -> update(e, false))
