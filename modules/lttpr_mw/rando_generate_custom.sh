# Declare all variables, and assign all variables that won't need further evaluation
# All variables that have a comment after will be evaluated later
# You can use this as a template, just change the arguments in the variable
# You can set them to be static for requiring less user input
# And you can change the arguments to accept a different input order
# Spaces must follow all used arguments and unused arguments must be null
OUTPUTPATH="--outputpath /home/minecraft/multiworld/patched_roms/${1} "
CREATESPOILER="" # $2
LOGIC="--logic ${3} "
MODE="--mode ${4} "
SWORDS="--swords ${5} "
GOAL="--goal ${6} "
DIFFICULTY="--difficulty ${7} "
ITEMFUNCTIONALITY="--item_functionality ${8} "
TIMER="--timer ${9} "
PROGRESSIVE="--progressive ${10} "
ALGORITHM="--algorithm ${11} "
SHUFFLE="--shuffle ${12} "
CRYSTALSGANON="--crystals_ganon ${13} "
CRYSTALSGT="--crystals_gt ${14} "
OPENPYRAMID="" # $15
ROM="--rom /home/minecraft/multiworld/ALttPEntranceRandomizer-multiworld_31/zeldabase.sfc " # fixed assignment
LOGLEVEL="--loglevel ${16} "
SEED="" # $17 $18
COUNT="--count ${19} "
FASTMENU="--fastmenu ${20} "
QUICKSWAP="" # $21
DISABLEMUSIC="" # $22
MAPSHUFFLE="" # $23
COMPASSSHUFFLE="" # $24
KEYSHUFFLE="" # $25
BIGKEYSHUFFLE="" # $26
RETRO="" # 27
STARTINVENTORY="" # $28 $29
ACCESSIBILITY="--accessibility ${30} "
HINTS="" # $31
NOSHUFFLEGANON="" # $32
HEARTBEEP="--heartbeep ${33} "
HEARTCOLOR="--heartcolor ${34} "
OWPALETTES="--ow_palettes ${35} "
UWPALETTES="--uw_palettes ${36} "
SPRITE="" # $37 $38
SHUFFLEBOSSES="--shufflebosses ${39} "
SHUFFLEENEMIES="--shuffleenemies ${40} "
ENEMYHEALTH="--enemy_health ${41} "
ENEMYDAMAGE="--enemy_damage ${42} "
SHUFFLEPOTS="" # $43
BEEMIZER="" # $44 $45
MULTI="--multi ${46} "
NAMES="--names ${47} "
TEAMS="" # $48 $49
OUTPUTNAME="--outputname _" #last argument, no space after
#Begin setting of variables that need further evaluation
if [ ${2} = "yes" ]
then
        CREATESPOILER="--create_spoiler "
else
        CREATESPOILER=""
fi
if [ ${15} = "yes" ]
then
        OPENPYRAMID="--openpyramid "
else
        OPENPYRAMID=""
fi
if [ ${17} = "yes" ]
then
        SEED="--seed ${18} "
else
        SEED=""
fi
if [ ${21} = "yes" ]
then
        QUICKSWAP="--quickswap "
else
        QUICKSWAP=""
fi
if [ ${22} = "yes" ]
then
        DISABLEMUSIC="--disablemusic "
else
        DISABLEMUSIC=""
fi
if [ ${23} = "yes" ]
then
        MAPSHUFFLE="--mapshuffle "
else
        MAPSHUFFLE=""
fi
if [ ${24} = "yes" ]
then
        COMPASSSHUFFLE="--compassshuffle "
else
        COMPASSSHUFFLE=""
fi
if [ ${25} = "yes" ]
then
        KEYSHUFFLE="--keyshuffle "
else
        KEYSHUFFLE=""
fi
if [ ${26} = "yes" ]
then
        BIGKEYSHUFFLE="--bigkeyshuffle "
else
        BIGKEYSHUFFLE=""
fi
if [ ${27} = "yes" ]
then
	RETRO="--retro "
else
	RETRO=""
fi
if [ ${28} = "yes" ]
then
	STARTINVENTORY="--startinventory ${29} "
else
	STARTINVENTORY=""
fi
if [ ${31} = "yes" ]
then
	HINTS="--hints "
else
	HINTS=""
fi
if [ ${32} = "yes" ]
then
	NOSHUFFLEGANON="--noshuffleganon "
else
	NOSHUFFLEGANON=""
fi
if [ ${37} = "yes" ]
then
	SPRITE="--sprite ${38} "
else
	SPRITE=""
fi
if [ ${43} = "yes" ]
then
	SHUFFLEPOTS="--shufflepots "
else
	SHUFFLEPOTS=""
fi
if [ ${44} = "yes" ]
then
	BEEMIZER="--beemizer ${45} "
else
	BEEMIZER=""
fi
if [ ${48} = "yes" ]
then
	TEAMS="--teams ${49} "
else
	TEAMS=""
fi
#End variable assignment
python3.7 /home/minecraft/multiworld/ALttPEntranceRandomizer-multiworld_31/EntranceRandomizer.py ${CREATESPOILER}${LOGIC}${MODE}${SWORDS}${GOAL}${DIFFICULTY}${ITEMFUNCTIONALITY}${TIMER}${PROGRESSIVE}${ALGORITHM}${SHUFFLE}${CRYSTALSGANON}${CRYSTALSGT}${OPENPYRAMID}${ROM}${LOGLEVEL}${SEED}${COUNT}${FASTMENU}${QUICKSWAP}${DISABLEMUSIC}${MAPSHUFFLE}${COMPASSSHUFFLE}${KEYSHUFFLE}${BIGKEYSHUFFLE}${RETRO}${STARTINVENTORY}${ACCESSIBILITY}${HINTS}${NOSHUFFLEGANON}${HEARTBEEP}${HEARTCOLOR}${OWPALETTES}${UWPALETTES}${SPRITE}${SHUFFLEBOSSES}${SHUFFLEENEMIES}${ENEMYHEALTH}${ENEMYDAMAGE}${SHUFFLEPOTS}${BEEMIZER}${MULTI}${NAMES}${TEAMS}${OUTPUTPATH}${OUTPUTNAME}
