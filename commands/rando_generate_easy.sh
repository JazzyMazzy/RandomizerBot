# Declare all variables, and assign all variables that won't need further evaluation
# All variables that have a comment after will be evaluated later
# You can use this as a template, just change the arguments in the variable
# You can set them to be static for requiring less user input
# And you can change the arguments to accept a different input order
# Spaces must follow all used arguments and unused arguments must be null
OUTPUTPATH="--outputpath /home/minecraft/multiworld/patched_roms/${1} "
CREATESPOILER="--create_spoiler "
LOGIC="--logic noglitches "
MODE="--mode standard "
SWORDS="--swords vanilla "
GOAL="--goal ganon "
DIFFICULTY="--difficulty normal "
ITEMFUNCTIONALITY="--item_functionality normal "
TIMER="--timer none "
PROGRESSIVE="--progressive on "
ALGORITHM="--algorithm balanced "
SHUFFLE="--shuffle vanilla "
CRYSTALSGANON="--crystals_ganon 7 "
CRYSTALSGT="--crystals_gt 7 "
OPENPYRAMID=""
ROM="--rom /home/minecraft/multiworld/ALttPEntranceRandomizer-multiworld_31/zeldabase.sfc " # fixed assignment
LOGLEVEL="--loglevel error "
SEED=""
COUNT="--count 1 "
FASTMENU="--fastmenu quadruple "
QUICKSWAP="--quickswap "
DISABLEMUSIC=""
MAPSHUFFLE=""
COMPASSSHUFFLE=""
KEYSHUFFLE=""
BIGKEYSHUFFLE=""
RETRO=""
STARTINVENTORY=""
ACCESSIBILITY="--accessibility items "
HINTS="--hints "
NOSHUFFLEGANON=""
HEARTBEEP="--heartbeep half "
HEARTCOLOR="--heartcolor random "
OWPALETTES="--ow_palettes default "
UWPALETTES="--uw_palettes default "
SPRITE=""
SHUFFLEBOSSES="--shufflebosses none "
SHUFFLEENEMIES="--shuffleenemies none "
ENEMYHEALTH="--enemy_health default "
ENEMYDAMAGE="--enemy_damage default "
SHUFFLEPOTS=""
BEEMIZER=""
MULTI="--multi ${2} "
NAMES="--names ${3} "
TEAMS=""
OUTPUTNAME="--outputname _" #last argument, no space after
#End variable assignment
python3.7 /home/minecraft/multiworld/ALttPEntranceRandomizer-multiworld_31/EntranceRandomizer.py ${CREATESPOILER}${LOGIC}${MODE}${SWORDS}${GOAL}${DIFFICULTY}${ITEMFUNCTIONALITY}${TIMER}${PROGRESSIVE}${ALGORITHM}${SHUFFLE}${CRYSTALSGANON}${CRYSTALSGT}${OPENPYRAMID}${ROM}${LOGLEVEL}${SEED}${COUNT}${FASTMENU}${QUICKSWAP}${DISABLEMUSIC}${MAPSHUFFLE}${COMPASSSHUFFLE}${KEYSHUFFLE}${BIGKEYSHUFFLE}${RETRO}${STARTINVENTORY}${ACCESSIBILITY}${HINTS}${NOSHUFFLEGANON}${HEARTBEEP}${HEARTCOLOR}${OWPALETTES}${UWPALETTES}${SPRITE}${SHUFFLEBOSSES}${SHUFFLEENEMIES}${ENEMYHEALTH}${ENEMYDAMAGE}${SHUFFLEPOTS}${BEEMIZER}${MULTI}${NAMES}${TEAMS}${OUTPUTPATH}${OUTPUTNAME}
