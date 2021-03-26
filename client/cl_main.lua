-- Example of how it works. Look at the `useCoreService`, and the nui function in `nui-events`

RegisterCommand("ng_nui:toggle", function(source, args, rawCommand)
  SendNUIMessage({
    app = "ANGULARNUI",
    service = "DisplayService",
    method = "toggleVisibility",
    data = ""
  })
end, false)