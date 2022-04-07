function Notify(title, message, time, icon, type)
	SendNUIMessage({
		action = 'sendnoti',
		title = title,
		icon = icon,
		message = message,
		time = time
		type = type,
	})
end

RegisterNetEvent('cs-notify:Notify')
AddEventHandler('cs-notify:Notify', function(title, message, time, icon, type)
	Notify(title, message, time, icon, type)
end)

	--exports['cs-notify']:Notify("SUCCESS", "Lorem Ipsum.", 5000, "fa-solid fa-check", 'success')
