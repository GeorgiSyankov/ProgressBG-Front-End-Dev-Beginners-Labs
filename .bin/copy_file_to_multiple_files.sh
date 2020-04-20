dest_folder="../students"

declare -a students=(
	"IvayloIvanov"
	"MartinPavlov"
	"DimitarDimitrov"
	"IliyaPanayotov"
	"PetyaIvanova"
	"HristoGeorgiev"
	"PlamenTanev"
)

for i in "${students[@]}"
do
   echo "$dest_folder/$i"
   tee <$1 $dest_folder/$i/$1 >/dev/null
done
















