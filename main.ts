input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.soundLevel())
    basic.pause(1000)
})
let nivel = 0
music.play(music.stringPlayable("F A E G D F C B ", 500), music.PlaybackMode.InBackground)
basic.showString("Medidor volumen")
basic.forever(function () {
    nivel = input.soundLevel()
    if (nivel < 70) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else if (nivel < 140) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            . . . . .
            `)
    } else if (nivel > 140) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
