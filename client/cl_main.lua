-- Example of how it works. Look at the `useCoreService`, and the nui function in `nui-events`

RegisterCommand('show:nui', function(source, args, rawCommand)
  SendNuiMessage({
    app = "ANGULARNUI",
    method = "setVisibility",
    data = true
  })
end, false)