function caixa () {
    keyboard.sendString("c")
    basic.showString("c")
    basic.clearScreen()
}
input.onPinPressed(TouchPin.P0, function () {
	
})
function ganza () {
    keyboard.sendString("g")
    basic.showString("g")
    basic.clearScreen()
}
function pandiero () {
    keyboard.sendString("p")
    basic.showString("p")
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
	
})
function agogo () {
    keyboard.sendString("a")
    basic.showString("a")
    basic.clearScreen()
}
input.onPinPressed(TouchPin.P2, function () {
	
})
function surdo () {
    keyboard.sendString("s")
    basic.showString("s")
    basic.clearScreen()
}
input.onPinPressed(TouchPin.P1, function () {
	
})
input.onGesture(Gesture.Shake, function () {
	
})
keyboard.startKeyboardService()
