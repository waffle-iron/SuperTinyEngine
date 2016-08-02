#r "../node_modules/fable-core/Fable.Core.dll"

namespace Fable.Helpers.Herebris.Ste

module Utils =
  open Fable.Core
  open Fable.Import
  open Fable.Import.Browser

  let toPixel (n) =
    sprintf "%ipx" n

  type HttpMethod<'T> =
    | Get of url: string

  let ajax meth onSucess onError =
    let url, meth, data =
      match meth with
      | Get url -> url, "GET", None
    let req = XMLHttpRequest.Create()
    req.onreadystatechange <- fun _ ->
      if req.readyState = 4. then
        match req.status with
        | 200. | 0. ->
          req.responseText |> onSucess
        | _ -> onError req.status
      null
    req.``open``(meth, url, true)
    req.setRequestHeader("Content-Type", "application/json")
    req.send(data)

