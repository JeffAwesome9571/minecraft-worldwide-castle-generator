let castle_location: Position = null
if (gameplay.timeQuery(GAME_TIME) < 20) {
    for (let index = 0; index < 1000000; index++) {
        castle_location = positions.groundPosition(randpos(
        pos(30000, 512, 30000),
        pos(-30000, 512, -30000)
        ))
        castles.buildSimpleCastle(COBBLESTONE, positions.groundPosition(pos(castle_location.getValue(Axis.X), 512, castle_location.getValue(Axis.Z))))
        blocks.place(CHISELED_TUFF_BRICKS, positions.groundPosition(pos(castle_location.getValue(Axis.X), castle_location.getValue(Axis.Y) + 9, castle_location.getValue(Axis.Z))))
        blocks.place(DIAMOND_BLOCK, positions.groundPosition(pos(castle_location.getValue(Axis.X), castle_location.getValue(Axis.Y) + 10, castle_location.getValue(Axis.Z))))
    }
}
