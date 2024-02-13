interface IExercises {
  id: string;
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  name: string;
  target: string;
}

const exercises: IExercises[] = [
    {
        "id": "0001",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0001.gif",
        "name": "abdominais a 3/4",
        "target": "abdômen"
    },
    {
        "id": "0002",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0002.gif",
        "name": "inclinação lateral a 45°",
        "target": "abdômen"
    },
    {
        "id": "0003",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0003.gif",
        "name": "bicicleta no ar",
        "target": "abdômen"
    },
    {
        "id": "1512",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1512.gif",
        "name": "alongamento de agachamento em quatro apoios",
        "target": "quadríceps"
    },
    {
        "id": "0006",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0006.gif",
        "name": "toques alternados nos calcanhares",
        "target": "abdômen"
    },
    {
        "id": "0007",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0007.gif",
        "name": "puxada lateral alternada",
        "target": "dorsal"
    },
    {
        "id": "1368",
        "bodyPart": "panturrilha",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1368.gif",
        "name": "círculos de tornozelo",
        "target": "panturrilha"
    },
    {
        "id": "3293",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3293.gif",
        "name": "puxada arqueira",
        "target": "dorsal"
    },
    {
        "id": "3294",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3294.gif",
        "name": "flexão arqueira",
        "target": "peitoral"
    },
    {
        "id": "2355",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2355.gif",
        "name": "balanços de braço com pernas dobradas penduradas",
        "target": "abdômen"
    },
    {
        "id": "2333",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2333.gif",
        "name": "balanços de braço com pernas estendidas penduradas",
        "target": "abdômen"
    },
    {
        "id": "3214",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3214.gif",
        "name": "toque circular com braços afastados nos dedos dos pés (masculino)",
        "target": "glúteos"
    },
    {
        "id": "3204",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3204.gif",
        "name": "abdominais completos com os braços acima da cabeça (masculino)",
        "target": "abdômen"
    },
    {
        "id": "0009",
        "bodyPart": "peito",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0009.gif",
        "name": "mergulho assistido no peito (ajoelhado)",
        "target": "peitoral"
    },
    {
        "id": "0011",
        "bodyPart": "core",
        "equipment": "com ajuda",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0011.gif",
        "name": "elevação de joelho pendurado assistido",
        "target": "abdômen"
    },
    {
        "id": "0010",
        "bodyPart": "core",
        "equipment": "com ajuda",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0010.gif",
        "name": "elevação de joelho pendurado assistido com lançamento",
        "target": "abdômen"
    },
    {
        "id": "1708",
        "bodyPart": "panturrilha",
        "equipment": "com ajuda",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1708.gif",
        "name": "alongamento de panturrilha deitado assistido",
        "target": "panturrilha"
    },
    {
        "id": "1709",
        "bodyPart": "quadriceps/posterior",
        "equipment": "com ajuda",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1709.gif",
        "name": "alongamento de glúteos deitado assistido",
        "target": "glúteos"
    },
    {
        "id": "1710",
        "bodyPart": "quadriceps/posterior",
        "equipment": "com ajuda",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1710.gif",
        "name": "alongamento de glúteos e piriforme deitado assistido",
        "target": "glúteos"
    },
    {
        "id": "0012",
        "bodyPart": "core",
        "equipment": "com ajuda",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0012.gif",
        "name": "elevação de perna deitada assistida com lançamento lateral",
        "target": "abdômen"
    },
    {
        "id": "0013",
        "bodyPart": "core",
        "equipment": "com ajuda",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0013.gif",
        "name": "elevação de perna deitada assistida com lançamento",
        "target": "abdômen"
    },
    {
        "id": "0014",
        "bodyPart": "core",
        "equipment": "bola",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0014.gif",
        "name": "torção russa assistida",
        "target": "abdômen"
    },
    {
        "id": "0015",
        "bodyPart": "costas",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0015.gif",
        "name": "puxada paralela assistida de perto",
        "target": "dorsal"
    },
    {
        "id": "0016",
        "bodyPart": "quadriceps/posterior",
        "equipment": "com ajuda",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0016.gif",
        "name": "extensão de perna deitada assistida",
        "target": "isquiotibiais"
    },
    {
        "id": "1713",
        "bodyPart": "quadriceps/posterior",
        "equipment": "com ajuda",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1713.gif",
        "name": "alongamento de quadríceps deitado assistido",
        "target": "quadríceps"
    },
    {
        "id": "1714",
        "bodyPart": "core",
        "equipment": "com ajuda",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1714.gif",
        "name": "alongamento do reto femoral deitado assistido",
        "target": "abdômen"
    },
    {
        "id": "0017",
        "bodyPart": "costas",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0017.gif",
        "name": "puxada assistida",
        "target": "dorsal"
    },
    {
        "id": "1716",
        "bodyPart": "peito",
        "equipment": "com ajuda",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1716.gif",
        "name": "alongamento do peitoral maior sentado assistido com bola de estabilidade",
        "target": "peitoral"
    },
    {
        "id": "1712",
        "bodyPart": "quadriceps/posterior",
        "equipment": "com ajuda",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1712.gif",
        "name": "alongamento do adutor deitado de lado assistido",
        "target": "adutores"
    },
    {
        "id": "1758",
        "bodyPart": "core",
        "equipment": "com ajuda",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1758.gif",
        "name": "abdominais assistidos",
        "target": "abdômen"
    },
    {
        "id": "1431",
        "bodyPart": "costas",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1431.gif",
        "name": "puxada de pé assistida em pé",
        "target": "dorsal"
    },
    {
        "id": "1432",
        "bodyPart": "costas",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1432.gif",
        "name": "puxada assistida em pé",
        "target": "dorsal"
    },
    {
        "id": "0018",
        "bodyPart": "biceps/triceps",
        "equipment": "com ajuda",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0018.gif",
        "name": "extensão de tríceps em pé assistida (com toalha)",
        "target": "tríceps"
    },
    {
        "id": "0019",
        "bodyPart": "biceps/triceps",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0019.gif",
        "name": "mergulho de tríceps assistido (ajoelhado)",
        "target": "tríceps"
    },
    {
        "id": "2364",
        "bodyPart": "peito",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2364.gif",
        "name": "mergulho assistido largo de peito (ajoelhado)",
        "target": "peitoral"
    },
    {
        "id": "3220",
        "bodyPart": "cardio",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3220.gif",
        "name": "saltos à distância (masculino)",
        "target": "cardio"
    },
    {
        "id": "3672",
        "bodyPart": "cardio",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3672.gif",
        "name": "passo para trás e para frente",
        "target": "cardio"
    },
    {
        "id": "1314",
        "bodyPart": "costas",
        "equipment": "bola de estabiliade",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1314.gif",
        "name": "extensão de costas na bola de exercícios",
        "target": "coluna"
    },
    {
        "id": "3297",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3297.gif",
        "name": "alavanca para trás",
        "target": "latíssimo"
    },
    {
        "id": "1405",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1405.gif",
        "name": "alongamento do peitoral para trás",
        "target": "dorsal"
    },
    {
        "id": "1473",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1473.gif",
        "name": "salto para trás",
        "target": "quadríceps"
    },
    {
        "id": "0020",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0020.gif",
        "name": "prancha de equilíbrio",
        "target": "quadríceps"
    },
    {
        "id": "0968",
        "bodyPart": "biceps/triceps",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0968.gif",
        "name": "curl bíceps alternado com elástico",
        "target": "bíceps"
    },
    {
        "id": "0969",
        "bodyPart": "core",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0969.gif",
        "name": "v-up alternado com elástico",
        "target": "abdômen"
    },
    {
        "id": "0970",
        "bodyPart": "costas",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0970.gif",
        "name": "puxada assistida com elástico",
        "target": "dorsal"
    },
    {
        "id": "0971",
        "bodyPart": "core",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0971.gif",
        "name": "roda abdominal assistida com elástico",
        "target": "abdômen"
    },
    {
        "id": "1254",
        "bodyPart": "peito",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1254.gif",
        "name": "supino com elástico",
        "target": "peitoral"
    },
    {
        "id": "0980",
        "bodyPart": "quadriceps/posterior",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0980.gif",
        "name": "extensão de quadril inclinado com elástico",
        "target": "glúteos"
    },
    {
        "id": "0972",
        "bodyPart": "core",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0972.gif",
        "name": "crunch de bicicleta com elástico",
        "target": "abdômen"
    },
    {
        "id": "0974",
        "bodyPart": "costas",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0974.gif",
        "name": "puxada fechada com elástico",
        "target": "dorsal"
    },
    {
        "id": "0975",
        "bodyPart": "biceps/triceps",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0975.gif",
        "name": "flexão fechada com elástico",
        "target": "tríceps"
    },
    {
        "id": "0976",
        "bodyPart": "biceps/triceps",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0976.gif",
        "name": "curl de concentração com elástico",
        "target": "bíceps"
    },
    {
        "id": "3117",
        "bodyPart": "costas",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3117.gif",
        "name": "puxada fechada com elástico com as costas fixas",
        "target": "dorsal"
    },
    {
        "id": "3116",
        "bodyPart": "costas",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3116.gif",
        "name": "puxada invertida com elástico com as costas fixas",
        "target": "dorsal"
    },
    {
        "id": "0977",
        "bodyPart": "ombro",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0977.gif",
        "name": "elevação lateral frontal com elástico",
        "target": "deltóides"
    },
    {
        "id": "0978",
        "bodyPart": "ombro",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0978.gif",
        "name": "elevação frontal com elástico",
        "target": "deltóides"
    },
    {
        "id": "1408",
        "bodyPart": "quadriceps/posterior",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1408.gif",
        "name": "elevação de quadril com elástico",
        "target": "glúteos"
    },
    {
        "id": "0979",
        "bodyPart": "core",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0979.gif",
        "name": "pressão de Pallof horizontal com elástico",
        "target": "abdômen"
    },
    {
        "id": "0981",
        "bodyPart": "core",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0981.gif",
        "name": "abdominal jack knife com elástico",
        "target": "abdômen"
    },
    {
        "id": "0983",
        "bodyPart": "costas",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0983.gif",
        "name": "puxada unilateral de joelho ajoelhado com elástico",
        "target": "dorsal"
    },
    {
        "id": "0985",
        "bodyPart": "core",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0985.gif",
        "name": "crunch torcional ajoelhado com elástico",
        "target": "abdômen"
    },
    {
        "id": "0984",
        "bodyPart": "quadriceps/posterior",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0984.gif",
        "name": "rotação interna do quadril deitado com elástico",
        "target": "glúteos"
    },
    {
        "id": "1002",
        "bodyPart": "core",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1002.gif",
        "name": "elevação de perna estendida deitada com elástico",
        "target": "abdômen"
    },
    {
        "id": "0986",
        "bodyPart": "biceps/triceps",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0986.gif",
        "name": "curl de bíceps unilateral acima da cabeça com elástico",
        "target": "bíceps"
    },
    {
        "id": "0987",
        "bodyPart": "quadriceps/posterior",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0987.gif",
        "name": "agachamento unilateral com elástico",
        "target": "quadríceps"
    },
    {
        "id": "0988",
        "bodyPart": "costas",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0988.gif",
        "name": "remada unilateral em pé com elástico",
        "target": "latíssimo"
    },
    {
        "id": "0989",
        "bodyPart": "peito",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0989.gif",
        "name": "flexão de peito torcida unilateral com elástico",
        "target": "peitoral"
    },
    {
        "id": "0990",
        "bodyPart": "costas",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0990.gif",
        "name": "remada sentada torcida unilateral com elástico",
        "target": "latíssimo"
    },
    {
        "id": "0991",
        "bodyPart": "quadriceps/posterior",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0991.gif",
        "name": "pull through com elástico",
        "target": "glúteos"
    },
    {
        "id": "0992",
        "bodyPart": "core",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0992.gif",
        "name": "abdominal com pressão com elástico",
        "target": "abdômen"
    },
    {
        "id": "0993",
        "bodyPart": "ombro",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0993.gif",
        "name": "elevação lateral reversa com elástico",
        "target": "deltóides"
    },
    {
        "id": "0994",
        "bodyPart": "antebraço",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0994.gif",
        "name": "curl de pulso reverso com elástico",
        "target": "antebraços"
    },
    {
        "id": "0996",
        "bodyPart": "quadriceps/posterior",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0996.gif",
        "name": "rotação interna do quadril sentado com elástico",
        "target": "glúteos"
    },
    {
        "id": "1011",
        "bodyPart": "core",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1011.gif",
        "name": "torção sentada com elástico",
        "target": "abdômen"
    },
    {
        "id": "0997",
        "bodyPart": "ombro",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0997.gif",
        "name": "elevação de ombro com elástico",
        "target": "deltóides"
    },
    {
        "id": "1018",
        "bodyPart": "costas",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1018.gif",
        "name": "encolhimento de ombros com elástico",
        "target": "trapézio"
    },
    {
        "id": "0998",
        "bodyPart": "biceps/triceps",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0998.gif",
        "name": "extensão de tríceps lateral com elástico",
        "target": "tríceps"
    },
    {
        "id": "0999",
        "bodyPart": "panturrilha",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0999.gif",
        "name": "elevação de panturrilha unilateral com elástico",
        "target": "panturrilha"
    },
    {
        "id": "1000",
        "bodyPart": "panturrilha",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1000.gif",
        "name": "elevação de panturrilha unilateral invertida com elástico",
        "target": "panturrilha"
    },
    {
        "id": "1001",
        "bodyPart": "quadriceps/posterior",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1001.gif",
        "name": "agachamento unilateral com elástico",
        "target": "quadríceps"
    },
    {
        "id": "1004",
        "bodyPart": "quadriceps/posterior",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1004.gif",
        "name": "agachamento com elástico",
        "target": "glúteos"
    },
    {
        "id": "1003",
        "bodyPart": "quadriceps/posterior",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1003.gif",
        "name": "remada com agachamento com elástico",
        "target": "glúteos"
    },
    {
        "id": "1005",
        "bodyPart": "core",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1005.gif",
        "name": "crunch em pé com elástico",
        "target": "abdômen"
    },
    {
        "id": "1022",
        "bodyPart": "ombro",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1022.gif",
        "name": "remada deltóide posterior em pé com elástico",
        "target": "deltóides"
    },
    {
        "id": "1007",
        "bodyPart": "core",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1007.gif",
        "name": "crunch torcional em pé com elástico",
        "target": "abdômen"
    },
    {
        "id": "1008",
        "bodyPart": "quadriceps/posterior",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1008.gif",
        "name": "step-up com elástico",
        "target": "glúteos"
    },
    {
        "id": "1009",
        "bodyPart": "quadriceps/posterior",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1009.gif",
        "name": "stiff leg deadlift com elástico",
        "target": "glúteos"
    },
    {
        "id": "1023",
        "bodyPart": "quadriceps/posterior",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1023.gif",
        "name": "stiff leg deadlift com as costas retas com elástico",
        "target": "glúteos"
    },
    {
        "id": "1010",
        "bodyPart": "costas",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1010.gif",
        "name": "deadlift com perna reta com elástico",
        "target": "coluna"
    },
    {
        "id": "1012",
        "bodyPart": "ombro",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1012.gif",
        "name": "flexão torcional overhead com elástico",
        "target": "deltóides"
    },
    {
        "id": "1369",
        "bodyPart": "panturrilha",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1369.gif",
        "name": "elevação de panturrilha com duas pernas com elástico",
        "target": "panturrilha"
    },
    {
        "id": "1013",
        "bodyPart": "costas",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1013.gif",
        "name": "puxada invertida com elástico",
        "target": "dorsal"
    },
    {
        "id": "1014",
        "bodyPart": "core",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1014.gif",
        "name": "v-up com elástico",
        "target": "abdômen"
    },
    {
        "id": "1015",
        "bodyPart": "core",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1015.gif",
        "name": "pressão de Pallof vertical com elástico",
        "target": "abdômen"
    },
    {
        "id": "1016",
        "bodyPart": "antebraço",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1016.gif",
        "name": "curl de pulso com elástico",
        "target": "antebraços"
    },
    {
        "id": "1017",
        "bodyPart": "ombro",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1017.gif",
        "name": "elevação em Y com elástico",
        "target": "deltóides"
    },
    {
        "id": "0023",
        "bodyPart": "biceps/triceps",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0023.gif",
        "name": "curl bíceps alternado com barra",
        "target": "bíceps"
    },
    {
        "id": "0024",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0024.gif",
        "name": "agachamento frontal no banco com barra",
        "target": "quadríceps"
    },
    {
        "id": "0025",
        "bodyPart": "peito",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0025.gif",
        "name": "supino com barra",
        "target": "peitoral"
    },
    {
        "id": "0026",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0026.gif",
        "name": "agachamento no banco com barra",
        "target": "quadríceps"
    },
    {
        "id": "1316",
        "bodyPart": "costas",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1316.gif",
        "name": "Pullover com barra de braço dobrado",
        "target": "dorsal"
    },
    {
        "id": "0027",
        "bodyPart": "costas",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0027.gif",
        "name": "Remada curvada com barra",
        "target": "latíssimo"
    },
    {
        "id": "2407",
        "bodyPart": "biceps/triceps",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2407.gif",
        "name": "Rosca de bíceps com barra (com suporte de braço)",
        "target": "bíceps"
    },
    {
        "id": "0028",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0028.gif",
        "name": "Limpeza e pressão com barra",
        "target": "quadríceps"
    },
    {
        "id": "0029",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0029.gif",
        "name": "Agachamento frontal com pegada limpa de barra",
        "target": "glúteos"
    },
    {
        "id": "0030",
        "bodyPart": "biceps/triceps",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0030.gif",
        "name": "Supino com pegada fechada de barra",
        "target": "tríceps"
    },
    {
        "id": "0031",
        "bodyPart": "biceps/triceps",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0031.gif",
        "name": "Rosca com barra",
        "target": "bíceps"
    },
    {
        "id": "0032",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0032.gif",
        "name": "Levantamento terra com barra",
        "target": "glúteos"
    },
    {
        "id": "0033",
        "bodyPart": "peito",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0033.gif",
        "name": "Supino declinado com barra",
        "target": "peitoral"
    },
    {
        "id": "0034",
        "bodyPart": "costas",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0034.gif",
        "name": "Pullover declinado com barra de braço dobrado",
        "target": "dorsal"
    },
    {
        "id": "0035",
        "bodyPart": "biceps/triceps",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0035.gif",
        "name": "Pressão de crânio com pegada fechada declinada de barra",
        "target": "tríceps"
    },
    {
        "id": "1255",
        "bodyPart": "peito",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1255.gif",
        "name": "Pullover declinado com barra",
        "target": "peitoral"
    },
    {
        "id": "0036",
        "bodyPart": "peito",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0036.gif",
        "name": "Pressão declinada com pegada larga de barra",
        "target": "peitoral"
    },
    {
        "id": "0037",
        "bodyPart": "costas",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0037.gif",
        "name": "Pullover declinado com pegada larga de barra",
        "target": "dorsal"
    },
    {
        "id": "0038",
        "bodyPart": "biceps/triceps",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0038.gif",
        "name": "Rosca inversa com barra",
        "target": "bíceps"
    },
    {
        "id": "1370",
        "bodyPart": "panturrilha",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1370.gif",
        "name": "Elevação de panturrilha no chão com barra",
        "target": "panturrilha"
    },
    {
        "id": "0039",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0039.gif",
        "name": "Agachamento frontal no peito com barra",
        "target": "glúteos"
    },
    {
        "id": "0041",
        "bodyPart": "ombro",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0041.gif",
        "name": "Elevação frontal com barra",
        "target": "deltóides"
    },
    {
        "id": "0040",
        "bodyPart": "peito",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0040.gif",
        "name": "Elevação frontal com barra e pullover",
        "target": "peitoral"
    },
    {
        "id": "0042",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0042.gif",
        "name": "Agachamento frontal com barra",
        "target": "glúteos"
    },
    {
        "id": "0043",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0043.gif",
        "name": "Agachamento completo com barra",
        "target": "glúteos"
    },
    {
        "id": "1461",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1461.gif",
        "name": "Agachamento completo com barra (ponto de vista traseiro)",
        "target": "glúteos"
    },
    {
        "id": "1462",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1462.gif",
        "name": "Agachamento completo com barra (ponto de vista lateral)",
        "target": "glúteos"
    },
    {
        "id": "1545",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1545.gif",
        "name": "Agachamento zercher completo com barra",
        "target": "glúteos"
    },
    {
        "id": "1409",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1409.gif",
        "name": "Ponte de glúteos com barra",
        "target": "glúteos"
    },
    {
        "id": "3562",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3562.gif",
        "name": "Ponte de glúteos com barra em duas pernas no banco (masculino)",
        "target": "glúteos"
    },
    {
        "id": "0044",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0044.gif",
        "name": "Bom dia com barra",
        "target": "isquiotibiais"
    },
    {
        "id": "0045",
        "bodyPart": "peito",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0045.gif",
        "name": "Supino guilhotina com barra",
        "target": "peitoral"
    },
    {
        "id": "0046",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0046.gif",
        "name": "Agachamento hack com barra",
        "target": "glúteos"
    },
    {
        "id": "1436",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1436.gif",
        "name": "Agachamento alto com barra",
        "target": "glúteos"
    },
    {
        "id": "0047",
        "bodyPart": "peito",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0047.gif",
        "name": "Supino inclinado com barra",
        "target": "peitoral"
    },
    {
        "id": "1719",
        "bodyPart": "biceps/triceps",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1719.gif",
        "name": "Supino inclinado com pegada fechada com barra",
        "target": "tríceps"
    },
    {
        "id": "0048",
        "bodyPart": "biceps/triceps",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0048.gif",
        "name": "Pressão reversa inclinada com barra",
        "target": "tríceps"
    },
    {
        "id": "0049",
        "bodyPart": "costas",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0049.gif",
        "name": "Remada inclinada com barra",
        "target": "latíssimo"
    },
    {
        "id": "0050",
        "bodyPart": "peito",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0050.gif",
        "name": "Elevação de ombros inclinada com barra",
        "target": "serrátil"
    },
    {
        "id": "0051",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0051.gif",
        "name": "Agachamento Jefferson com barra",
        "target": "glúteos"
    },
    {
        "id": "0052",
        "bodyPart": "biceps/triceps",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0052.gif",
        "name": "Supino JM com barra",
        "target": "tríceps"
    },
    {
        "id": "0053",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0053.gif",
        "name": "Agachamento com salto com barra",
        "target": "glúteos"
    },
    {
        "id": "1410",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1410.gif",
        "name": "Afundo lateral com barra",
        "target": "glúteos"
    },
    {
        "id": "1435",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1435.gif",
        "name": "Agachamento baixo com barra",
        "target": "glúteos"
    },
    {
        "id": "0054",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0054.gif",
        "name": "Afundo com barra",
        "target": "glúteos"
    },
    {
        "id": "1720",
        "bodyPart": "biceps/triceps",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1720.gif",
        "name": "Extensão de tríceps deitado com barra atrás da cabeça",
        "target": "tríceps"
    },
    {
        "id": "0055",
        "bodyPart": "biceps/triceps",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0055.gif",
        "name": "Pressão fechada deitada com barra",
        "target": "tríceps"
    },
    {
        "id": "0056",
        "bodyPart": "biceps/triceps",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0056.gif",
        "name": "Extensão de tríceps fechada deitada com barra",
        "target": "tríceps"
    },
    {
        "id": "0057",
        "bodyPart": "biceps/triceps",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0057.gif",
        "name": "Extensão deitada com barra",
        "target": "tríceps"
    },
    {
        "id": "0058",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0058.gif",
        "name": "Levantamento deitado (no quadril) com barra",
        "target": "glúteos"
    },
    {
        "id": "0059",
        "bodyPart": "biceps/triceps",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0059.gif",
        "name": "Rosca preacher deitada com barra",
        "target": "bíceps"
    },
    {
        "id": "0061",
        "bodyPart": "biceps/triceps",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0061.gif",
        "name": "Extensão de tríceps deitada com barra",
        "target": "tríceps"
    },
    {
        "id": "0060",
        "bodyPart": "biceps/triceps",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0060.gif",
        "name": "Extensão de tríceps deitada com barra (crânio)",
        "target": "tríceps"
    },
    {
        "id": "0063",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0063.gif",
        "name": "Agachamento com barra de estreitamento",
        "target": "glúteos"
    },
    {
        "id": "0064",
        "bodyPart": "costas",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0064.gif",
        "name": "Remada unilateral com barra",
        "target": "latíssimo"
    },
    {
        "id": "0065",
        "bodyPart": "biceps/triceps",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0065.gif",
        "name": "Supino unilateral no chão com barra",
        "target": "tríceps"
    },
    {
        "id": "0066",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0066.gif",
        "name": "Levantamento lateral unilateral com barra",
        "target": "glúteos"
    },
    {
        "id": "0067",
        "bodyPart": "ombro",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0067.gif",
        "name": "Snatch unilateral com barra",
        "target": "deltóides"
    },
    {
        "id": "0068",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0068.gif",
        "name": "Agachamento unilateral com barra",
        "target": "quadríceps"
    },
    {
        "id": "0069",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0069.gif",
        "name": "Agachamento acima da cabeça com barra",
        "target": "quadríceps"
    },
    {
        "id": "1411",
        "bodyPart": "antebraço",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1411.gif",
        "name": "Curl de pulso com palmas para baixo com barra em um banco",
        "target": "antebraços"
    },
    {
        "id": "1412",
        "bodyPart": "antebraço",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1412.gif",
        "name": "Curl de pulso com palmas para cima com barra em um banco",
        "target": "antebraços"
    },
    {
        "id": "3017",
        "bodyPart": "costas",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3017.gif",
        "name": "Remada Pendlay com barra",
        "target": "latíssimo"
    },
    {
        "id": "1751",
        "bodyPart": "biceps/triceps",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1751.gif",
        "name": "Pressões de pino com barra",
        "target": "tríceps"
    },
    {
        "id": "0070",
        "bodyPart": "biceps/triceps",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0070.gif",
        "name": "Rosca preacher com barra",
        "target": "bíceps"
    },
    {
        "id": "0071",
        "bodyPart": "core",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0071.gif",
        "name": "Abdominal com pressão de barra",
        "target": "abdômen"
    },
    {
        "id": "0072",
        "bodyPart": "biceps/triceps",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0072.gif",
        "name": "Curl inclinado deitado com barra",
        "target": "bíceps"
    },
    {
        "id": "0073",
        "bodyPart": "costas",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0073.gif",
        "name": "Pullover com barra",
        "target": "dorsal"
    },
    {
        "id": "0022",
        "bodyPart": "costas",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0022.gif",
        "name": "Pullover para pressão com barra",
        "target": "dorsal"
    },
    {
        "id": "0074",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0074.gif",
        "name": "Puxada na barra de apoio",
        "target": "glúteos"
    },
    {
        "id": "0075",
        "bodyPart": "ombro",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0075.gif",
        "name": "Elevação lateral do deltóide com barra",
        "target": "deltóides"
    },
    {
        "id": "0076",
        "bodyPart": "ombro",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0076.gif",
        "name": "Remada lateral do deltóide com barra",
        "target": "deltóides"
    },
    {
        "id": "0078",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0078.gif",
        "name": "Afundo reverso com barra",
        "target": "glúteos"
    },
    {
        "id": "0077",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0077.gif",
        "name": "Afundo reverso com barra v. 2",
        "target": "glúteos"
    },
    {
        "id": "0079",
        "bodyPart": "antebraço",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0079.gif",
        "name": "Curl reverso de pulso v. 2 com barra",
        "target": "antebraços"
    },
    {
        "id": "2187",
        "bodyPart": "biceps/triceps",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2187.gif",
        "name": "Supino inclinado com pegada fechada reversa com barra",
        "target": "tríceps"
    },
    {
        "id": "0080",
        "bodyPart": "biceps/triceps",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0080.gif",
        "name": "Curl reverso com barra",
        "target": "bíceps"
    },
    {
        "id": "0118",
        "bodyPart": "costas",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0118.gif",
        "name": "Remada curvada com pegada reversa com barra",
        "target": "latíssimo"
    },
    {
        "id": "1256",
        "bodyPart": "peito",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1256.gif",
        "name": "Supino declinado com pegada reversa com barra",
        "target": "peitoral"
    },
    {
        "id": "1257",
        "bodyPart": "peito",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1257.gif",
        "name": "Supino inclinado com pegada reversa com barra",
        "target": "peitoral"
    },
    {
        "id": "1317",
        "bodyPart": "costas",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1317.gif",
        "name": "Remada inclinada com pegada reversa com barra",
        "target": "latíssimo"
    },
    {
        "id": "1721",
        "bodyPart": "biceps/triceps",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1721.gif",
        "name": "Skullcrusher com pegada reversa com barra",
        "target": "tríceps"
    },
    {
        "id": "0081",
        "bodyPart": "biceps/triceps",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0081.gif",
        "name": "Curl preacher com pegada reversa com barra",
        "target": "bíceps"
    },
    {
        "id": "0082",
        "bodyPart": "antebraço",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0082.gif",
        "name": "Curl de pulso reverso com barra",
        "target": "antebraços"
    },
    {
        "id": "0084",
        "bodyPart": "core",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0084.gif",
        "name": "Rolamento com barra",
        "target": "abdômen"
    },
    {
        "id": "0083",
        "bodyPart": "core",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0083.gif",
        "name": "Rolamento com barra a partir do banco",
        "target": "abdômen"
    },
    {
        "id": "0085",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0085.gif",
        "name": "Levantamento romeno com barra",
        "target": "glúteos"
    },
    {
        "id": "0086",
        "bodyPart": "ombro",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0086.gif",
        "name": "Pressão militar atrás da cabeça com barra sentado",
        "target": "deltóides"
    },
    {
        "id": "0087",
        "bodyPart": "ombro",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0087.gif",
        "name": "Pressão militar de Bradford com barra sentado",
        "target": "deltóides"
    },
    {
        "id": "0088",
        "bodyPart": "panturrilha",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0088.gif",
        "name": "Elevação de panturrilha sentado com barra",
        "target": "panturrilha"
    },
    {
        "id": "1371",
        "bodyPart": "panturrilha",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1371.gif",
        "name": "Elevação de panturrilha sentado com barra",
        "target": "panturrilha"
    },
    {
        "id": "1718",
        "bodyPart": "biceps/triceps",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1718.gif",
        "name": "Extensão de tríceps com pegada fechada atrás do pescoço sentado com barra",
        "target": "tríceps"
    },
    {
        "id": "0089",
        "bodyPart": "biceps/triceps",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0089.gif",
        "name": "Curl de concentração com pegada fechada sentado com barra",
        "target": "bíceps"
    },
    {
        "id": "0090",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0090.gif",
        "name": "Bom dia sentado com barra",
        "target": "glúteos"
    },
    {
        "id": "0091",
        "bodyPart": "ombro",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0091.gif",
        "name": "Pressão aérea sentado com barra",
        "target": "deltóides"
    },
    {
        "id": "0092",
        "bodyPart": "biceps/triceps",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0092.gif",
        "name": "Extensão de tríceps aérea sentado com barra",
        "target": "tríceps"
    },
    {
        "id": "0094",
        "bodyPart": "core",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0094.gif",
        "name": "Torção sentado com barra",
        "target": "abdômen"
    },
    {
        "id": "0095",
        "bodyPart": "costas",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0095.gif",
        "name": "Encolhimento de ombros com barra",
        "target": "trapézio"
    },
    {
        "id": "0096",
        "bodyPart": "core",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0096.gif",
        "name": "Inclinação lateral com barra v. 2",
        "target": "abdômen"
    },
    {
        "id": "0098",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0098.gif",
        "name": "Agachamento lateral com barra",
        "target": "quadríceps"
    },
    {
        "id": "0097",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0097.gif",
        "name": "Agachamento lateral com barra v. 2",
        "target": "quadríceps"
    },
    {
        "id": "1756",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1756.gif",
        "name": "Levantamento unilateral com barra",
        "target": "glúteos"
    },
    {
        "id": "0099",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0099.gif",
        "name": "Afundo unilateral com barra",
        "target": "quadríceps"
    },
    {
        "id": "2799",
        "bodyPart": "core",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2799.gif",
        "name": "Elevação de perna alternada sentado com barra",
        "target": "abdômen"
    },
    {
        "id": "2800",
        "bodyPart": "core",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2800.gif",
        "name": "Elevação alternada de perna sentado com barra (feminino)",
        "target": "abdômen"
    },
    {
        "id": "0100",
        "bodyPart": "ombro",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0100.gif",
        "name": "Esquiador com barra",
        "target": "deltóides"
    },
    {
        "id": "0101",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0101.gif",
        "name": "Agachamento rápido com barra",
        "target": "glúteos"
    },
    {
        "id": "2810",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2810.gif",
        "name": "Afundo com barra v. 2",
        "target": "quadríceps"
    },
    {
        "id": "0102",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0102.gif",
        "name": "Agachamento com barra (de joelhos)",
        "target": "quadríceps"
    },
    {
        "id": "2798",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2798.gif",
        "name": "Salto de agachamento com barra e avanço para trás",
        "target": "quadríceps"
    },
    {
        "id": "0103",
        "bodyPart": "core",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0103.gif",
        "name": "Rolamento abdominal em pé com barra",
        "target": "abdômen"
    },
    {
        "id": "0104",
        "bodyPart": "antebraço",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0104.gif",
        "name": "Rosca de pulso em pé com barra",
        "target": "antebraços"
    },
    {
        "id": "0105",
        "bodyPart": "ombro",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0105.gif",
        "name": "Pressão militar Bradford em pé com barra",
        "target": "deltóides"
    },
    {
        "id": "1372",
        "bodyPart": "panturrilha",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1372.gif",
        "name": "Elevação de panturrilha em pé com barra",
        "target": "panturrilha"
    },
    {
        "id": "0106",
        "bodyPart": "biceps/triceps",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0106.gif",
        "name": "Rosca em pé com pegada fechada com barra",
        "target": "bíceps"
    },
    {
        "id": "1456",
        "bodyPart": "ombro",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1456.gif",
        "name": "Pressão militar com pegada fechada em pé com barra",
        "target": "deltóides"
    },
    {
        "id": "2414",
        "bodyPart": "biceps/triceps",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2414.gif",
        "name": "Rosca concentrada em pé com barra",
        "target": "bíceps"
    },
    {
        "id": "0107",
        "bodyPart": "ombro",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0107.gif",
        "name": "Elevação frontal sobre a cabeça em pé com barra",
        "target": "deltóides"
    },
    {
        "id": "0108",
        "bodyPart": "panturrilha",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0108.gif",
        "name": "Elevação de panturrilha em pé com barra",
        "target": "panturrilha"
    },
    {
        "id": "0109",
        "bodyPart": "biceps/triceps",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0109.gif",
        "name": "Extensão de tríceps acima da cabeça em pé com barra",
        "target": "tríceps"
    },
    {
        "id": "0110",
        "bodyPart": "biceps/triceps",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0110.gif",
        "name": "Rosca reversa em pé com barra",
        "target": "bíceps"
    },
    {
        "id": "0111",
        "bodyPart": "panturrilha",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0111.gif",
        "name": "Elevação de panturrilha alternada com balanço em pé com barra",
        "target": "panturrilha"
    },
    {
        "id": "0112",
        "bodyPart": "core",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0112.gif",
        "name": "Torção em pé com barra",
        "target": "abdômen"
    },
    {
        "id": "1629",
        "bodyPart": "biceps/triceps",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1629.gif",
        "name": "Rosca de bíceps ampla em pé com barra",
        "target": "bíceps"
    },
    {
        "id": "1457",
        "bodyPart": "ombro",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1457.gif",
        "name": "Pressão militar ampla em pé com barra",
        "target": "deltóides"
    },
    {
        "id": "0113",
        "bodyPart": "biceps/triceps",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0113.gif",
        "name": "Rosca ampla em pé com barra",
        "target": "bíceps"
    },
    {
        "id": "0114",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0114.gif",
        "name": "Step-up com barra",
        "target": "glúteos"
    },
    {
        "id": "0115",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0115.gif",
        "name": "Bom dia com pernas esticadas com barra",
        "target": "glúteos"
    },
    {
        "id": "0116",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0116.gif",
        "name": "Levantamento de peso morto com pernas esticadas com barra",
        "target": "isquiotibiais"
    },
    {
        "id": "0117",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0117.gif",
        "name": "Levantamento sumo com barra",
        "target": "glúteos"
    },
    {
        "id": "3305",
        "bodyPart": "ombro",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3305.gif",
        "name": "Pressão com barra",
        "target": "deltóides"
    },
    {
        "id": "0120",
        "bodyPart": "ombro",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0120.gif",
        "name": "Elevação lateral com barra",
        "target": "deltóides"
    },
    {
        "id": "0119",
        "bodyPart": "ombro",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0119.gif",
        "name": "Elevação lateral com barra v. 2",
        "target": "deltóides"
    },
    {
        "id": "0121",
        "bodyPart": "ombro",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0121.gif",
        "name": "Elevação lateral com barra v. 3",
        "target": "deltóides"
    },
    {
        "id": "0122",
        "bodyPart": "peito",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0122.gif",
        "name": "Supino largo com barra",
        "target": "peitoral"
    },
    {
        "id": "1258",
        "bodyPart": "peito",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1258.gif",
        "name": "Supino com pegada reversa larga com barra",
        "target": "peitoral"
    },
    {
        "id": "0124",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0124.gif",
        "name": "Agachamento largo com barra",
        "target": "quadríceps"
    },
    {
        "id": "0123",
        "bodyPart": "ombro",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0123.gif",
        "name": "Elevação lateral ampla com barra",
        "target": "deltóides"
    },
    {
        "id": "0126",
        "bodyPart": "antebraço",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0126.gif",
        "name": "Curl de pulso com barra",
        "target": "antebraços"
    },
    {
        "id": "0125",
        "bodyPart": "antebraço",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0125.gif",
        "name": "Curl de pulso com barra v. 2",
        "target": "antebraços"
    },
    {
        "id": "0127",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0127.gif",
        "name": "Agachamento zercher com barra",
        "target": "glúteos"
    },
    {
        "id": "3212",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3212.gif",
        "name": "Toque básico nos dedos dos pés (masculino)",
        "target": "glúteos"
    },
    {
        "id": "0128",
        "bodyPart": "ombro",
        "equipment": "corda naval",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0128.gif",
        "name": "Corda de batalha",
        "target": "deltóides"
    },
    {
        "id": "3360",
        "bodyPart": "cardio",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3360.gif",
        "name": "Rastejar de urso",
        "target": "cardio"
    },
    {
        "id": "1259",
        "bodyPart": "peito",
        "equipment": "com ajuda",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1259.gif",
        "name": "Alongamento do peitoral por trás da cabeça",
        "target": "peitoral"
    },
    {
        "id": "0129",
        "bodyPart": "biceps/triceps",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0129.gif",
        "name": "Mergulho no banco (joelhos dobrados)",
        "target": "tríceps"
    },
    {
        "id": "1399",
        "bodyPart": "biceps/triceps",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1399.gif",
        "name": "Mergulho no chão",
        "target": "tríceps"
    },
    {
        "id": "0130",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0130.gif",
        "name": "Extensão de quadril no banco",
        "target": "glúteos"
    },
    {
        "id": "3019",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3019.gif",
        "name": "Puxada no banco",
        "target": "dorsal"
    },
    {
        "id": "3639",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3639.gif",
        "name": "Torção deitado com joelhos dobrados (masculino)",
        "target": "glúteos"
    },
    {
        "id": "1770",
        "bodyPart": "biceps/triceps",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1770.gif",
        "name": "Rosca de bíceps concentrada na perna",
        "target": "bíceps"
    },
    {
        "id": "0139",
        "bodyPart": "biceps/triceps",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0139.gif",
        "name": "Puxada estreita no banco",
        "target": "bíceps"
    },
    {
        "id": "0140",
        "bodyPart": "biceps/triceps",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0140.gif",
        "name": "Puxada de bíceps",
        "target": "bíceps"
    },
    {
        "id": "0137",
        "bodyPart": "biceps/triceps",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0137.gif",
        "name": "Levantamento corporal",
        "target": "tríceps"
    },
    {
        "id": "3543",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3543.gif",
        "name": "Agachamento de salto com peso corporal",
        "target": "glúteos"
    },
    {
        "id": "3544",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3544.gif",
        "name": "Prancha lateral inclinada com peso corporal",
        "target": "abdômen"
    },
    {
        "id": "1771",
        "bodyPart": "biceps/triceps",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1771.gif",
        "name": "Extensão de tríceps ajoelhado com peso corporal",
        "target": "tríceps"
    },
    {
        "id": "1769",
        "bodyPart": "biceps/triceps",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1769.gif",
        "name": "Rosca de bíceps deitado com peso corporal",
        "target": "bíceps"
    },
    {
        "id": "3168",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3168.gif",
        "name": "Remada com peso corporal",
        "target": "latíssimo"
    },
    {
        "id": "3167",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3167.gif",
        "name": "Remada com peso corporal (com toalha)",
        "target": "latíssimo"
    },
    {
        "id": "1373",
        "bodyPart": "panturrilha",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1373.gif",
        "name": "Elevação de panturrilha em pé com peso corporal",
        "target": "panturrilha"
    },
    {
        "id": "3156",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3156.gif",
        "name": "Remada unilateral de pegada fechada em pé com peso corporal",
        "target": "latíssimo"
    },
    {
        "id": "3158",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3158.gif",
        "name": "Remada de pegada fechada em pé com peso corporal",
        "target": "latíssimo"
    },
    {
        "id": "3162",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3162.gif",
        "name": "Remada unilateral em pé com peso corporal",
        "target": "latíssimo"
    },
    {
        "id": "3161",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3161.gif",
        "name": "Remada unilateral em pé com peso corporal (com toalha)",
        "target": "latíssimo"
    },
    {
        "id": "3166",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3166.gif",
        "name": "Remada em pé com peso corporal",
        "target": "latíssimo"
    },
    {
        "id": "3165",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3165.gif",
        "name": "Remada em pé com peso corporal (com toalha)",
        "target": "latíssimo"
    },
    {
        "id": "0138",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0138.gif",
        "name": "Levantamento de perna",
        "target": "abdômen"
    },
    {
        "id": "1374",
        "bodyPart": "panturrilha",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1374.gif",
        "name": "Salto na caixa com estabilização de uma perna",
        "target": "panturrilha"
    },
    {
        "id": "2466",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2466.gif",
        "name": "Ponte",
        "target": "abdômen"
    },
    {
        "id": "1160",
        "bodyPart": "cardio",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1160.gif",
        "name": "Burpee",
        "target": "cardio"
    },
    {
        "id": "0870",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0870.gif",
        "name": "Elevação de quadril",
        "target": "abdômen"
    },
    {
        "id": "1494",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1494.gif",
        "name": "Pose de yoga borboleta",
        "target": "adutores"
    },
    {
        "id": "0148",
        "bodyPart": "ombro",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0148.gif",
        "name": "Pressão alternada de ombros com cabo",
        "target": "deltóides"
    },
    {
        "id": "0149",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0149.gif",
        "name": "Extensão alternada de tríceps com cabo",
        "target": "tríceps"
    },
    {
        "id": "3235",
        "bodyPart": "quadriceps/posterior",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3235.gif",
        "name": "Flexão inversa de perna com cabo assistido",
        "target": "isquiotibiais"
    },
    {
        "id": "0150",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0150.gif",
        "name": "Puxada lateral com cabo para barra",
        "target": "dorsal"
    },
    {
        "id": "0151",
        "bodyPart": "peito",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0151.gif",
        "name": "Supino com cabo",
        "target": "peitoral"
    },
    {
        "id": "1630",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1630.gif",
        "name": "Rosca fechada com cabo",
        "target": "bíceps"
    },
    {
        "id": "1631",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1631.gif",
        "name": "Rosca concentrada com cabo",
        "target": "bíceps"
    },
    {
        "id": "0152",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0152.gif",
        "name": "Extensão concentrada com cabo (no joelho)",
        "target": "tríceps"
    },
    {
        "id": "0153",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0153.gif",
        "name": "Puxada lateral cruzada com cabo",
        "target": "dorsal"
    },
    {
        "id": "0154",
        "bodyPart": "ombro",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0154.gif",
        "name": "Elevação lateral cruzada com cabo",
        "target": "deltóides"
    },
    {
        "id": "0155",
        "bodyPart": "peito",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0155.gif",
        "name": "Variação cruzada com cabo",
        "target": "peitoral"
    },
    {
        "id": "0868",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0868.gif",
        "name": "Rosca com cabo",
        "target": "bíceps"
    },
    {
        "id": "0157",
        "bodyPart": "quadriceps/posterior",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0157.gif",
        "name": "Levantamento de peso morto com cabo",
        "target": "glúteos"
    },
    {
        "id": "0158",
        "bodyPart": "peito",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0158.gif",
        "name": "Supino declinado com cabo",
        "target": "peitoral"
    },
    {
        "id": "1260",
        "bodyPart": "peito",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1260.gif",
        "name": "Supino declinado unilateral com cabo",
        "target": "peitoral"
    },
    {
        "id": "1261",
        "bodyPart": "peito",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1261.gif",
        "name": "Supino declinado com cabo",
        "target": "peitoral"
    },
    {
        "id": "0159",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0159.gif",
        "name": "Remada ampla sentado com cabo inclinado",
        "target": "latíssimo"
    },
    {
        "id": "1632",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1632.gif",
        "name": "Rosca de arrasto com cabo",
        "target": "bíceps"
    },
    {
        "id": "0160",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0160.gif",
        "name": "Remada ampla sentado com cabo no chão",
        "target": "latíssimo"
    },
    {
        "id": "0161",
        "bodyPart": "ombro",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0161.gif",
        "name": "Elevação frontal com cabo",
        "target": "deltóides"
    },
    {
        "id": "0162",
        "bodyPart": "ombro",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0162.gif",
        "name": "Elevação frontal com cabo",
        "target": "deltóides"
    },
    {
        "id": "0164",
        "bodyPart": "ombro",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0164.gif",
        "name": "Elevação frontal com cabo",
        "target": "deltóides"
    },
    {
        "id": "0165",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0165.gif",
        "name": "Rosca martelo com cabo (com corda)",
        "target": "bíceps"
    },
    {
        "id": "1722",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1722.gif",
        "name": "Extensão de tríceps com cabo alto sobre a cabeça",
        "target": "tríceps"
    },
    {
        "id": "0167",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0167.gif",
        "name": "Remada alta com cabo (ajoelhado)",
        "target": "latíssimo"
    },
    {
        "id": "0168",
        "bodyPart": "quadriceps/posterior",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0168.gif",
        "name": "Adução de quadril com cabo",
        "target": "adutores"
    },
    {
        "id": "0169",
        "bodyPart": "peito",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0169.gif",
        "name": "Supino inclinado com cabo",
        "target": "peitoral"
    },
    {
        "id": "1318",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1318.gif",
        "name": "Remada inclinada com cabo",
        "target": "latíssimo"
    },
    {
        "id": "0171",
        "bodyPart": "peito",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0171.gif",
        "name": "Supino inclinado com cabo",
        "target": "peitoral"
    },
    {
        "id": "0170",
        "bodyPart": "peito",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0170.gif",
        "name": "Supino inclinado com cabo (na bola de estabilidade)",
        "target": "peitoral"
    },
    {
        "id": "0172",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0172.gif",
        "name": "Extensão inclinada de tríceps com cabo",
        "target": "dorsal"
    },
    {
        "id": "0173",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0173.gif",
        "name": "Extensão de tríceps inclinado com cabo",
        "target": "tríceps"
    },
    {
        "id": "0174",
        "bodyPart": "core",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0174.gif",
        "name": "Virada de judô com cabo",
        "target": "abdômen"
    },
    {
        "id": "0860",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0860.gif",
        "name": "Chute com cabo",
        "target": "tríceps"
    },
    {
        "id": "0175",
        "bodyPart": "core",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0175.gif",
        "name": "Abdominal ajoelhado com cabo",
        "target": "abdômen"
    },
    {
        "id": "3697",
        "bodyPart": "ombro",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3697.gif",
        "name": "Remada traseira ajoelhada com cabo (com corda) (masculino)",
        "target": "deltóides"
    },
    {
        "id": "0176",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0176.gif",
        "name": "Extensão de tríceps ajoelhado com cabo",
        "target": "tríceps"
    },
    {
        "id": "2330",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2330.gif",
        "name": "Puxada de lat com cabo em toda a amplitude de movimento",
        "target": "dorsal"
    },
    {
        "id": "0177",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0177.gif",
        "name": "Puxada lateral com cabo (com acessório de corda)",
        "target": "dorsal"
    },
    {
        "id": "2616",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2616.gif",
        "name": "Puxada lateral com cabo e barra em V",
        "target": "dorsal"
    },
    {
        "id": "0178",
        "bodyPart": "ombro",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0178.gif",
        "name": "Elevação lateral com cabo",
        "target": "deltóides"
    },
    {
        "id": "0179",
        "bodyPart": "peito",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0179.gif",
        "name": "Fly baixo com cabo",
        "target": "peitoral"
    },
    {
        "id": "0180",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0180.gif",
        "name": "Remada sentado baixo com cabo",
        "target": "latíssimo"
    },
    {
        "id": "1634",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1634.gif",
        "name": "Rosca de bíceps deitado com cabo",
        "target": "bíceps"
    },
    {
        "id": "0182",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0182.gif",
        "name": "Rosca fechada deitado com cabo",
        "target": "bíceps"
    },
    {
        "id": "0184",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0184.gif",
        "name": "Extensão pullover deitado com cabo (com acessório de corda)",
        "target": "dorsal"
    },
    {
        "id": "0185",
        "bodyPart": "peito",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0185.gif",
        "name": "Fly deitado com cabo",
        "target": "peitoral"
    },
    {
        "id": "0186",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0186.gif",
        "name": "Extensão de tríceps deitado v. 2 com cabo",
        "target": "tríceps"
    },
    {
        "id": "0188",
        "bodyPart": "peito",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0188.gif",
        "name": "Fly médio com cabo",
        "target": "peitoral"
    },
    {
        "id": "0189",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0189.gif",
        "name": "Remada unilateral com cabo",
        "target": "latíssimo"
    },
    {
        "id": "0190",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0190.gif",
        "name": "Rosca unilateral com cabo",
        "target": "bíceps"
    },
    {
        "id": "1262",
        "bodyPart": "peito",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1262.gif",
        "name": "Fly unilateral declinado com cabo",
        "target": "peitoral"
    },
    {
        "id": "1263",
        "bodyPart": "peito",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1263.gif",
        "name": "Fly unilateral com cabo na bola de exercícios",
        "target": "peitoral"
    },
    {
        "id": "1264",
        "bodyPart": "peito",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1264.gif",
        "name": "Fly inclinado unilateral com cabo na bola de exercícios",
        "target": "peitoral"
    },
    {
        "id": "1265",
        "bodyPart": "peito",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1265.gif",
        "name": "Pressão inclinada unilateral com cabo",
        "target": "peitoral"
    },
    {
        "id": "1266",
        "bodyPart": "peito",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1266.gif",
        "name": "Pressão inclinada unilateral com cabo na bola de exercícios",
        "target": "peitoral"
    },
    {
        "id": "0191",
        "bodyPart": "peito",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0191.gif",
        "name": "Elevação lateral unilateral inclinada",
        "target": "peitoral"
    },
    {
        "id": "0192",
        "bodyPart": "ombro",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0192.gif",
        "name": "Elevação lateral unilateral com cabo",
        "target": "deltóides"
    },
    {
        "id": "1633",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1633.gif",
        "name": "Rosca unilateral concentrada com cabo",
        "target": "bíceps"
    },
    {
        "id": "1267",
        "bodyPart": "peito",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1267.gif",
        "name": "Pressão unilateral com cabo na bola de exercícios",
        "target": "peitoral"
    },
    {
        "id": "3563",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3563.gif",
        "name": "Puxada unilateral com cabo",
        "target": "dorsal"
    },
    {
        "id": "1635",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1635.gif",
        "name": "Rosca inversa unilateral com cabo",
        "target": "bíceps"
    },
    {
        "id": "0193",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0193.gif",
        "name": "Remada alta unilateral reta para trás com cabo (ajoelhado)",
        "target": "latíssimo"
    },
    {
        "id": "1723",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1723.gif",
        "name": "Pushdown de tríceps unilateral com cabo",
        "target": "tríceps"
    },
    {
        "id": "1636",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1636.gif",
        "name": "Rosca overhead com cabo",
        "target": "bíceps"
    },
    {
        "id": "1637",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1637.gif",
        "name": "Rosca overhead com cabo na bola de exercícios",
        "target": "bíceps"
    },
    {
        "id": "0194",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0194.gif",
        "name": "Extensão de tríceps overhead com cabo (acessório de corda)",
        "target": "tríceps"
    },
    {
        "id": "1319",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1319.gif",
        "name": "Remada rotacional de palma com cabo",
        "target": "latíssimo"
    },
    {
        "id": "0195",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0195.gif",
        "name": "Rosca concentrada com cabo",
        "target": "bíceps"
    },
    {
        "id": "1268",
        "bodyPart": "peito",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1268.gif",
        "name": "Pressão com cabo na bola de exercícios",
        "target": "peitoral"
    },
    {
        "id": "0196",
        "bodyPart": "quadriceps/posterior",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0196.gif",
        "name": "Puxada com cabo (com acessório de corda)",
        "target": "glúteos"
    },
    {
        "id": "0198",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0198.gif",
        "name": "Puxada com cabo",
        "target": "dorsal"
    },
    {
        "id": "0197",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0197.gif",
        "name": "Puxada com cabo (com barra reta)",
        "target": "dorsal"
    },
    {
        "id": "1638",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1638.gif",
        "name": "Puxada de bíceps com cabo",
        "target": "bíceps"
    },
    {
        "id": "0201",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0201.gif",
        "name": "Pushdown com cabo",
        "target": "tríceps"
    },
    {
        "id": "0199",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0199.gif",
        "name": "Pushdown com cabo (braço reto) v. 2",
        "target": "dorsal"
    },
    {
        "id": "0200",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0200.gif",
        "name": "Pushdown com cabo (com acessório de corda)",
        "target": "tríceps"
    },
    {
        "id": "0202",
        "bodyPart": "ombro",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0202.gif",
        "name": "Remada de deltoides traseiro com cabo (puxadores)",
        "target": "deltóides"
    },
    {
        "id": "0203",
        "bodyPart": "ombro",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0203.gif",
        "name": "Remada de deltoides traseiro com cabo (com corda)",
        "target": "deltóides"
    },
    {
        "id": "0204",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0204.gif",
        "name": "Condução traseira com cabo",
        "target": "tríceps"
    },
    {
        "id": "0205",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0205.gif",
        "name": "Puxada traseira com cabo",
        "target": "dorsal"
    },
    {
        "id": "0873",
        "bodyPart": "core",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0873.gif",
        "name": "Crunch reverso com cabo",
        "target": "abdômen"
    },
    {
        "id": "0206",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0206.gif",
        "name": "Rosca reversa com cabo",
        "target": "bíceps"
    },
    {
        "id": "2406",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2406.gif",
        "name": "Pushdown com pegada reversa e cabo (barra SZ) (com elástico de braço)",
        "target": "tríceps"
    },
    {
        "id": "1413",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1413.gif",
        "name": "Rosca unilateral reversa com cabo",
        "target": "bíceps"
    },
    {
        "id": "0209",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0209.gif",
        "name": "Rosca inversa com cabo",
        "target": "bíceps"
    },
    {
        "id": "0210",
        "bodyPart": "antebraço",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0210.gif",
        "name": "Curl de pulso reverso com cabo",
        "target": "antebraços"
    },
    {
        "id": "0207",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0207.gif",
        "name": "Pushdown com cabo e pegada reversa",
        "target": "tríceps"
    },
    {
        "id": "0208",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0208.gif",
        "name": "Remada alta sentado com cabo e pegada reversa",
        "target": "latíssimo"
    },
    {
        "id": "1320",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1320.gif",
        "name": "Remada sentado com cabo cruzado",
        "target": "latíssimo"
    },
    {
        "id": "1321",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1321.gif",
        "name": "Remada sentado com cabo elevado",
        "target": "latíssimo"
    },
    {
        "id": "1322",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1322.gif",
        "name": "Extensão de tríceps inclinado com cabo na bancada",
        "target": "latíssimo"
    },
    {
        "id": "1639",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1639.gif",
        "name": "Rosca martelo com cabo",
        "target": "bíceps"
    },
    {
        "id": "1724",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1724.gif",
        "name": "Extensão de tríceps overhead com cabo alto",
        "target": "tríceps"
    },
    {
        "id": "1725",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1725.gif",
        "name": "Extensão de tríceps inclinado com cabo",
        "target": "tríceps"
    },
    {
        "id": "1726",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1726.gif",
        "name": "Extensão de tríceps deitado com cabo no chão",
        "target": "tríceps"
    },
    {
        "id": "1640",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1640.gif",
        "name": "Rosca martelo unilateral com cabo",
        "target": "bíceps"
    },
    {
        "id": "1323",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1323.gif",
        "name": "Remada sentado com cabo",
        "target": "latíssimo"
    },
    {
        "id": "0211",
        "bodyPart": "core",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0211.gif",
        "name": "Torção russa com cabo (na bola de estabilidade)",
        "target": "abdômen"
    },
    {
        "id": "2144",
        "bodyPart": "peito",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2144.gif",
        "name": "Pressão peitoral sentado com cabo",
        "target": "peitoral"
    },
    {
        "id": "0212",
        "bodyPart": "core",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0212.gif",
        "name": "Abdominal sentado com cabo",
        "target": "abdômen"
    },
    {
        "id": "1641",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1641.gif",
        "name": "Rosca sentado com cabo",
        "target": "bíceps"
    },
    {
        "id": "0213",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0213.gif",
        "name": "Remada alta sentado com cabo (em V)",
        "target": "dorsal"
    },
    {
        "id": "0214",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0214.gif",
        "name": "Remada alternada unilateral sentado com cabo",
        "target": "latíssimo"
    },
    {
        "id": "1642",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1642.gif",
        "name": "Rosca concentrada unilateral sentado com cabo",
        "target": "bíceps"
    },
    {
        "id": "1643",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1643.gif",
        "name": "Rosca overhead sentado com cabo",
        "target": "bíceps"
    },
    {
        "id": "0215",
        "bodyPart": "ombro",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0215.gif",
        "name": "Elevação lateral traseira sentado com cabo",
        "target": "deltóides"
    },
    {
        "id": "0861",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0861.gif",
        "name": "Remada sentado com cabo",
        "target": "latíssimo"
    },
    {
        "id": "0216",
        "bodyPart": "ombro",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0216.gif",
        "name": "Rotação interna do ombro sentado com cabo",
        "target": "deltóides"
    },
    {
        "id": "2399",
        "bodyPart": "core",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2399.gif",
        "name": "Torção sentado com cabo",
        "target": "abdômen"
    },
    {
        "id": "0218",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0218.gif",
        "name": "Remada larga sentado com cabo",
        "target": "latíssimo"
    },
    {
        "id": "0219",
        "bodyPart": "ombro",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0219.gif",
        "name": "Pressão de ombro com cabo",
        "target": "deltóides"
    },
    {
        "id": "0220",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0220.gif",
        "name": "Encolhimento de ombros com cabo",
        "target": "trapézio"
    },
    {
        "id": "0222",
        "bodyPart": "core",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0222.gif",
        "name": "Flexão lateral com cabo",
        "target": "abdômen"
    },
    {
        "id": "0221",
        "bodyPart": "core",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0221.gif",
        "name": "Crunch com flexão lateral com cabo (bola bosu)",
        "target": "abdômen"
    },
    {
        "id": "0223",
        "bodyPart": "core",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0223.gif",
        "name": "Crunch lateral com cabo",
        "target": "abdômen"
    },
    {
        "id": "1717",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1717.gif",
        "name": "Remada com agachamento com cabo (com acessório de corda)",
        "target": "dorsal"
    },
    {
        "id": "1644",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1644.gif",
        "name": "Rosca agachado com cabo",
        "target": "bíceps"
    },
    {
        "id": "0224",
        "bodyPart": "antebraço",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0224.gif",
        "name": "Rosca de pulso em pé com cabo",
        "target": "antebraços"
    },
    {
        "id": "1375",
        "bodyPart": "panturrilha",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1375.gif",
        "name": "Elevação de panturrilha em pé com cabo",
        "target": "panturrilha"
    },
    {
        "id": "0225",
        "bodyPart": "ombro",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0225.gif",
        "name": "Elevação lateral traseira alta em pé com cabo",
        "target": "deltóides"
    },
    {
        "id": "0226",
        "bodyPart": "core",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0226.gif",
        "name": "Crunch em pé com cabo",
        "target": "abdômen"
    },
    {
        "id": "0874",
        "bodyPart": "core",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0874.gif",
        "name": "Crunch em pé com cabo (com acessório de corda)",
        "target": "abdômen"
    },
    {
        "id": "0227",
        "bodyPart": "peito",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0227.gif",
        "name": "Fly em pé com cabo",
        "target": "peitoral"
    },
    {
        "id": "0228",
        "bodyPart": "quadriceps/posterior",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0228.gif",
        "name": "Extensão do quadril em pé com cabo",
        "target": "glúteos"
    },
    {
        "id": "0229",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0229.gif",
        "name": "Rosca interna em pé com cabo",
        "target": "bíceps"
    },
    {
        "id": "0230",
        "bodyPart": "core",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0230.gif",
        "name": "Elevação em pé com cabo",
        "target": "abdômen"
    },
    {
        "id": "0231",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0231.gif",
        "name": "Extensão de tríceps unilateral em pé com cabo",
        "target": "tríceps"
    },
    {
        "id": "1376",
        "bodyPart": "panturrilha",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1376.gif",
        "name": "Elevação de panturrilha unilateral em pé com cabo",
        "target": "panturrilha"
    },
    {
        "id": "0232",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0232.gif",
        "name": "Puxada em pé com cabo (com acessório de corda)",
        "target": "bíceps"
    },
    {
        "id": "0233",
        "bodyPart": "ombro",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0233.gif",
        "name": "Remada traseira em pé com cabo (com corda)",
        "target": "deltóides"
    },
    {
        "id": "1727",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1727.gif",
        "name": "Extensão de tríceps overhead unilateral com cabo e pegada reversa",
        "target": "tríceps"
    },
    {
        "id": "0234",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0234.gif",
        "name": "Remada em pé com cabo (em V)",
        "target": "latíssimo"
    },
    {
        "id": "0235",
        "bodyPart": "ombro",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0235.gif",
        "name": "Rotação externa do ombro em pé com cabo",
        "target": "deltóides"
    },
    {
        "id": "0236",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0236.gif",
        "name": "Remada em pé com torção (em V)",
        "target": "latíssimo"
    },
    {
        "id": "1269",
        "bodyPart": "peito",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1269.gif",
        "name": "Cruzamento reto em pé com cabo",
        "target": "peitoral"
    },
    {
        "id": "0238",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0238.gif",
        "name": "Pulldown com braço reto com cabo",
        "target": "dorsal"
    },
    {
        "id": "0237",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0237.gif",
        "name": "Pulldown com braço reto com cabo (com acessório de corda)",
        "target": "dorsal"
    },
    {
        "id": "0239",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0239.gif",
        "name": "Remada sentado com cabo",
        "target": "latíssimo"
    },
    {
        "id": "0240",
        "bodyPart": "ombro",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0240.gif",
        "name": "Fly traseiro supino com cabo",
        "target": "deltóides"
    },
    {
        "id": "2464",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2464.gif",
        "name": "Remada de caiaque com cabo Thibaudeau",
        "target": "dorsal"
    },
    {
        "id": "0241",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0241.gif",
        "name": "Pushdown de tríceps com V-barra com cabo",
        "target": "tríceps"
    },
    {
        "id": "2405",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2405.gif",
        "name": "Pushdown de tríceps com V-barra com cabo (com elástico de braço)",
        "target": "tríceps"
    },
    {
        "id": "0242",
        "bodyPart": "core",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0242.gif",
        "name": "Crunch reverso com cabo",
        "target": "abdômen"
    },
    {
        "id": "0243",
        "bodyPart": "core",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0243.gif",
        "name": "Torção com cabo",
        "target": "abdômen"
    },
    {
        "id": "0862",
        "bodyPart": "core",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0862.gif",
        "name": "Torção com cabo (de cima para baixo)",
        "target": "abdômen"
    },
    {
        "id": "0244",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0244.gif",
        "name": "Puxada com torção com cabo",
        "target": "dorsal"
    },
    {
        "id": "1645",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1645.gif",
        "name": "Rosca bilateral deitada no banco inclinado com cabo",
        "target": "bíceps"
    },
    {
        "id": "1728",
        "bodyPart": "biceps/triceps",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1728.gif",
        "name": "Kickback de tríceps bilateral com cabo",
        "target": "tríceps"
    },
    {
        "id": "0245",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0245.gif",
        "name": "Pulldown com pegada supinada com cabo",
        "target": "dorsal"
    },
    {
        "id": "1270",
        "bodyPart": "peito",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1270.gif",
        "name": "Cruzamento superior do peito com cabo",
        "target": "peitoral"
    },
    {
        "id": "1324",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1324.gif",
        "name": "Remada alta com cabo",
        "target": "latíssimo"
    },
    {
        "id": "0246",
        "bodyPart": "ombro",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0246.gif",
        "name": "Remada alta com cabo em pé",
        "target": "deltóides"
    },
    {
        "id": "1325",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1325.gif",
        "name": "Puxada traseira ampla com cabo atrás do pescoço",
        "target": "dorsal"
    },
    {
        "id": "0247",
        "bodyPart": "antebraço",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0247.gif",
        "name": "Rosca de pulso com cabo",
        "target": "antebraços"
    },
    {
        "id": "1407",
        "bodyPart": "panturrilha",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1407.gif",
        "name": "Alongamento do empurrão de panturrilha com mãos na parede",
        "target": "panturrilha"
    },
    {
        "id": "1377",
        "bodyPart": "panturrilha",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1377.gif",
        "name": "Alongamento de panturrilha com mãos na parede",
        "target": "panturrilha"
    },
    {
        "id": "1378",
        "bodyPart": "panturrilha",
        "equipment": "corda naval",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1378.gif",
        "name": "Alongamento de panturrilha com cabo",
        "target": "panturrilha"
    },
    {
        "id": "0248",
        "bodyPart": "costas",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0248.gif",
        "name": "Remada deitado com barra curvada",
        "target": "latíssimo"
    },
    {
        "id": "2963",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2963.gif",
        "name": "Elevação de perna reta na cadeira do capitão",
        "target": "abdômen"
    },
    {
        "id": "1548",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1548.gif",
        "name": "Alongamento com perna estendida na cadeira",
        "target": "quadríceps"
    },
    {
        "id": "1271",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1271.gif",
        "name": "Alongamento do peito e frente do ombro",
        "target": "peitoral"
    },
    {
        "id": "0251",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0251.gif",
        "name": "Flexão de tronco",
        "target": "peitoral"
    },
    {
        "id": "1430",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1430.gif",
        "name": "Flexão de tronco (no suporte de flexão e barra)",
        "target": "peitoral"
    },
    {
        "id": "2462",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2462.gif",
        "name": "Flexão de tronco na barra reta",
        "target": "peitoral"
    },
    {
        "id": "1272",
        "bodyPart": "peito",
        "equipment": "bola de estabiliade",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1272.gif",
        "name": "Alongamento do peito com bola de exercícios",
        "target": "peitoral"
    },
    {
        "id": "3216",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3216.gif",
        "name": "Flexão com toque no peito (masculino)",
        "target": "peitoral"
    },
    {
        "id": "1326",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1326.gif",
        "name": "Chin-up",
        "target": "dorsal"
    },
    {
        "id": "0253",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0253.gif",
        "name": "Chin-ups (pegada paralela estreita)",
        "target": "latíssimo"
    },
    {
        "id": "0257",
        "bodyPart": "panturrilha",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0257.gif",
        "name": "Alongamento do joelho em círculos",
        "target": "panturrilha"
    },
    {
        "id": "1273",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1273.gif",
        "name": "Flexão com palmas das mãos",
        "target": "peitoral"
    },
    {
        "id": "0258",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0258.gif",
        "name": "Flexão em círculos",
        "target": "peitoral"
    },
    {
        "id": "1327",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1327.gif",
        "name": "Chin-up com pegada fechada",
        "target": "dorsal"
    },
    {
        "id": "0259",
        "bodyPart": "biceps/triceps",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0259.gif",
        "name": "Flexão com pegada fechada",
        "target": "tríceps"
    },
    {
        "id": "2398",
        "bodyPart": "biceps/triceps",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2398.gif",
        "name": "Flexão com pegada fechada (de joelhos)",
        "target": "tríceps"
    },
    {
        "id": "0260",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0260.gif",
        "name": "Casulos",
        "target": "abdômen"
    },
    {
        "id": "1468",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1468.gif",
        "name": "Torção com toque no dedo do pé",
        "target": "abdômen"
    },
    {
        "id": "0262",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0262.gif",
        "name": "Crunch cruzado",
        "target": "abdômen"
    },
    {
        "id": "0267",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0267.gif",
        "name": "Abdominal (mãos acima da cabeça)",
        "target": "abdômen"
    },
    {
        "id": "0271",
        "bodyPart": "core",
        "equipment": "bola de estabiliade",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0271.gif",
        "name": "Abdominal (na bola de estabilidade)",
        "target": "abdômen"
    },
    {
        "id": "0272",
        "bodyPart": "core",
        "equipment": "bola de estabiliade",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0272.gif",
        "name": "Abdominal (na bola de estabilidade, braços esticados)",
        "target": "abdômen"
    },
    {
        "id": "0274",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0274.gif",
        "name": "Abdominal no chão",
        "target": "abdômen"
    },
    {
        "id": "3016",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3016.gif",
        "name": "Curl-up",
        "target": "abdômen"
    },
    {
        "id": "3769",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3769.gif",
        "name": "Agachamento de cortesia",
        "target": "glúteos"
    },
    {
        "id": "2331",
        "bodyPart": "cardio",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2331.gif",
        "name": "Elíptico",
        "target": "cardio"
    },
    {
        "id": "0276",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0276.gif",
        "name": "Bug morto",
        "target": "abdômen"
    },
    {
        "id": "0277",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0277.gif",
        "name": "Crunch declinado",
        "target": "abdômen"
    },
    {
        "id": "0279",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0279.gif",
        "name": "Flexão declinada",
        "target": "peitoral"
    },
    {
        "id": "0282",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0282.gif",
        "name": "Abdominal declinado",
        "target": "abdômen"
    },
    {
        "id": "1274",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1274.gif",
        "name": "Flexão profunda",
        "target": "peitoral"
    },
    {
        "id": "0283",
        "bodyPart": "biceps/triceps",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0283.gif",
        "name": "Flexão de diamante",
        "target": "tríceps"
    },
    {
        "id": "0284",
        "bodyPart": "panturrilha",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0284.gif",
        "name": "Elevação de panturrilha como um burro",
        "target": "panturrilha"
    },
    {
        "id": "1275",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1275.gif",
        "name": "Flexão com queda",
        "target": "peitoral"
    },
    {
        "id": "0285",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0285.gif",
        "name": "Rosca de bíceps alternada com halteres",
        "target": "bíceps"
    },
    {
        "id": "2403",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2403.gif",
        "name": "Rosca de bíceps alternada com halteres (com elástico de braço)",
        "target": "bíceps"
    },
    {
        "id": "1646",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1646.gif",
        "name": "Rosca martelo alternada com halteres",
        "target": "bíceps"
    },
    {
        "id": "1647",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1647.gif",
        "name": "Rosca alternada com halteres",
        "target": "bíceps"
    },
    {
        "id": "1648",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1648.gif",
        "name": "Rosca martelo alternada sentado com halteres",
        "target": "bíceps"
    },
    {
        "id": "0286",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0286.gif",
        "name": "Pressão lateral alternada com halteres",
        "target": "deltóides"
    },
    {
        "id": "1649",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1649.gif",
        "name": "Rosca de bíceps alternada com perna elevada na bola de exercícios",
        "target": "bíceps"
    },
    {
        "id": "1650",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1650.gif",
        "name": "Rosca de bíceps alternada sentado com perna elevada na bola de exercícios",
        "target": "bíceps"
    },
    {
        "id": "2137",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2137.gif",
        "name": "Pressão Arnold com halteres",
        "target": "deltóides"
    },
    {
        "id": "0287",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0287.gif",
        "name": "Pressão Arnold com halteres v. 2",
        "target": "deltóides"
    },
    {
        "id": "0288",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0288.gif",
        "name": "Pullover com halteres em volta",
        "target": "peitoral"
    },
    {
        "id": "0289",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0289.gif",
        "name": "Supino com halteres",
        "target": "peitoral"
    },
    {
        "id": "0290",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0290.gif",
        "name": "Pressão sentado no banco com halteres",
        "target": "deltóides"
    },
    {
        "id": "0291",
        "bodyPart": "quadriceps/posterior",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0291.gif",
        "name": "Agachamento no banco com halteres",
        "target": "glúteos"
    },
    {
        "id": "0293",
        "bodyPart": "costas",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0293.gif",
        "name": "Remada curvada com halteres",
        "target": "latíssimo"
    },
    {
        "id": "1651",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1651.gif",
        "name": "Rosca de bíceps alternada com halteres em avanço com movimento de boliche",
        "target": "bíceps"
    },
    {
        "id": "1652",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1652.gif",
        "name": "Rosca de bíceps alternada com halteres com perna elevada",
        "target": "bíceps"
    },
    {
        "id": "1653",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1653.gif",
        "name": "Rosca de bíceps alternada com halteres com postura de cegonha",
        "target": "bíceps"
    },
    {
        "id": "0294",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0294.gif",
        "name": "Rosca de bíceps com halteres",
        "target": "bíceps"
    },
    {
        "id": "2401",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2401.gif",
        "name": "Rosca de bíceps com halteres (com elástico de braço)",
        "target": "bíceps"
    },
    {
        "id": "1654",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1654.gif",
        "name": "Rosca de bíceps alternada invertida com halteres",
        "target": "bíceps"
    },
    {
        "id": "1655",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1655.gif",
        "name": "Rosca de bíceps alternada com agachamento com halteres",
        "target": "bíceps"
    },
    {
        "id": "1656",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1656.gif",
        "name": "Rosca de bíceps alternada com V sit na bola bosu",
        "target": "bíceps"
    },
    {
        "id": "1201",
        "bodyPart": "cardio",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1201.gif",
        "name": "Burpee com halteres",
        "target": "cardio"
    },
    {
        "id": "0295",
        "bodyPart": "quadriceps/posterior",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0295.gif",
        "name": "Clean com halteres",
        "target": "glúteos"
    },
    {
        "id": "1731",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1731.gif",
        "name": "Pressão fechada com halteres",
        "target": "tríceps"
    },
    {
        "id": "0296",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0296.gif",
        "name": "Pressão fechada com halteres",
        "target": "tríceps"
    },
    {
        "id": "0297",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0297.gif",
        "name": "Rosca concentrada com halteres",
        "target": "bíceps"
    },
    {
        "id": "3635",
        "bodyPart": "quadriceps/posterior",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3635.gif",
        "name": "Avanço contralateral com halteres",
        "target": "glúteos"
    },
    {
        "id": "0298",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0298.gif",
        "name": "Rosca martelo cruzada com halteres",
        "target": "bíceps"
    },
    {
        "id": "1657",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1657.gif",
        "name": "Rosca martelo cruzada com halteres v. 2",
        "target": "bíceps"
    },
    {
        "id": "0299",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0299.gif",
        "name": "Press cubano com halteres",
        "target": "deltóides"
    },
    {
        "id": "2136",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2136.gif",
        "name": "Press cubano com halteres v. 2",
        "target": "deltóides"
    },
    {
        "id": "0300",
        "bodyPart": "quadriceps/posterior",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0300.gif",
        "name": "Levantamento terra com halteres",
        "target": "glúteos"
    },
    {
        "id": "0301",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0301.gif",
        "name": "Pressão declinada com halteres",
        "target": "peitoral"
    },
    {
        "id": "0302",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0302.gif",
        "name": "Fly declinado com halteres",
        "target": "peitoral"
    },
    {
        "id": "0303",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0303.gif",
        "name": "Pressão martelo declinada com halteres",
        "target": "peitoral"
    },
    {
        "id": "1276",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1276.gif",
        "name": "Fly unilateral declinado com halteres",
        "target": "peitoral"
    },
    {
        "id": "1617",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1617.gif",
        "name": "Pressão de martelo de braço único em declínio com halteres",
        "target": "tríceps"
    },
    {
        "id": "0305",
        "bodyPart": "costas",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0305.gif",
        "name": "Encolhimento de ombros em declínio com halteres",
        "target": "trapézio"
    },
    {
        "id": "0304",
        "bodyPart": "costas",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0304.gif",
        "name": "Encolhimento de ombros em declínio com halteres v. 2",
        "target": "trapézio"
    },
    {
        "id": "0306",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0306.gif",
        "name": "Extensão de tríceps em declínio com halteres",
        "target": "tríceps"
    },
    {
        "id": "0307",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0307.gif",
        "name": "Voo com torção em declínio com halteres",
        "target": "peitoral"
    },
    {
        "id": "1437",
        "bodyPart": "antebraço",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1437.gif",
        "name": "Rosca de dedos com halteres",
        "target": "antebraços"
    },
    {
        "id": "0308",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0308.gif",
        "name": "Voo com halteres",
        "target": "peitoral"
    },
    {
        "id": "1277",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1277.gif",
        "name": "Voo com halteres na bola de exercícios",
        "target": "peitoral"
    },
    {
        "id": "1732",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1732.gif",
        "name": "Extensão de tríceps com avanço frontal em declínio com halteres",
        "target": "tríceps"
    },
    {
        "id": "0310",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0310.gif",
        "name": "Elevação frontal com halteres",
        "target": "deltóides"
    },
    {
        "id": "0309",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0309.gif",
        "name": "Elevação frontal com halteres v. 2",
        "target": "deltóides"
    },
    {
        "id": "0311",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0311.gif",
        "name": "Elevação lateral completa com halteres",
        "target": "deltóides"
    },
    {
        "id": "1760",
        "bodyPart": "quadriceps/posterior",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1760.gif",
        "name": "Agachamento com halteres",
        "target": "quadríceps"
    },
    {
        "id": "0313",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0313.gif",
        "name": "Rosca martelo com halteres",
        "target": "bíceps"
    },
    {
        "id": "1659",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1659.gif",
        "name": "Rosca martelo com halteres na bola de exercícios",
        "target": "bíceps"
    },
    {
        "id": "0312",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0312.gif",
        "name": "Rosca martelo com halteres v. 2",
        "target": "bíceps"
    },
    {
        "id": "2402",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2402.gif",
        "name": "Rosca martelo com halteres (com suporte para braço)",
        "target": "bíceps"
    },
    {
        "id": "1664",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1664.gif",
        "name": "Rosca alta com halteres",
        "target": "bíceps"
    },
    {
        "id": "3545",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3545.gif",
        "name": "Pressão alternada em inclinação com halteres",
        "target": "peitoral"
    },
    {
        "id": "0314",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0314.gif",
        "name": "Supino inclinado com halteres",
        "target": "peitoral"
    },
    {
        "id": "0315",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0315.gif",
        "name": "Rosca bíceps inclinada com halteres",
        "target": "bíceps"
    },
    {
        "id": "0316",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0316.gif",
        "name": "Inclinação com halteres",
        "target": "peitoral"
    },
    {
        "id": "0318",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0318.gif",
        "name": "Rosca inclinada com halteres",
        "target": "bíceps"
    },
    {
        "id": "0317",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0317.gif",
        "name": "Rosca inclinada com halteres v. 2",
        "target": "bíceps"
    },
    {
        "id": "0319",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0319.gif",
        "name": "Voo inclinado com halteres",
        "target": "peitoral"
    },
    {
        "id": "1278",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1278.gif",
        "name": "Voo inclinado com halteres na bola de exercícios",
        "target": "peitoral"
    },
    {
        "id": "0320",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0320.gif",
        "name": "Rosca martelo inclinada com halteres",
        "target": "bíceps"
    },
    {
        "id": "0321",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0321.gif",
        "name": "Pressão martelo inclinada com halteres",
        "target": "peitoral"
    },
    {
        "id": "1618",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1618.gif",
        "name": "Pressão martelo inclinada com halteres na bola de exercícios",
        "target": "tríceps"
    },
    {
        "id": "0322",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0322.gif",
        "name": "Rosca interna inclinada com halteres",
        "target": "bíceps"
    },
    {
        "id": "1279",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1279.gif",
        "name": "Voo unilateral inclinado com halteres",
        "target": "peitoral"
    },
    {
        "id": "1280",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1280.gif",
        "name": "Voo unilateral inclinado com halteres na bola de exercícios",
        "target": "peitoral"
    },
    {
        "id": "1619",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1619.gif",
        "name": "Pressão de martelo de braço único inclinada com halteres",
        "target": "tríceps"
    },
    {
        "id": "1620",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1620.gif",
        "name": "Pressão de martelo de braço único inclinada com halteres na bola de exercícios",
        "target": "tríceps"
    },
    {
        "id": "0323",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0323.gif",
        "name": "Elevação lateral de braço único inclinada com halteres",
        "target": "deltóides"
    },
    {
        "id": "1281",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1281.gif",
        "name": "Pressão de braço único inclinada com halteres",
        "target": "peitoral"
    },
    {
        "id": "1282",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1282.gif",
        "name": "Pressão de braço único inclinada com halteres na bola de exercícios",
        "target": "peitoral"
    },
    {
        "id": "0324",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0324.gif",
        "name": "Pressão interna de braço único inclinada com halteres",
        "target": "peitoral"
    },
    {
        "id": "1283",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1283.gif",
        "name": "Pressão inclinada com halteres na bola de exercícios",
        "target": "peitoral"
    },
    {
        "id": "0325",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0325.gif",
        "name": "Elevação em inclinação com halteres",
        "target": "deltóides"
    },
    {
        "id": "0326",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0326.gif",
        "name": "Elevação lateral traseira em inclinação com halteres",
        "target": "deltóides"
    },
    {
        "id": "0327",
        "bodyPart": "costas",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0327.gif",
        "name": "Remada em inclinação com halteres",
        "target": "latíssimo"
    },
    {
        "id": "0328",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0328.gif",
        "name": "Elevação de ombro em inclinação com halteres",
        "target": "serrátil"
    },
    {
        "id": "0329",
        "bodyPart": "costas",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0329.gif",
        "name": "Encolhimento de ombros em inclinação com halteres",
        "target": "trapézio"
    },
    {
        "id": "3542",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3542.gif",
        "name": "Elevação em T em inclinação com halteres",
        "target": "deltóides"
    },
    {
        "id": "0330",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0330.gif",
        "name": "Extensão de tríceps em inclinação com halteres",
        "target": "tríceps"
    },
    {
        "id": "0331",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0331.gif",
        "name": "Voos torcidos em inclinação com halteres",
        "target": "peitoral"
    },
    {
        "id": "1733",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1733.gif",
        "name": "Extensão de dois braços em inclinação com halteres",
        "target": "tríceps"
    },
    {
        "id": "3541",
        "bodyPart": "costas",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3541.gif",
        "name": "Elevação em Y em inclinação com halteres",
        "target": "latíssimo"
    },
    {
        "id": "0332",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0332.gif",
        "name": "Cruz de ferro com halteres",
        "target": "deltóides"
    },
    {
        "id": "0333",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0333.gif",
        "name": "Tríceps kickback com halteres",
        "target": "tríceps"
    },
    {
        "id": "1734",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1734.gif",
        "name": "Tríceps kickbacks na bola de exercícios com halteres",
        "target": "tríceps"
    },
    {
        "id": "1660",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1660.gif",
        "name": "Rosca de bíceps em posição ajoelhada com halteres na bola de exercícios",
        "target": "bíceps"
    },
    {
        "id": "0334",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0334.gif",
        "name": "Elevação lateral com halteres",
        "target": "deltóides"
    },
    {
        "id": "0335",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0335.gif",
        "name": "Elevação lateral para frente com halteres",
        "target": "deltóides"
    },
    {
        "id": "0336",
        "bodyPart": "quadriceps/posterior",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0336.gif",
        "name": "Agachamento com halteres",
        "target": "glúteos"
    },
    {
        "id": "1658",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1658.gif",
        "name": "Agachamento com halteres e rosca de bíceps",
        "target": "bíceps"
    },
    {
        "id": "0337",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0337.gif",
        "name": "Extensão deitada com halteres (sobre o rosto)",
        "target": "tríceps"
    },
    {
        "id": "1729",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1729.gif",
        "name": "Extensão alternada deitada com halteres",
        "target": "tríceps"
    },
    {
        "id": "0338",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0338.gif",
        "name": "Pressão de cotovelo deitado com halteres",
        "target": "tríceps"
    },
    {
        "id": "0863",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0863.gif",
        "name": "Rotação externa de ombro deitado com halteres",
        "target": "deltóides"
    },
    {
        "id": "0339",
        "bodyPart": "quadriceps/posterior",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0339.gif",
        "name": "Flexão femoral deitada com halteres",
        "target": "isquiotibiais"
    },
    {
        "id": "0340",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0340.gif",
        "name": "Pressão martelo deitado com halteres",
        "target": "peitoral"
    },
    {
        "id": "2470",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2470.gif",
        "name": "Elevação traseira deitada no chão com halteres",
        "target": "deltóides"
    },
    {
        "id": "0341",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0341.gif",
        "name": "Deltoides posterior deitado com um braço com halteres",
        "target": "deltóides"
    },
    {
        "id": "0343",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0343.gif",
        "name": "Pressão de braço único deitado com halteres",
        "target": "peitoral"
    },
    {
        "id": "0342",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0342.gif",
        "name": "Pressão de braço único deitado com halteres v. 2",
        "target": "peitoral"
    },
    {
        "id": "0344",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0344.gif",
        "name": "Extensão de tríceps pronada de braço único deitado com halteres",
        "target": "tríceps"
    },
    {
        "id": "0345",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0345.gif",
        "name": "Elevação lateral traseira de braço único deitado com halteres",
        "target": "deltóides"
    },
    {
        "id": "0346",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0346.gif",
        "name": "Extensão de tríceps supinada de braço único deitado com halteres",
        "target": "tríceps"
    },
    {
        "id": "0347",
        "bodyPart": "antebraço",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0347.gif",
        "name": "Pronação deitada com halteres",
        "target": "antebraços"
    },
    {
        "id": "2705",
        "bodyPart": "antebraço",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2705.gif",
        "name": "Pronação deitada com halteres no chão",
        "target": "antebraços"
    },
    {
        "id": "1284",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1284.gif",
        "name": "Pullover deitado com halteres na bola de exercícios",
        "target": "peitoral"
    },
    {
        "id": "1328",
        "bodyPart": "costas",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1328.gif",
        "name": "Remada deitada para deltoides posteriores com halteres",
        "target": "latíssimo"
    },
    {
        "id": "0348",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0348.gif",
        "name": "Elevação lateral traseira deitada com halteres",
        "target": "deltóides"
    },
    {
        "id": "1735",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1735.gif",
        "name": "Extensão única deitada com halteres",
        "target": "tríceps"
    },
    {
        "id": "0349",
        "bodyPart": "antebraço",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0349.gif",
        "name": "Supinação deitada com halteres",
        "target": "antebraços"
    },
    {
        "id": "2706",
        "bodyPart": "antebraço",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2706.gif",
        "name": "Supinação deitada com halteres no chão",
        "target": "antebraços"
    },
    {
        "id": "1661",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1661.gif",
        "name": "Rosca de bíceps deitada com halteres supinada",
        "target": "bíceps"
    },
    {
        "id": "0350",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0350.gif",
        "name": "Rosca de bíceps deitada com halteres neutra",
        "target": "bíceps"
    },
    {
        "id": "0351",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0351.gif",
        "name": "Extensão de tríceps deitada com halteres",
        "target": "tríceps"
    },
    {
        "id": "1662",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1662.gif",
        "name": "Rosca larga de bíceps deitada com halteres",
        "target": "bíceps"
    },
    {
        "id": "0352",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0352.gif",
        "name": "Supino com pegada neutra com halteres",
        "target": "tríceps"
    },
    {
        "id": "1285",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1285.gif",
        "name": "Voo de braço único com halteres",
        "target": "peitoral"
    },
    {
        "id": "0292",
        "bodyPart": "costas",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0292.gif",
        "name": "Remada unilateral com halteres",
        "target": "latíssimo"
    },
    {
        "id": "1286",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1286.gif",
        "name": "Supino unilateral com halteres na bola de exercícios",
        "target": "peitoral"
    },
    {
        "id": "0353",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0353.gif",
        "name": "Rosca de concentração de braço único com halteres (sobre bola de estabilidade)",
        "target": "bíceps"
    },
    {
        "id": "1287",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1287.gif",
        "name": "Supino unilateral em declínio com halteres",
        "target": "peitoral"
    },
    {
        "id": "1288",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1288.gif",
        "name": "Voo de braço único com halteres na bola de exercícios",
        "target": "peitoral"
    },
    {
        "id": "1736",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1736.gif",
        "name": "Pressão francesa de braço único na bola de exercícios com halteres",
        "target": "tríceps"
    },
    {
        "id": "1663",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1663.gif",
        "name": "Rosca martelo de braço único em declínio com halteres",
        "target": "bíceps"
    },
    {
        "id": "1621",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1621.gif",
        "name": "Pressão de martelo de braço único em declínio com halteres na bola de exercícios",
        "target": "tríceps"
    },
    {
        "id": "1289",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1289.gif",
        "name": "Supino unilateral inclinado com halteres",
        "target": "peitoral"
    },
    {
        "id": "0354",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0354.gif",
        "name": "Tríceps kickback de braço único com halteres",
        "target": "tríceps"
    },
    {
        "id": "0355",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0355.gif",
        "name": "Elevação lateral de braço único com halteres",
        "target": "deltóides"
    },
    {
        "id": "0356",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0356.gif",
        "name": "Elevação lateral de braço único com halteres com apoio",
        "target": "deltóides"
    },
    {
        "id": "1290",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1290.gif",
        "name": "Pressão de braço único com halteres na bola de exercícios",
        "target": "peitoral"
    },
    {
        "id": "1665",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1665.gif",
        "name": "Rosca de bíceps de braço único em pronação com halteres",
        "target": "bíceps"
    },
    {
        "id": "1666",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1666.gif",
        "name": "Rosca martelo de braço único em pronação com halteres",
        "target": "bíceps"
    },
    {
        "id": "1291",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1291.gif",
        "name": "Pullover de braço único com halteres na bola de exercícios",
        "target": "peitoral"
    },
    {
        "id": "0358",
        "bodyPart": "antebraço",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0358.gif",
        "name": "Rosca reversa de pulso de braço único com halteres",
        "target": "antebraços"
    },
    {
        "id": "0359",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0359.gif",
        "name": "Voo reverso de braço único (com apoio) com halteres",
        "target": "deltóides"
    },
    {
        "id": "1622",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1622.gif",
        "name": "Pressão de braço único com pegada reversa inclinada com halteres",
        "target": "peitoral"
    },
    {
        "id": "1414",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1414.gif",
        "name": "Rosca de bíceps reversa de braço único",
        "target": "bíceps"
    },
    {
        "id": "1667",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1667.gif",
        "name": "Rosca de aranha reversa de braço único com halteres",
        "target": "bíceps"
    },
    {
        "id": "1668",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1668.gif",
        "name": "Rosca de bíceps sentado de braço único com halteres na bola de exercícios",
        "target": "bíceps"
    },
    {
        "id": "1669",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1669.gif",
        "name": "dumbbell one arm seated hammer curl",
        "target": "bíceps"
    },
    {
        "id": "1415",
        "bodyPart": "antebraço",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1415.gif",
        "name": "Rosca de punho neutra sentado de braço único com halteres",
        "target": "antebraços"
    },
    {
        "id": "0361",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0361.gif",
        "name": "Pressão de ombro de braço único com halteres",
        "target": "deltóides"
    },
    {
        "id": "0360",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0360.gif",
        "name": "Pressão de ombro de braço único com halteres v. 2",
        "target": "deltóides"
    },
    {
        "id": "3888",
        "bodyPart": "quadriceps/posterior",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3888.gif",
        "name": "Snatch de braço único com halteres",
        "target": "glúteos"
    },
    {
        "id": "1670",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1670.gif",
        "name": "Rosca de bíceps de braço único em pé",
        "target": "bíceps"
    },
    {
        "id": "1671",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1671.gif",
        "name": "Rosca martelo de braço único em pé",
        "target": "bíceps"
    },
    {
        "id": "0362",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0362.gif",
        "name": "Extensão de tríceps de braço único (no banco) com halteres",
        "target": "tríceps"
    },
    {
        "id": "0363",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0363.gif",
        "name": "Elevação lateral de braço único com halteres",
        "target": "deltóides"
    },
    {
        "id": "0364",
        "bodyPart": "antebraço",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0364.gif",
        "name": "Rosca de pulso de braço único com halteres",
        "target": "antebraços"
    },
    {
        "id": "1672",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1672.gif",
        "name": "Rosca de bíceps de braço único com martelo Zottman",
        "target": "bíceps"
    },
    {
        "id": "1292",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1292.gif",
        "name": "Voo de perna única com halteres na bola de exercícios",
        "target": "peitoral"
    },
    {
        "id": "0365",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0365.gif",
        "name": "Rosca de pulso neutra sobre o banco com halteres",
        "target": "bíceps"
    },
    {
        "id": "0366",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0366.gif",
        "name": "Rosca de pulso neutra de braço único sobre o banco com halteres",
        "target": "bíceps"
    },
    {
        "id": "1441",
        "bodyPart": "antebraço",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1441.gif",
        "name": "Rosca de punho reversa de braço único sobre o banco com halteres",
        "target": "antebraços"
    },
    {
        "id": "0367",
        "bodyPart": "antebraço",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0367.gif",
        "name": "Rosca de pulso de braço único sobre o banco com halteres",
        "target": "antebraços"
    },
    {
        "id": "0368",
        "bodyPart": "antebraço",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0368.gif",
        "name": "Rosca de pulso reversa de braço único sobre o banco com halteres",
        "target": "antebraços"
    },
    {
        "id": "0369",
        "bodyPart": "antebraço",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0369.gif",
        "name": "Rosca de pulso de braço único sobre o banco com halteres",
        "target": "antebraços"
    },
    {
        "id": "1329",
        "bodyPart": "costas",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1329.gif",
        "name": "Remada com rotação de palma de braço único inclinada com halteres",
        "target": "latíssimo"
    },
    {
        "id": "1623",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1623.gif",
        "name": "Supino inclinado com pegada interna com halteres",
        "target": "tríceps"
    },
    {
        "id": "0370",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0370.gif",
        "name": "Rosca martelo deitado",
        "target": "bíceps"
    },
    {
        "id": "0371",
        "bodyPart": "quadriceps/posterior",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0371.gif",
        "name": "Agachamento pliométrico com halteres",
        "target": "glúteos"
    },
    {
        "id": "0372",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0372.gif",
        "name": "Rosca de bíceps com apoio",
        "target": "bíceps"
    },
    {
        "id": "1673",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1673.gif",
        "name": "Rosca martelo com apoio na bola de exercícios",
        "target": "bíceps"
    },
    {
        "id": "1293",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1293.gif",
        "name": "Pressão com halteres na bola de exercícios",
        "target": "peitoral"
    },
    {
        "id": "0373",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0373.gif",
        "name": "Extensão de tríceps com pegada pronada com halteres",
        "target": "tríceps"
    },
    {
        "id": "0374",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0374.gif",
        "name": "Rosca inclinada com halteres",
        "target": "bíceps"
    },
    {
        "id": "1674",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1674.gif",
        "name": "Rosca martelo inclinada com halteres",
        "target": "bíceps"
    },
    {
        "id": "0375",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0375.gif",
        "name": "Pullover com halteres",
        "target": "peitoral"
    },
    {
        "id": "1294",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1294.gif",
        "name": "Pullover com extensão do quadril na bola de exercícios com halteres",
        "target": "peitoral"
    },
    {
        "id": "1295",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1295.gif",
        "name": "Pullover com halteres na bola de exercícios",
        "target": "peitoral"
    },
    {
        "id": "1700",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1700.gif",
        "name": "Pressão com impulso com halteres",
        "target": "deltóides"
    },
    {
        "id": "0376",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0376.gif",
        "name": "Elevação com halteres",
        "target": "deltóides"
    },
    {
        "id": "2292",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2292.gif",
        "name": "Elevação de deltoides posterior com halteres",
        "target": "deltóides"
    },
    {
        "id": "0377",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0377.gif",
        "name": "Remada de deltoides posterior com halteres",
        "target": "deltóides"
    },
    {
        "id": "0378",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0378.gif",
        "name": "Voo traseiro com halteres",
        "target": "deltóides"
    },
    {
        "id": "0380",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0380.gif",
        "name": "Elevação lateral traseira com halteres",
        "target": "deltóides"
    },
    {
        "id": "0379",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0379.gif",
        "name": "Elevação lateral traseira com halteres (apoio na cabeça)",
        "target": "deltóides"
    },
    {
        "id": "0381",
        "bodyPart": "quadriceps/posterior",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0381.gif",
        "name": "Avanço traseiro com halteres",
        "target": "glúteos"
    },
    {
        "id": "0382",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0382.gif",
        "name": "Rosca de bíceps com pegada reversa",
        "target": "bíceps"
    },
    {
        "id": "1624",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1624.gif",
        "name": "Supino reverso com halteres",
        "target": "peitoral"
    },
    {
        "id": "0383",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0383.gif",
        "name": "Elevação lateral reversa com halteres",
        "target": "deltóides"
    },
    {
        "id": "1330",
        "bodyPart": "costas",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1330.gif",
        "name": "Remada de um braço inclinada com pegada reversa com halteres",
        "target": "latíssimo"
    },
    {
        "id": "1331",
        "bodyPart": "costas",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1331.gif",
        "name": "Remada de dois braços inclinada com pegada reversa com halteres",
        "target": "latíssimo"
    },
    {
        "id": "2327",
        "bodyPart": "costas",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2327.gif",
        "name": "Remada com pegada reversa (feminino) com halteres",
        "target": "latíssimo"
    },
    {
        "id": "0384",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0384.gif",
        "name": "Rosca de bíceps reversa",
        "target": "bíceps"
    },
    {
        "id": "1675",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1675.gif",
        "name": "Rosca de aranha reversa",
        "target": "bíceps"
    },
    {
        "id": "0385",
        "bodyPart": "antebraço",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0385.gif",
        "name": "Rosca de pulso reversa com halteres",
        "target": "antebraços"
    },
    {
        "id": "1459",
        "bodyPart": "quadriceps/posterior",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1459.gif",
        "name": "Levantamento terra romeno com halteres",
        "target": "glúteos"
    },
    {
        "id": "0386",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0386.gif",
        "name": "Elevação lateral reversa com rotação com halteres",
        "target": "deltóides"
    },
    {
        "id": "2397",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2397.gif",
        "name": "Pressão Scott com halteres",
        "target": "deltóides"
    },
    {
        "id": "0387",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0387.gif",
        "name": "Elevação frontal alternada sentado com halteres",
        "target": "deltóides"
    },
    {
        "id": "1676",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1676.gif",
        "name": "Rosca martelo alternada sentado com halteres na bola de exercícios",
        "target": "bíceps"
    },
    {
        "id": "0388",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0388.gif",
        "name": "Pressão alternada sentado com halteres",
        "target": "deltóides"
    },
    {
        "id": "3546",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3546.gif",
        "name": "Ombro alternado sentado com halteres",
        "target": "deltóides"
    },
    {
        "id": "0389",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0389.gif",
        "name": "Extensão de banco sentado com halteres",
        "target": "tríceps"
    },
    {
        "id": "2317",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2317.gif",
        "name": "Elevação lateral com braços dobrados sentado",
        "target": "deltóides"
    },
    {
        "id": "1730",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1730.gif",
        "name": "Tríceps kickback alternado inclinado sentado",
        "target": "tríceps"
    },
    {
        "id": "1737",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1737.gif",
        "name": "Extensão de tríceps inclinado sentado",
        "target": "tríceps"
    },
    {
        "id": "1677",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1677.gif",
        "name": "Rosca bíceps sentado com halteres",
        "target": "bíceps"
    },
    {
        "id": "0390",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0390.gif",
        "name": "Rosca bíceps sentado (sobre a bola de estabilidade) com halteres",
        "target": "bíceps"
    },
    {
        "id": "3547",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3547.gif",
        "name": "Rosca bíceps sentado alternada com pressão de ombro com halteres",
        "target": "bíceps"
    },
    {
        "id": "1379",
        "bodyPart": "panturrilha",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1379.gif",
        "name": "Elevação de gêmeos sentado com halteres",
        "target": "panturrilha"
    },
    {
        "id": "0391",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0391.gif",
        "name": "Rosca sentado com halteres",
        "target": "bíceps"
    },
    {
        "id": "0392",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0392.gif",
        "name": "Elevação frontal sentado com halteres",
        "target": "deltóides"
    },
    {
        "id": "1678",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1678.gif",
        "name": "Rosca martelo sentado com halteres",
        "target": "bíceps"
    },
    {
        "id": "0393",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0393.gif",
        "name": "Rosca interna bíceps sentado com halteres",
        "target": "bíceps"
    },
    {
        "id": "0394",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0394.gif",
        "name": "Tríceps kickback sentado com halteres",
        "target": "tríceps"
    },
    {
        "id": "0396",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0396.gif",
        "name": "Elevação lateral sentado com halteres",
        "target": "deltóides"
    },
    {
        "id": "0395",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0395.gif",
        "name": "Elevação lateral sentado com halteres v. 2",
        "target": "deltóides"
    },
    {
        "id": "0397",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0397.gif",
        "name": "Rosca de pulso neutra sentado com halteres",
        "target": "bíceps"
    },
    {
        "id": "1679",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1679.gif",
        "name": "Rosca bíceps de braço único sentado com halteres sobre a bola de exercícios com perna elevada",
        "target": "bíceps"
    },
    {
        "id": "0398",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0398.gif",
        "name": "Tríceps kickback de braço único sentado com halteres",
        "target": "tríceps"
    },
    {
        "id": "0399",
        "bodyPart": "antebraço",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0399.gif",
        "name": "Rotação de braço único sentado com halteres",
        "target": "antebraços"
    },
    {
        "id": "0400",
        "bodyPart": "panturrilha",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0400.gif",
        "name": "Elevação de gêmeo de uma perna sentado com halteres",
        "target": "panturrilha"
    },
    {
        "id": "1380",
        "bodyPart": "panturrilha",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1380.gif",
        "name": "Elevação de gêmeo de uma perna sentado com halteres",
        "target": "panturrilha"
    },
    {
        "id": "1381",
        "bodyPart": "panturrilha",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1381.gif",
        "name": "Elevação de gêmeo de uma perna sentado com halteres",
        "target": "panturrilha"
    },
    {
        "id": "0401",
        "bodyPart": "antebraço",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0401.gif",
        "name": "Rosca de pulso com palma para cima sentado com halteres",
        "target": "antebraços"
    },
    {
        "id": "0402",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0402.gif",
        "name": "Rosca bíceps sentado com halteres",
        "target": "bíceps"
    },
    {
        "id": "0403",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0403.gif",
        "name": "Rosca de concentração reversa sentado com halteres",
        "target": "bíceps"
    },
    {
        "id": "1738",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1738.gif",
        "name": "Extensão de tríceps unilateral com pegada reversa inclinada sentado com halteres",
        "target": "tríceps"
    },
    {
        "id": "0405",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0405.gif",
        "name": "Pressão de ombro sentado com halteres",
        "target": "deltóides"
    },
    {
        "id": "0404",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0404.gif",
        "name": "Pressão de ombro sentado com halteres (pegada paralela)",
        "target": "deltóides"
    },
    {
        "id": "2188",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2188.gif",
        "name": "Extensão de tríceps sentado com halteres",
        "target": "tríceps"
    },
    {
        "id": "0406",
        "bodyPart": "costas",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0406.gif",
        "name": "Encolhimento de ombros com halteres",
        "target": "trapézio"
    },
    {
        "id": "0407",
        "bodyPart": "core",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0407.gif",
        "name": "Inclinação lateral com halteres",
        "target": "abdômen"
    },
    {
        "id": "0408",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0408.gif",
        "name": "Elevação de um braço deitado lateralmente com halteres",
        "target": "deltóides"
    },
    {
        "id": "3664",
        "bodyPart": "costas",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3664.gif",
        "name": "Prancha lateral com voo traseiro com halteres",
        "target": "latíssimo"
    },
    {
        "id": "3548",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3548.gif",
        "name": "Transporte de braço único acima da cabeça com halteres",
        "target": "deltóides"
    },
    {
        "id": "0409",
        "bodyPart": "panturrilha",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0409.gif",
        "name": "Elevação de gêmeo de uma perna com halteres",
        "target": "panturrilha"
    },
    {
        "id": "1757",
        "bodyPart": "quadriceps/posterior",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1757.gif",
        "name": "Levantamento terra com uma perna com halteres",
        "target": "glúteos"
    },
    {
        "id": "2805",
        "bodyPart": "quadriceps/posterior",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2805.gif",
        "name": "Levantamento terra com uma perna com suporte de stepbox com halteres",
        "target": "glúteos"
    },
    {
        "id": "0410",
        "bodyPart": "quadriceps/posterior",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0410.gif",
        "name": "Agachamento com uma perna com halteres",
        "target": "quadríceps"
    },
    {
        "id": "0411",
        "bodyPart": "quadriceps/posterior",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0411.gif",
        "name": "Agachamento com uma perna com halteres",
        "target": "glúteos"
    },
    {
        "id": "0413",
        "bodyPart": "quadriceps/posterior",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0413.gif",
        "name": "Agachamento com halteres",
        "target": "glúteos"
    },
    {
        "id": "3560",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3560.gif",
        "name": "Rosca martelo e pressão alternadas em pé com halteres",
        "target": "bíceps"
    },
    {
        "id": "0414",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0414.gif",
        "name": "Pressão alternada em pé com halteres",
        "target": "deltóides"
    },
    {
        "id": "0415",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0415.gif",
        "name": "Elevação alternada em pé com halteres",
        "target": "deltóides"
    },
    {
        "id": "1739",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1739.gif",
        "name": "Tríceps kickback alternado em pé com halteres",
        "target": "tríceps"
    },
    {
        "id": "2143",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2143.gif",
        "name": "Circundução com halteres em pé",
        "target": "deltóides"
    },
    {
        "id": "1740",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1740.gif",
        "name": "Extensão de tríceps de um braço inclinado em pé com halteres",
        "target": "tríceps"
    },
    {
        "id": "1741",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1741.gif",
        "name": "Extensão de tríceps de dois braços inclinado em pé com halteres",
        "target": "tríceps"
    },
    {
        "id": "0416",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0416.gif",
        "name": "Rosca bíceps em pé com halteres",
        "target": "bíceps"
    },
    {
        "id": "0417",
        "bodyPart": "panturrilha",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0417.gif",
        "name": "Elevação de gêmeo em pé com halteres",
        "target": "panturrilha"
    },
    {
        "id": "0418",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0418.gif",
        "name": "Rosca de concentração em pé com halteres",
        "target": "bíceps"
    },
    {
        "id": "0419",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0419.gif",
        "name": "Elevação frontal acima da cabeça em pé com halteres",
        "target": "deltóides"
    },
    {
        "id": "2321",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2321.gif",
        "name": "Rosca interna de bíceps em pé com halteres v. 2",
        "target": "bíceps"
    },
    {
        "id": "0420",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0420.gif",
        "name": "Tríceps kickback em pé com halteres",
        "target": "tríceps"
    },
    {
        "id": "0421",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0421.gif",
        "name": "Rosca de concentração de braço único em pé com halteres",
        "target": "bíceps"
    },
    {
        "id": "0422",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0422.gif",
        "name": "Rosca de braço único em pé (sobre o banco inclinado) com halteres",
        "target": "bíceps"
    },
    {
        "id": "1680",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1680.gif",
        "name": "Rosca de braço único em pé sobre o banco inclinado com halteres",
        "target": "bíceps"
    },
    {
        "id": "0423",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0423.gif",
        "name": "Extensão de braço único em pé com halteres",
        "target": "tríceps"
    },
    {
        "id": "0424",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0424.gif",
        "name": "Pressão de palma única em pé com halteres",
        "target": "deltóides"
    },
    {
        "id": "0425",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0425.gif",
        "name": "Rosca reversa de braço único em pé com halteres",
        "target": "bíceps"
    },
    {
        "id": "0426",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0426.gif",
        "name": "Pressão de ombro em pé com halteres",
        "target": "deltóides"
    },
    {
        "id": "0427",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0427.gif",
        "name": "Pressão de palma única em pé com halteres",
        "target": "deltóides"
    },
    {
        "id": "0428",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0428.gif",
        "name": "Rosca de braço único em pé com halteres",
        "target": "bíceps"
    },
    {
        "id": "0429",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0429.gif",
        "name": "Rosca reversa em pé com halteres",
        "target": "bíceps"
    },
    {
        "id": "0430",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0430.gif",
        "name": "Extensão de tríceps em pé com halteres",
        "target": "tríceps"
    },
    {
        "id": "2293",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2293.gif",
        "name": "Rosca de braço único em pé com halteres Zottman",
        "target": "bíceps"
    },
    {
        "id": "1684",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1684.gif",
        "name": "Levantamento com uma perna e equilíbrio com rosca de bíceps",
        "target": "bíceps"
    },
    {
        "id": "0431",
        "bodyPart": "quadriceps/posterior",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0431.gif",
        "name": "Step-up com halteres",
        "target": "glúteos"
    },
    {
        "id": "2796",
        "bodyPart": "quadriceps/posterior",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2796.gif",
        "name": "Afundo com halteres",
        "target": "quadríceps"
    },
    {
        "id": "2812",
        "bodyPart": "quadriceps/posterior",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2812.gif",
        "name": "Agachamento com halteres",
        "target": "quadríceps"
    },
    {
        "id": "0432",
        "bodyPart": "quadriceps/posterior",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0432.gif",
        "name": "Levantamento terra com pernas esticadas com halteres",
        "target": "glúteos"
    },
    {
        "id": "0433",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0433.gif",
        "name": "Pullover de braços esticados com halteres",
        "target": "peitoral"
    },
    {
        "id": "0434",
        "bodyPart": "quadriceps/posterior",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0434.gif",
        "name": "Levantamento terra com pernas esticadas com halteres",
        "target": "glúteos"
    },
    {
        "id": "2808",
        "bodyPart": "quadriceps/posterior",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2808.gif",
        "name": "Puxada com halteres estilo sumô",
        "target": "glúteos"
    },
    {
        "id": "2803",
        "bodyPart": "quadriceps/posterior",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2803.gif",
        "name": "Agachamento com apoio com halteres",
        "target": "quadríceps"
    },
    {
        "id": "0436",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0436.gif",
        "name": "Pressão Tate com halteres",
        "target": "tríceps"
    },
    {
        "id": "1742",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1742.gif",
        "name": "Tríceps kickback com halteres com postura de cegonha",
        "target": "tríceps"
    },
    {
        "id": "1743",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1743.gif",
        "name": "Tríceps kickback na bola de exercícios com halteres",
        "target": "tríceps"
    },
    {
        "id": "0437",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0437.gif",
        "name": "Rosca martelo com halteres com apoio",
        "target": "deltóides"
    },
    {
        "id": "1765",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1765.gif",
        "name": "dumbbell upright row (back pov)",
        "target": "deltóides"
    },
    {
        "id": "0864",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0864.gif",
        "name": "dumbbell upright shoulder external rotation",
        "target": "deltóides"
    },
    {
        "id": "5201",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_5201.gif",
        "name": "dumbbell waiter biceps curl",
        "target": "bíceps"
    },
    {
        "id": "0438",
        "bodyPart": "ombro",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0438.gif",
        "name": "Elevação com halteres com apoio",
        "target": "deltóides"
    },
    {
        "id": "0439",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0439.gif",
        "name": "Elevação com halteres com apoio",
        "target": "bíceps"
    },
    {
        "id": "2294",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2294.gif",
        "name": "dumbbell zottman preacher curl",
        "target": "bíceps"
    },
    {
        "id": "2189",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2189.gif",
        "name": "dumbbells seated triceps extension",
        "target": "tríceps"
    },
    {
        "id": "1167",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1167.gif",
        "name": "dynamic chest stretch (male)",
        "target": "peitoral"
    },
    {
        "id": "3287",
        "bodyPart": "biceps/triceps",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3287.gif",
        "name": "elbow dips",
        "target": "tríceps"
    },
    {
        "id": "1772",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1772.gif",
        "name": "elbow lift - reverse push-up",
        "target": "latíssimo"
    },
    {
        "id": "0443",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0443.gif",
        "name": "Encolhimento de ombros com halteres com apoio",
        "target": "abdômen"
    },
    {
        "id": "3292",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3292.gif",
        "name": "Elevador",
        "target": "latíssimo"
    },
    {
        "id": "1332",
        "bodyPart": "costas",
        "equipment": "bola de estabiliade",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1332.gif",
        "name": "Elevação Alternada de Braços com Bola de Exercício",
        "target": "dorsal"
    },
    {
        "id": "1333",
        "bodyPart": "costas",
        "equipment": "bola de estabiliade",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1333.gif",
        "name": "Extensão das Costas com Braços Estendidos com Bola de Exercício",
        "target": "coluna"
    },
    {
        "id": "1334",
        "bodyPart": "costas",
        "equipment": "bola de estabiliade",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1334.gif",
        "name": "Extensão das Costas com Mãos Atrás da Cabeça com Bola de Exercício",
        "target": "coluna"
    },
    {
        "id": "1335",
        "bodyPart": "costas",
        "equipment": "bola de estabiliade",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1335.gif",
        "name": "Extensão das Costas com Joelhos Fora do Chão com Bola de Exercício",
        "target": "coluna"
    },
    {
        "id": "1336",
        "bodyPart": "costas",
        "equipment": "bola de estabiliade",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1336.gif",
        "name": "Extensão das Costas com Rotação com Bola de Exercício",
        "target": "coluna"
    },
    {
        "id": "1744",
        "bodyPart": "biceps/triceps",
        "equipment": "bola de estabiliade",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1744.gif",
        "name": "Mergulho com Bola de Exercício",
        "target": "tríceps"
    },
    {
        "id": "1559",
        "bodyPart": "quadriceps/posterior",
        "equipment": "bola de estabiliade",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1559.gif",
        "name": "Alongamento dos Flexores do Quadril com Bola de Exercício",
        "target": "glúteos"
    },
    {
        "id": "1338",
        "bodyPart": "costas",
        "equipment": "bola de estabiliade",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1338.gif",
        "name": "Abraço com Bola de Exercício",
        "target": "coluna"
    },
    {
        "id": "1339",
        "bodyPart": "costas",
        "equipment": "bola de estabiliade",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1339.gif",
        "name": "Alongamento do Latíssimo do Dorso com Bola de Exercício",
        "target": "dorsal"
    },
    {
        "id": "1341",
        "bodyPart": "costas",
        "equipment": "bola de estabiliade",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1341.gif",
        "name": "Alongamento Lombar com Bola de Exercício (Pirâmide)",
        "target": "dorsal"
    },
    {
        "id": "1342",
        "bodyPart": "costas",
        "equipment": "bola de estabiliade",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1342.gif",
        "name": "Alongamento Lateral do Latíssimo do Dorso com Bola de Exercício",
        "target": "dorsal"
    },
    {
        "id": "1382",
        "bodyPart": "panturrilha",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1382.gif",
        "name": "Elevação de Panturrilha com Bola de Exercício na Parede",
        "target": "panturrilha"
    },
    {
        "id": "3241",
        "bodyPart": "panturrilha",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3241.gif",
        "name": "Elevação de Panturrilha com Bola de Exercício na Parede (Bola de Tênis entre os Tornozelos)",
        "target": "panturrilha"
    },
    {
        "id": "3240",
        "bodyPart": "panturrilha",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3240.gif",
        "name": "Elevação de Panturrilha com Bola de Exercício na Parede (Bola de Tênis entre os Joelhos)",
        "target": "panturrilha"
    },
    {
        "id": "1416",
        "bodyPart": "quadriceps/posterior",
        "equipment": "bola de estabiliade",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1416.gif",
        "name": "Rotação do Corpo Inferior em Decúbito Ventral com uma Perna na Bola de Exercício",
        "target": "glúteos"
    },
    {
        "id": "1417",
        "bodyPart": "quadriceps/posterior",
        "equipment": "bola de estabiliade",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1417.gif",
        "name": "Flexão Diagonal com Chute de Isquiotibiais com uma Perna na Bola de Exercício",
        "target": "glúteos"
    },
    {
        "id": "1296",
        "bodyPart": "peito",
        "equipment": "bola de estabiliade",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1296.gif",
        "name": "Flexão de Pino com Bola de Exercício",
        "target": "peitoral"
    },
    {
        "id": "1343",
        "bodyPart": "costas",
        "equipment": "bola de estabiliade",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1343.gif",
        "name": "Elevação de Pernas em Decúbito Ventral com Bola de Exercício",
        "target": "coluna"
    },
    {
        "id": "1560",
        "bodyPart": "quadriceps/posterior",
        "equipment": "bola de estabiliade",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1560.gif",
        "name": "Alongamento dos Isquiotibiais Sentado com Bola de Exercício",
        "target": "isquiotibiais"
    },
    {
        "id": "1745",
        "bodyPart": "biceps/triceps",
        "equipment": "bola de estabiliade",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1745.gif",
        "name": "Alongamento dos Tríceps Sentado com Bola de Exercício",
        "target": "tríceps"
    },
    {
        "id": "1746",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1746.gif",
        "name": "Extensão dos Tríceps Supino com Bola de Exercício",
        "target": "tríceps"
    },
    {
        "id": "1747",
        "bodyPart": "biceps/triceps",
        "equipment": "barra W",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1747.gif",
        "name": "Francês com Barra EZ na Bola de Exercício",
        "target": "tríceps"
    },
    {
        "id": "3010",
        "bodyPart": "costas",
        "equipment": "barra W",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3010.gif",
        "name": "Pulôver com Braços Dobrados com Barra EZ",
        "target": "dorsal"
    },
    {
        "id": "1748",
        "bodyPart": "biceps/triceps",
        "equipment": "barra W",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1748.gif",
        "name": "Extensão dos Tríceps em Supino com Pegada Fechada Atrás da Cabeça com Barra EZ",
        "target": "tríceps"
    },
    {
        "id": "1344",
        "bodyPart": "costas",
        "equipment": "barra W",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1344.gif",
        "name": "Remada Curvada com Pegada Reversa com Barra EZ",
        "target": "latíssimo"
    },
    {
        "id": "1682",
        "bodyPart": "biceps/triceps",
        "equipment": "barra W",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1682.gif",
        "name": "Rosca de bíceps com halteres com apoio",
        "target": "bíceps"
    },
    {
        "id": "1749",
        "bodyPart": "biceps/triceps",
        "equipment": "barra W",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1749.gif",
        "name": "Francês em Pé com Barra EZ",
        "target": "tríceps"
    },
    {
        "id": "0445",
        "bodyPart": "ombro",
        "equipment": "barra W",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0445.gif",
        "name": "Pressão Anti-Gravidade com Barra EZ",
        "target": "deltóides"
    },
    {
        "id": "1627",
        "bodyPart": "biceps/triceps",
        "equipment": "barra W",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1627.gif",
        "name": "Rosca Scott com Barra EZ e Pegada Fechada",
        "target": "bíceps"
    },
    {
        "id": "0446",
        "bodyPart": "biceps/triceps",
        "equipment": "barra W",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0446.gif",
        "name": "Rosca com Pegada Fechada com Barra EZ",
        "target": "bíceps"
    },
    {
        "id": "0447",
        "bodyPart": "biceps/triceps",
        "equipment": "barra W",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0447.gif",
        "name": "Rosca com Barra EZ",
        "target": "bíceps"
    },
    {
        "id": "0448",
        "bodyPart": "biceps/triceps",
        "equipment": "barra W",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0448.gif",
        "name": "Pressão Facial com Pegada Fechada em Declive com Barra EZ",
        "target": "tríceps"
    },
    {
        "id": "2186",
        "bodyPart": "biceps/triceps",
        "equipment": "barra W",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2186.gif",
        "name": "Extensão de Tríceps em Declive com Barra EZ",
        "target": "tríceps"
    },
    {
        "id": "0449",
        "bodyPart": "biceps/triceps",
        "equipment": "barra W",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0449.gif",
        "name": "Extensão de Tríceps em Inclinação com Barra EZ",
        "target": "tríceps"
    },
    {
        "id": "0450",
        "bodyPart": "biceps/triceps",
        "equipment": "barra W",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0450.gif",
        "name": "Supino com Barra EZ com Pegada JM",
        "target": "tríceps"
    },
    {
        "id": "0451",
        "bodyPart": "biceps/triceps",
        "equipment": "barra W",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0451.gif",
        "name": "Rosca Reversa com Barra EZ",
        "target": "bíceps"
    },
    {
        "id": "0452",
        "bodyPart": "biceps/triceps",
        "equipment": "barra W",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0452.gif",
        "name": "Rosca Scott Reversa com Barra EZ",
        "target": "bíceps"
    },
    {
        "id": "1458",
        "bodyPart": "biceps/triceps",
        "equipment": "barra W",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1458.gif",
        "name": "Rosca Sentado com Barra EZ",
        "target": "bíceps"
    },
    {
        "id": "0453",
        "bodyPart": "biceps/triceps",
        "equipment": "barra W",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0453.gif",
        "name": "Extensão de Tríceps Sentado com Barra EZ",
        "target": "tríceps"
    },
    {
        "id": "0454",
        "bodyPart": "biceps/triceps",
        "equipment": "barra W",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0454.gif",
        "name": "Rosca Aranha com Barra EZ",
        "target": "bíceps"
    },
    {
        "id": "1628",
        "bodyPart": "biceps/triceps",
        "equipment": "barra W",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1628.gif",
        "name": "Rosca Aranha com Barra EZ",
        "target": "bíceps"
    },
    {
        "id": "2404",
        "bodyPart": "biceps/triceps",
        "equipment": "barra W",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2404.gif",
        "name": "Rosca Bíceps com Barra EZ (com Braçadeira de Braço)",
        "target": "bíceps"
    },
    {
        "id": "2432",
        "bodyPart": "biceps/triceps",
        "equipment": "barra W",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2432.gif",
        "name": "Supino com Pegada Fechada com Barra EZ",
        "target": "tríceps"
    },
    {
        "id": "2741",
        "bodyPart": "biceps/triceps",
        "equipment": "barra W",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2741.gif",
        "name": "Rosca Bíceps em Pé com Barra EZ e Pegada Larga",
        "target": "bíceps"
    },
    {
        "id": "2133",
        "bodyPart": "quadriceps/posterior",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2133.gif",
        "name": "Caminhada do Agricultor",
        "target": "quadríceps"
    },
    {
        "id": "0455",
        "bodyPart": "antebraço",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0455.gif",
        "name": "Rosca com os Dedos",
        "target": "antebraços"
    },
    {
        "id": "3303",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3303.gif",
        "name": "Bandeira",
        "target": "abdômen"
    },
    {
        "id": "0456",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0456.gif",
        "name": "Abdominal com Flexão de Pernas (Joelho Flexionado)",
        "target": "abdômen"
    },
    {
        "id": "0457",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0457.gif",
        "name": "Abdominal com Flexão de Pernas (Braços Estendidos)",
        "target": "abdômen"
    },
    {
        "id": "0458",
        "bodyPart": "peito",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0458.gif",
        "name": "Crucifixo no Chão (com Barra)",
        "target": "peitoral"
    },
    {
        "id": "0459",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0459.gif",
        "name": "Chutes Alternados",
        "target": "glúteos"
    },
    {
        "id": "1472",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1472.gif",
        "name": "Salto para Frente",
        "target": "quadríceps"
    },
    {
        "id": "3470",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3470.gif",
        "name": "Avanço para Frente (Masculino)",
        "target": "glúteos"
    },
    {
        "id": "3194",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3194.gif",
        "name": "Agachamento Frankenstein",
        "target": "glúteos"
    },
    {
        "id": "2429",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2429.gif",
        "name": "Crunch de Sapo",
        "target": "abdômen"
    },
    {
        "id": "3301",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3301.gif",
        "name": "Plancha de Sapo",
        "target": "abdômen"
    },
    {
        "id": "3296",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3296.gif",
        "name": "Alavanca Frontal",
        "target": "abdômen"
    },
    {
        "id": "3295",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3295.gif",
        "name": "Repetições de Alavanca Frontal",
        "target": "latíssimo"
    },
    {
        "id": "0464",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0464.gif",
        "name": "Prancha Frontal com Torção",
        "target": "abdômen"
    },
    {
        "id": "3315",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3315.gif",
        "name": "Maltese Completa",
        "target": "abdômen"
    },
    {
        "id": "3299",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3299.gif",
        "name": "Plancha Completa",
        "target": "abdômen"
    },
    {
        "id": "3327",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3327.gif",
        "name": "Flexão na Plancha Completa",
        "target": "peitoral"
    },
    {
        "id": "0466",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0466.gif",
        "name": "Esterno de Gironda com Queixo",
        "target": "dorsal"
    },
    {
        "id": "3561",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3561.gif",
        "name": "Marcha de Ponte Glútea",
        "target": "glúteos"
    },
    {
        "id": "3523",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3523.gif",
        "name": "Ponte Glútea com Ambas as Pernas no Banco (Masculino)",
        "target": "glúteos"
    },
    {
        "id": "3193",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3193.gif",
        "name": "Elevação de Glúteo com Flexão do Quadril",
        "target": "isquiotibiais"
    },
    {
        "id": "0467",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0467.gif",
        "name": "Queixo Gorila",
        "target": "abdômen"
    },
    {
        "id": "0469",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0469.gif",
        "name": "Crunch de Virilha",
        "target": "abdômen"
    },
    {
        "id": "1383",
        "bodyPart": "panturrilha",
        "equipment": "hack",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1383.gif",
        "name": "Elevação de Panturrilha na Máquina Hack",
        "target": "panturrilha"
    },
    {
        "id": "1384",
        "bodyPart": "panturrilha",
        "equipment": "hack",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1384.gif",
        "name": "Elevação de Panturrilha Unilateral na Máquina Hack",
        "target": "panturrilha"
    },
    {
        "id": "3221",
        "bodyPart": "cardio",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3221.gif",
        "name": "Flexão de Joelhos (Masculino)",
        "target": "cardio"
    },
    {
        "id": "3202",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3202.gif",
        "name": "Abdominal Semi Sentado (Masculino)",
        "target": "abdômen"
    },
    {
        "id": "1511",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1511.gif",
        "name": "Alongamento dos Isquiotibiais",
        "target": "isquiotibiais"
    },
    {
        "id": "2139",
        "bodyPart": "peito",
        "equipment": "cicloergômetro",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2139.gif",
        "name": "Pedalada de Mãos",
        "target": "peitoral"
    },
    {
        "id": "3218",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3218.gif",
        "name": "Toque Circular nos Dedos com Mãos Entrelaçadas (Masculino)",
        "target": "glúteos"
    },
    {
        "id": "3215",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3215.gif",
        "name": "Toque Circular nos Dedos Revertido com Mãos Entrelaçadas (Masculino)",
        "target": "glúteos"
    },
    {
        "id": "3302",
        "bodyPart": "biceps/triceps",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3302.gif",
        "name": "Parada de Mão",
        "target": "tríceps"
    },
    {
        "id": "0471",
        "bodyPart": "biceps/triceps",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0471.gif",
        "name": "Flexão de Braço na Parada de Mão",
        "target": "tríceps"
    },
    {
        "id": "1764",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1764.gif",
        "name": "Elevação de Quadril com Pernas Penduradas",
        "target": "abdômen"
    },
    {
        "id": "0472",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0472.gif",
        "name": "Elevação de Pernas Penduradas",
        "target": "abdômen"
    },
    {
        "id": "1761",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1761.gif",
        "name": "Elevação de Joelhos com Pendência Lateral",
        "target": "abdômen"
    },
    {
        "id": "0473",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0473.gif",
        "name": "Elevação de Pernas Penduradas em V",
        "target": "abdômen"
    },
    {
        "id": "0474",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0474.gif",
        "name": "Elevação de Quadril com Pernas Estendidas Penduradas",
        "target": "abdômen"
    },
    {
        "id": "0475",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0475.gif",
        "name": "Elevação de Pernas Estendidas Penduradas",
        "target": "abdômen"
    },
    {
        "id": "0476",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0476.gif",
        "name": "Elevação de Quadril com Pernas Estendidas e Torção Penduradas",
        "target": "abdômen"
    },
    {
        "id": "3636",
        "bodyPart": "cardio",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3636.gif",
        "name": "Elevação de Joelho Contra a Parede",
        "target": "cardio"
    },
    {
        "id": "0484",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0484.gif",
        "name": "Elevação de Quadril (Joelho Flexionado)",
        "target": "abdômen"
    },
    {
        "id": "1418",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1418.gif",
        "name": "Abraço dos Joelhos ao Peito",
        "target": "glúteos"
    },
    {
        "id": "3234",
        "bodyPart": "peito",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3234.gif",
        "name": "Crucifixo com Halteres",
        "target": "peitoral"
    },
    {
        "id": "0489",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0489.gif",
        "name": "Hiperextensão",
        "target": "coluna"
    },
    {
        "id": "0488",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0488.gif",
        "name": "Hiperextensão (no Banco)",
        "target": "coluna"
    },
    {
        "id": "3289",
        "bodyPart": "biceps/triceps",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3289.gif",
        "name": "Mergulhos Impossíveis",
        "target": "tríceps"
    },
    {
        "id": "1471",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1471.gif",
        "name": "Gusanito",
        "target": "abdômen"
    },
    {
        "id": "3698",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3698.gif",
        "name": "Gusanito Versão 2",
        "target": "abdômen"
    },
    {
        "id": "0490",
        "bodyPart": "biceps/triceps",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0490.gif",
        "name": "Flexão de Braço em Inclinação com Pegada Fechada",
        "target": "tríceps"
    },
    {
        "id": "0491",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0491.gif",
        "name": "Elevação de Quadril em Inclinação (Perna Estendida)",
        "target": "abdômen"
    },
    {
        "id": "0492",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0492.gif",
        "name": "Salto Profundo na Flexão de Braço em Inclinação",
        "target": "peitoral"
    },
    {
        "id": "0493",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0493.gif",
        "name": "Flexão de Braço em Inclinação",
        "target": "peitoral"
    },
    {
        "id": "3785",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3785.gif",
        "name": "Flexão de Braço em Inclinação (na Caixa)",
        "target": "peitoral"
    },
    {
        "id": "0494",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0494.gif",
        "name": "Flexão de Braço Reversa em Inclinação",
        "target": "peitoral"
    },
    {
        "id": "3011",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3011.gif",
        "name": "Flexão de Escápulas em Inclinação",
        "target": "serrátil"
    },
    {
        "id": "0495",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0495.gif",
        "name": "Abdominal com Torção em Inclinação",
        "target": "abdômen"
    },
    {
        "id": "1564",
        "bodyPart": "quadriceps/posterior",
        "equipment": "corda naval",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1564.gif",
        "name": "Alongamento Intermediário dos Flexores do Quadril e Quadríceps",
        "target": "quadríceps"
    },
    {
        "id": "0496",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0496.gif",
        "name": "Curl Invertido (com Suporte no Banco)",
        "target": "isquiotibiais"
    },
    {
        "id": "2400",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2400.gif",
        "name": "Curl Invertido (na Máquina de Cabo de Puxada)",
        "target": "isquiotibiais"
    },
    {
        "id": "0499",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0499.gif",
        "name": "Remada Invertida",
        "target": "latíssimo"
    },
    {
        "id": "2300",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2300.gif",
        "name": "Remada Invertida com Joelhos Flexionados",
        "target": "latíssimo"
    },
    {
        "id": "2298",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2298.gif",
        "name": "Remada Invertida no Banco",
        "target": "latíssimo"
    },
    {
        "id": "0497",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0497.gif",
        "name": "Remada Invertida Versão 2",
        "target": "latíssimo"
    },
    {
        "id": "0498",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0498.gif",
        "name": "Remada Invertida com Alças",
        "target": "latíssimo"
    },
    {
        "id": "1419",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1419.gif",
        "name": "Alongamento em Cruz de Ferro",
        "target": "glúteos"
    },
    {
        "id": "1297",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1297.gif",
        "name": "Compressão Isométrica do Peito",
        "target": "peitoral"
    },
    {
        "id": "0500",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0500.gif",
        "name": "Limpa Isométrica",
        "target": "peitoral"
    },
    {
        "id": "0501",
        "bodyPart": "cardio",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0501.gif",
        "name": "Burpee com Salto",
        "target": "cardio"
    },
    {
        "id": "3224",
        "bodyPart": "cardio",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3224.gif",
        "name": "Salto Jack (Masculino)",
        "target": "cardio"
    },
    {
        "id": "0507",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0507.gif",
        "name": "Abdominal Jackknife",
        "target": "abdômen"
    },
    {
        "id": "0508",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0508.gif",
        "name": "Abdominal Janda",
        "target": "abdômen"
    },
    {
        "id": "2612",
        "bodyPart": "cardio",
        "equipment": "corda naval",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2612.gif",
        "name": "Pular Corda",
        "target": "cardio"
    },
    {
        "id": "0514",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0514.gif",
        "name": "Agachamento com Salto",
        "target": "glúteos"
    },
    {
        "id": "0513",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0513.gif",
        "name": "Agachamento com Salto Versão 2",
        "target": "glúteos"
    },
    {
        "id": "0517",
        "bodyPart": "core",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0517.gif",
        "name": "Moinho de Vento Avançado com Kettlebell",
        "target": "abdômen"
    },
    {
        "id": "0518",
        "bodyPart": "antebraço",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0518.gif",
        "name": "Hang Clean Alternado com Kettlebell",
        "target": "antebraços"
    },
    {
        "id": "0520",
        "bodyPart": "ombro",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0520.gif",
        "name": "Pressão Alternada com Kettlebell",
        "target": "deltóides"
    },
    {
        "id": "0519",
        "bodyPart": "peito",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0519.gif",
        "name": "Pressão Alternada no Chão com Kettlebell",
        "target": "peitoral"
    },
    {
        "id": "0521",
        "bodyPart": "costas",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0521.gif",
        "name": "Remada Renegada Alternada com Kettlebell",
        "target": "latíssimo"
    },
    {
        "id": "0522",
        "bodyPart": "costas",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0522.gif",
        "name": "Remada Alternada com Kettlebell",
        "target": "latíssimo"
    },
    {
        "id": "0523",
        "bodyPart": "ombro",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0523.gif",
        "name": "Pressão Arnold com Kettlebell",
        "target": "deltóides"
    },
    {
        "id": "0524",
        "bodyPart": "core",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0524.gif",
        "name": "Pressão Curvada com Kettlebell",
        "target": "abdômen"
    },
    {
        "id": "0525",
        "bodyPart": "biceps/triceps",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0525.gif",
        "name": "Limpa com Kettlebell de Ponta para Cima da Posição de Pendurar",
        "target": "bíceps"
    },
    {
        "id": "0526",
        "bodyPart": "biceps/triceps",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0526.gif",
        "name": "Hang Clean Alternado com Kettlebell Duplo",
        "target": "bíceps"
    },
    {
        "id": "0527",
        "bodyPart": "ombro",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0527.gif",
        "name": "Jerk Duplo com Kettlebell",
        "target": "deltóides"
    },
    {
        "id": "0528",
        "bodyPart": "ombro",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0528.gif",
        "name": "Pressão Dupla com Kettlebell",
        "target": "deltóides"
    },
    {
        "id": "0529",
        "bodyPart": "ombro",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0529.gif",
        "name": "Snatch Duplo com Kettlebell",
        "target": "deltóides"
    },
    {
        "id": "0530",
        "bodyPart": "core",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0530.gif",
        "name": "Moinho de Vento Duplo com Kettlebell",
        "target": "abdômen"
    },
    {
        "id": "0531",
        "bodyPart": "peito",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0531.gif",
        "name": "Pressão de Braço Estendido com Kettlebell em Amplitude Estendida no Chão",
        "target": "peitoral"
    },
    {
        "id": "0532",
        "bodyPart": "core",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0532.gif",
        "name": "Figura 8 com Kettlebell",
        "target": "abdômen"
    },
    {
        "id": "0533",
        "bodyPart": "quadriceps/posterior",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0533.gif",
        "name": "Agachamento Frontal com Kettlebell",
        "target": "glúteos"
    },
    {
        "id": "0534",
        "bodyPart": "quadriceps/posterior",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0534.gif",
        "name": "Agachamento Goblet com Kettlebell",
        "target": "glúteos"
    },
    {
        "id": "0535",
        "bodyPart": "quadriceps/posterior",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0535.gif",
        "name": "Hang Clean com Kettlebell",
        "target": "isquiotibiais"
    },
    {
        "id": "0536",
        "bodyPart": "quadriceps/posterior",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0536.gif",
        "name": "Passagem de Agachamento com Kettlebell",
        "target": "glúteos"
    },
    {
        "id": "0537",
        "bodyPart": "ombro",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0537.gif",
        "name": "Clean and Jerk de Um Braço com Kettlebell",
        "target": "deltóides"
    },
    {
        "id": "1298",
        "bodyPart": "peito",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1298.gif",
        "name": "Pressão de Um Braço no Chão com Kettlebell",
        "target": "peitoral"
    },
    {
        "id": "0538",
        "bodyPart": "ombro",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0538.gif",
        "name": "Jerk de Um Braço com Kettlebell",
        "target": "deltóides"
    },
    {
        "id": "0539",
        "bodyPart": "ombro",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0539.gif",
        "name": "Pressão Militar de Um Braço para o Lado com Kettlebell",
        "target": "deltóides"
    },
    {
        "id": "0540",
        "bodyPart": "ombro",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0540.gif",
        "name": "Pressão de Um Braço com Kettlebell",
        "target": "deltóides"
    },
    {
        "id": "0541",
        "bodyPart": "costas",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0541.gif",
        "name": "Remada de Um Braço com Kettlebell",
        "target": "latíssimo"
    },
    {
        "id": "0542",
        "bodyPart": "ombro",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0542.gif",
        "name": "Snatch de Um Braço com Kettlebell",
        "target": "deltóides"
    },
    {
        "id": "0543",
        "bodyPart": "ombro",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0543.gif",
        "name": "Pernas de Super Pirata com Kettlebell",
        "target": "deltóides"
    },
    {
        "id": "0544",
        "bodyPart": "quadriceps/posterior",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0544.gif",
        "name": "Agachamento Pistola com Kettlebell",
        "target": "glúteos"
    },
    {
        "id": "0545",
        "bodyPart": "peito",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0545.gif",
        "name": "Flexão Pliométrica com Kettlebell",
        "target": "peitoral"
    },
    {
        "id": "0546",
        "bodyPart": "ombro",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0546.gif",
        "name": "Pressão Sentada com Kettlebell",
        "target": "deltóides"
    },
    {
        "id": "1438",
        "bodyPart": "ombro",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1438.gif",
        "name": "Pressão Militar com Ambos os Braços Sentado com Kettlebell",
        "target": "deltóides"
    },
    {
        "id": "0547",
        "bodyPart": "ombro",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0547.gif",
        "name": "Pressão Alternada com Kettlebell",
        "target": "deltóides"
    },
    {
        "id": "0548",
        "bodyPart": "costas",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0548.gif",
        "name": "Puxada Alta Sumô com Kettlebell",
        "target": "trapézio"
    },
    {
        "id": "0549",
        "bodyPart": "quadriceps/posterior",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0549.gif",
        "name": "Balanço com Kettlebell",
        "target": "glúteos"
    },
    {
        "id": "0550",
        "bodyPart": "ombro",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0550.gif",
        "name": "Agachamento com Impulso e Pressão com Kettlebell",
        "target": "deltóides"
    },
    {
        "id": "0551",
        "bodyPart": "quadriceps/posterior",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0551.gif",
        "name": "Levantamento Turco com Kettlebell (Estilo Agachamento)",
        "target": "glúteos"
    },
    {
        "id": "0552",
        "bodyPart": "ombro",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0552.gif",
        "name": "Limpa com Ambos os Braços com Kettlebell",
        "target": "deltóides"
    },
    {
        "id": "0553",
        "bodyPart": "ombro",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0553.gif",
        "name": "Pressão Militar com Ambos os Braços com Kettlebell",
        "target": "deltóides"
    },
    {
        "id": "1345",
        "bodyPart": "costas",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1345.gif",
        "name": "Remada com Ambos os Braços com Kettlebell",
        "target": "latíssimo"
    },
    {
        "id": "0554",
        "bodyPart": "core",
        "equipment": "kettlebell",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0554.gif",
        "name": "Moinho de Vento com Kettlebell",
        "target": "abdômen"
    },
    {
        "id": "0555",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0555.gif",
        "name": "Abdominal com Extensão de Pernas",
        "target": "isquiotibiais"
    },
    {
        "id": "0558",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0558.gif",
        "name": "Muscle Up com Balanço",
        "target": "dorsal"
    },
    {
        "id": "3640",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3640.gif",
        "name": "Crunch com Toque no Joelho",
        "target": "abdômen"
    },
    {
        "id": "1420",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1420.gif",
        "name": "Agachamento com Salto de Joelhos",
        "target": "glúteos"
    },
    {
        "id": "1346",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1346.gif",
        "name": "Alongamento do Latíssimo do Dorso em Posição de Joelhos",
        "target": "dorsal"
    },
    {
        "id": "3239",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3239.gif",
        "name": "Prancha de Joelhos com Toque no Ombro (Masculino)",
        "target": "abdômen"
    },
    {
        "id": "3211",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3211.gif",
        "name": "Flexão de Braço de Joelhos (Masculino)",
        "target": "peitoral"
    },
    {
        "id": "3288",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3288.gif",
        "name": "Mergulhos Coreanos",
        "target": "peitoral"
    },
    {
        "id": "3418",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3418.gif",
        "name": "Pull-Up em L",
        "target": "dorsal"
    },
    {
        "id": "3419",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3419.gif",
        "name": "L-Sit no Chão",
        "target": "abdômen"
    },
    {
        "id": "0562",
        "bodyPart": "core",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0562.gif",
        "name": "Giro de 180 Graus com Barra Fixa",
        "target": "abdômen"
    },
    {
        "id": "3237",
        "bodyPart": "ombro",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3237.gif",
        "name": "Elevação Lateral com Barra Fixa",
        "target": "deltóides"
    },
    {
        "id": "3300",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3300.gif",
        "name": "Plancha Inclinada",
        "target": "abdômen"
    },
    {
        "id": "2271",
        "bodyPart": "ombro",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2271.gif",
        "name": "Gancho Esquerdo. Boxe",
        "target": "deltóides"
    },
    {
        "id": "0570",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0570.gif",
        "name": "Puxada de Pernas em Banco Plano",
        "target": "abdômen"
    },
    {
        "id": "1576",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1576.gif",
        "name": "Alongamento dos Isquiotibiais Elevando a Perna",
        "target": "isquiotibiais"
    },
    {
        "id": "2287",
        "bodyPart": "quadriceps/posterior",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2287.gif",
        "name": "Pressão Alternada com Pernas com Alavanca",
        "target": "quadríceps"
    },
    {
        "id": "0571",
        "bodyPart": "costas",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0571.gif",
        "name": "Remada Sentada com Pegada Estreita Alternada com Alavanca",
        "target": "latíssimo"
    },
    {
        "id": "0572",
        "bodyPart": "costas",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0572.gif",
        "name": "Chin-Up com Ajuda de Alavanca",
        "target": "dorsal"
    },
    {
        "id": "0573",
        "bodyPart": "costas",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0573.gif",
        "name": "Extensão das Costas com Alavanca",
        "target": "coluna"
    },
    {
        "id": "0574",
        "bodyPart": "costas",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0574.gif",
        "name": "Remada Curvada com Alavanca",
        "target": "latíssimo"
    },
    {
        "id": "3200",
        "bodyPart": "costas",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3200.gif",
        "name": "Remada Curvada com Alavanca e Barra em V",
        "target": "latíssimo"
    },
    {
        "id": "0575",
        "bodyPart": "biceps/triceps",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0575.gif",
        "name": "Rosca Bíceps com Alavanca",
        "target": "bíceps"
    },
    {
        "id": "2289",
        "bodyPart": "panturrilha",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2289.gif",
        "name": "Pressão de Panturrilha com Alavanca",
        "target": "panturrilha"
    },
    {
        "id": "0577",
        "bodyPart": "peito",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0577.gif",
        "name": "Pressão Peitoral com Alavanca",
        "target": "peitoral"
    },
    {
        "id": "0576",
        "bodyPart": "peito",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0576.gif",
        "name": "Pressão Peitoral com Alavanca",
        "target": "peitoral"
    },
    {
        "id": "0578",
        "bodyPart": "quadriceps/posterior",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0578.gif",
        "name": "Levantamento Terra com Alavanca",
        "target": "glúteos"
    },
    {
        "id": "1300",
        "bodyPart": "peito",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1300.gif",
        "name": "Pressão Peitoral Declinada com Alavanca",
        "target": "peitoral"
    },
    {
        "id": "1253",
        "bodyPart": "panturrilha",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1253.gif",
        "name": "Elevação de Panturrilha com Alavanca de Burro",
        "target": "panturrilha"
    },
    {
        "id": "0579",
        "bodyPart": "costas",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0579.gif",
        "name": "Puxada Frontal com Alavanca",
        "target": "dorsal"
    },
    {
        "id": "0580",
        "bodyPart": "costas",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0580.gif",
        "name": "Encolhimento sem Pegada com Alavanca",
        "target": "trapézio"
    },
    {
        "id": "1439",
        "bodyPart": "costas",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1439.gif",
        "name": "Encolhimento sem Pegada com Alavanca Versão 2",
        "target": "trapézio"
    },
    {
        "id": "2288",
        "bodyPart": "antebraço",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2288.gif",
        "name": "Pegada sem Pegada com Alavanca",
        "target": "antebraços"
    },
    {
        "id": "1615",
        "bodyPart": "biceps/triceps",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1615.gif",
        "name": "Rosca Martelo em Supino com Alavanca",
        "target": "bíceps"
    },
    {
        "id": "0581",
        "bodyPart": "costas",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0581.gif",
        "name": "Remada Alta com Alavanca",
        "target": "latíssimo"
    },
    {
        "id": "2286",
        "bodyPart": "quadriceps/posterior",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2286.gif",
        "name": "Extensão de Quadril com Alavanca Versão 2",
        "target": "glúteos"
    },
    {
        "id": "2611",
        "bodyPart": "quadriceps/posterior",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2611.gif",
        "name": "Pressão de Perna em Posição Horizontal com Alavanca",
        "target": "glúteos"
    },
    {
        "id": "1299",
        "bodyPart": "peito",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1299.gif",
        "name": "Pressão Peitoral Inclinada com Alavanca",
        "target": "peitoral"
    },
    {
        "id": "1479",
        "bodyPart": "peito",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1479.gif",
        "name": "Pressão Peitoral Inclinada com Alavanca Versão 2",
        "target": "peitoral"
    },
    {
        "id": "0582",
        "bodyPart": "quadriceps/posterior",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0582.gif",
        "name": "Flexão de Pernas com Alavanca Ajoelhado",
        "target": "isquiotibiais"
    },
    {
        "id": "0583",
        "bodyPart": "core",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0583.gif",
        "name": "Torção Ajoelhada com Alavanca",
        "target": "abdômen"
    },
    {
        "id": "0584",
        "bodyPart": "ombro",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0584.gif",
        "name": "Elevação Lateral com Alavanca",
        "target": "deltóides"
    },
    {
        "id": "0585",
        "bodyPart": "quadriceps/posterior",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0585.gif",
        "name": "Extensão de Pernas com Alavanca",
        "target": "quadríceps"
    },
    {
        "id": "0586",
        "bodyPart": "quadriceps/posterior",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0586.gif",
        "name": "Flexão de Pernas Deitado com Alavanca",
        "target": "isquiotibiais"
    },
    {
        "id": "3195",
        "bodyPart": "quadriceps/posterior",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3195.gif",
        "name": "Flexão de Pernas Deitado com Alavanca Dois-para-Um",
        "target": "isquiotibiais"
    },
    {
        "id": "0587",
        "bodyPart": "ombro",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0587.gif",
        "name": "Pressão Militar com Alavanca",
        "target": "deltóides"
    },
    {
        "id": "0588",
        "bodyPart": "costas",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0588.gif",
        "name": "Remada Sentada com Pegada Estreita com Alavanca",
        "target": "latíssimo"
    },
    {
        "id": "0589",
        "bodyPart": "costas",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0589.gif",
        "name": "Remada Curvada com Alavanca de Um Braço",
        "target": "latíssimo"
    },
    {
        "id": "1356",
        "bodyPart": "costas",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1356.gif",
        "name": "Remada Alta Lateral de Um Braço com Alavanca",
        "target": "latíssimo"
    },
    {
        "id": "1347",
        "bodyPart": "costas",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1347.gif",
        "name": "Puxada Lateral Ampla de Um Braço com Alavanca",
        "target": "dorsal"
    },
    {
        "id": "0590",
        "bodyPart": "ombro",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0590.gif",
        "name": "Pressão de Ombro de Um Braço com Alavanca",
        "target": "deltóides"
    },
    {
        "id": "0591",
        "bodyPart": "biceps/triceps",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0591.gif",
        "name": "Mergulho de Tríceps de Cima com Alavanca",
        "target": "tríceps"
    },
    {
        "id": "0592",
        "bodyPart": "biceps/triceps",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0592.gif",
        "name": "Rosca em Banco Scott com Alavanca",
        "target": "bíceps"
    },
    {
        "id": "1614",
        "bodyPart": "biceps/triceps",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1614.gif",
        "name": "Rosca Scott com Alavanca Versão 2",
        "target": "bíceps"
    },
    {
        "id": "2285",
        "bodyPart": "costas",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2285.gif",
        "name": "Pulôver com Alavanca",
        "target": "dorsal"
    },
    {
        "id": "2736",
        "bodyPart": "costas",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2736.gif",
        "name": "Puxada Lateral Reversa com Alavanca de Pegada Reversa",
        "target": "dorsal"
    },
    {
        "id": "1616",
        "bodyPart": "biceps/triceps",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1616.gif",
        "name": "Rosca Martelo Reversa em Supino com Alavanca",
        "target": "bíceps"
    },
    {
        "id": "1348",
        "bodyPart": "costas",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1348.gif",
        "name": "Remada Vertical de Pegada Reversa com Alavanca",
        "target": "latíssimo"
    },
    {
        "id": "0593",
        "bodyPart": "quadriceps/posterior",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0593.gif",
        "name": "Hiperextensão Reversa com Alavanca",
        "target": "glúteos"
    },
    {
        "id": "1349",
        "bodyPart": "costas",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1349.gif",
        "name": "Remada T-Bar de Pegada Reversa com Alavanca",
        "target": "latíssimo"
    },
    {
        "id": "2315",
        "bodyPart": "panturrilha",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2315.gif",
        "name": "Panturrilha Rotativa com Alavanca",
        "target": "panturrilha"
    },
    {
        "id": "2335",
        "bodyPart": "panturrilha",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2335.gif",
        "name": "Pressão de Panturrilha Sentado com Alavanca",
        "target": "panturrilha"
    },
    {
        "id": "0594",
        "bodyPart": "panturrilha",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0594.gif",
        "name": "Elevação de Panturrilha Sentado com Alavanca",
        "target": "panturrilha"
    },
    {
        "id": "1452",
        "bodyPart": "core",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1452.gif",
        "name": "Crunch Sentado com Alavanca",
        "target": "abdômen"
    },
    {
        "id": "0595",
        "bodyPart": "core",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0595.gif",
        "name": "Crunch Sentado com Alavanca (Almofada no Peito)",
        "target": "abdômen"
    },
    {
        "id": "3760",
        "bodyPart": "core",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3760.gif",
        "name": "Crunch Sentado com Alavanca Versão 2",
        "target": "abdômen"
    },
    {
        "id": "1451",
        "bodyPart": "biceps/triceps",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1451.gif",
        "name": "Mergulho Sentado com Alavanca",
        "target": "tríceps"
    },
    {
        "id": "0596",
        "bodyPart": "peito",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0596.gif",
        "name": "Fly Sentado com Alavanca",
        "target": "peitoral"
    },
    {
        "id": "3759",
        "bodyPart": "quadriceps/posterior",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3759.gif",
        "name": "Bom Dia Sentado com Alavanca",
        "target": "glúteos"
    },
    {
        "id": "0597",
        "bodyPart": "quadriceps/posterior",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0597.gif",
        "name": "Abdução do Quadril Sentado com Alavanca",
        "target": "abdutores"
    },
    {
        "id": "0598",
        "bodyPart": "quadriceps/posterior",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0598.gif",
        "name": "Adução do Quadril Sentado com Alavanca",
        "target": "adutores"
    },
    {
        "id": "0599",
        "bodyPart": "quadriceps/posterior",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0599.gif",
        "name": "Flexão de Pernas Sentado com Alavanca",
        "target": "isquiotibiais"
    },
    {
        "id": "0600",
        "bodyPart": "core",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0600.gif",
        "name": "Crunch com Elevação de Pernas Sentado com Alavanca",
        "target": "abdômen"
    },
    {
        "id": "0602",
        "bodyPart": "ombro",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0602.gif",
        "name": "Elevação Lateral Reversa Sentado com Alavanca",
        "target": "deltóides"
    },
    {
        "id": "0601",
        "bodyPart": "ombro",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0601.gif",
        "name": "Elevação Lateral Reversa Sentado com Alavanca (Pegada Paralela)",
        "target": "deltóides"
    },
    {
        "id": "1350",
        "bodyPart": "costas",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1350.gif",
        "name": "Remada Sentada com Alavanca",
        "target": "latíssimo"
    },
    {
        "id": "1385",
        "bodyPart": "panturrilha",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1385.gif",
        "name": "Elevação de Panturrilha Sentado com Alavanca em Máquina de Leg Press",
        "target": "panturrilha"
    },
    {
        "id": "0603",
        "bodyPart": "ombro",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0603.gif",
        "name": "Pressão de Ombro com Alavanca",
        "target": "deltóides"
    },
    {
        "id": "0869",
        "bodyPart": "ombro",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0869.gif",
        "name": "Pressão de Ombro com Alavanca Versão 2",
        "target": "deltóides"
    },
    {
        "id": "2318",
        "bodyPart": "ombro",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2318.gif",
        "name": "Pressão de Ombro com Alavanca Versão 3",
        "target": "deltóides"
    },
    {
        "id": "0604",
        "bodyPart": "costas",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0604.gif",
        "name": "Encolhimento com Alavanca",
        "target": "trapézio"
    },
    {
        "id": "0605",
        "bodyPart": "panturrilha",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0605.gif",
        "name": "Elevação de Panturrilha em Pé com Alavanca",
        "target": "panturrilha"
    },
    {
        "id": "3758",
        "bodyPart": "peito",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3758.gif",
        "name": "Pressão Peitoral em Pé com Alavanca",
        "target": "peitoral"
    },
    {
        "id": "0606",
        "bodyPart": "costas",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0606.gif",
        "name": "Remada T-Bar com Alavanca",
        "target": "latíssimo"
    },
    {
        "id": "1351",
        "bodyPart": "costas",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1351.gif",
        "name": "Remada T-Bar de Pegada Reversa com Alavanca",
        "target": "latíssimo"
    },
    {
        "id": "0607",
        "bodyPart": "biceps/triceps",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0607.gif",
        "name": "Extensão de Tríceps com Alavanca",
        "target": "tríceps"
    },
    {
        "id": "1313",
        "bodyPart": "costas",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1313.gif",
        "name": "Remada Unilateral com Alavanca",
        "target": "latíssimo"
    },
    {
        "id": "0609",
        "bodyPart": "costas",
        "equipment": "corda naval",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0609.gif",
        "name": "Ponte de Londres",
        "target": "latíssimo"
    },
    {
        "id": "3013",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3013.gif",
        "name": "Ponte de Glúteos Baixa no Chão",
        "target": "glúteos"
    },
    {
        "id": "1352",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1352.gif",
        "name": "Curl da Parte Inferior das Costas",
        "target": "coluna"
    },
    {
        "id": "3582",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3582.gif",
        "name": "Avanço com Salto",
        "target": "glúteos"
    },
    {
        "id": "1688",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1688.gif",
        "name": "Avanço com Torção",
        "target": "abdômen"
    },
    {
        "id": "0613",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0613.gif",
        "name": "Alongamento dos Quadris (Deitado de Lado)",
        "target": "quadríceps"
    },
    {
        "id": "2312",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2312.gif",
        "name": "Cotovelo no Joelho Deitado",
        "target": "abdômen"
    },
    {
        "id": "0620",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0620.gif",
        "name": "Elevação de Pernas em Banco Plano Deitado",
        "target": "abdômen"
    },
    {
        "id": "0865",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0865.gif",
        "name": "Elevação de Pernas e Quadris Deitado",
        "target": "abdômen"
    },
    {
        "id": "1301",
        "bodyPart": "peito",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1301.gif",
        "name": "Pressão Interna do Peitoral na Máquina",
        "target": "peitoral"
    },
    {
        "id": "0624",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0624.gif",
        "name": "Abdominal Marcha (Parede)",
        "target": "glúteos"
    },
    {
        "id": "1353",
        "bodyPart": "costas",
        "equipment": "bola",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1353.gif",
        "name": "Pegar e Lançar uma Bola Medicinal Acima da Cabeça",
        "target": "dorsal"
    },
    {
        "id": "1302",
        "bodyPart": "peito",
        "equipment": "bola",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1302.gif",
        "name": "Passagem de Peito com Bola Medicinal",
        "target": "peitoral"
    },
    {
        "id": "1303",
        "bodyPart": "peito",
        "equipment": "bola",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1303.gif",
        "name": "Empurrão de Peito com Bola Medicinal a partir de 3 Pontos de Apoio",
        "target": "peitoral"
    },
    {
        "id": "1304",
        "bodyPart": "peito",
        "equipment": "bola",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1304.gif",
        "name": "Empurrão de Peito com Bola Medicinal com Múltiplas Respostas",
        "target": "peitoral"
    },
    {
        "id": "1305",
        "bodyPart": "peito",
        "equipment": "bola",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1305.gif",
        "name": "Empurrão de Peito com Bola Medicinal com Resposta Única",
        "target": "peitoral"
    },
    {
        "id": "1312",
        "bodyPart": "peito",
        "equipment": "bola",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1312.gif",
        "name": "Empurrão de Peito com Bola Medicinal com Lançamento em Corrida",
        "target": "peitoral"
    },
    {
        "id": "1701",
        "bodyPart": "biceps/triceps",
        "equipment": "bola",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1701.gif",
        "name": "Flexão de Braço em Inclinação com Pegada Fechada com Bola Medicinal",
        "target": "tríceps"
    },
    {
        "id": "1354",
        "bodyPart": "costas",
        "equipment": "bola",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1354.gif",
        "name": "Arremesso Acima da Cabeça com Bola Medicinal",
        "target": "latíssimo"
    },
    {
        "id": "1750",
        "bodyPart": "biceps/triceps",
        "equipment": "bola",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1750.gif",
        "name": "Arremesso Supino com Bola Medicinal",
        "target": "tríceps"
    },
    {
        "id": "0627",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0627.gif",
        "name": "Chin-Up com Pegada Mista",
        "target": "dorsal"
    },
    {
        "id": "3217",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3217.gif",
        "name": "Flexão Hindu Modificada (Masculino)",
        "target": "peitoral"
    },
    {
        "id": "1421",
        "bodyPart": "antebraço",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1421.gif",
        "name": "Flexão Modificada para Abaixar os Braços",
        "target": "antebraços"
    },
    {
        "id": "0628",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0628.gif",
        "name": "Caminhada Monstro",
        "target": "glúteos"
    },
    {
        "id": "0630",
        "bodyPart": "cardio",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0630.gif",
        "name": "Escalador",
        "target": "cardio"
    },
    {
        "id": "0631",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0631.gif",
        "name": "Muscle Up",
        "target": "dorsal"
    },
    {
        "id": "1401",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1401.gif",
        "name": "Muscle-Up (na Barra Vertical)",
        "target": "dorsal"
    },
    {
        "id": "2328",
        "bodyPart": "biceps/triceps",
        "equipment": "bola de estabiliade",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2328.gif",
        "name": "Flexão de Braço Estreita em Bola de Exercícios",
        "target": "tríceps"
    },
    {
        "id": "1403",
        "bodyPart": "pescoço",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1403.gif",
        "name": "Alongamento Lateral do Pescoço",
        "target": "escapula"
    },
    {
        "id": "0634",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0634.gif",
        "name": "Abdominal Negativo",
        "target": "abdômen"
    },
    {
        "id": "1495",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1495.gif",
        "name": "Abdominal Oblíquo Versão 2",
        "target": "abdômen"
    },
    {
        "id": "0635",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0635.gif",
        "name": "Abdominais Oblíquos no Chão",
        "target": "abdômen"
    },
    {
        "id": "0636",
        "bodyPart": "biceps/triceps",
        "equipment": "barra olímpica",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0636.gif",
        "name": "Rosca Martelo com Barra Olímpica",
        "target": "bíceps"
    },
    {
        "id": "0637",
        "bodyPart": "biceps/triceps",
        "equipment": "barra olímpica",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0637.gif",
        "name": "Extensão de Tríceps com Barra Olímpica",
        "target": "tríceps"
    },
    {
        "id": "1355",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1355.gif",
        "name": "Um Braço Contra a Parede",
        "target": "dorsal"
    },
    {
        "id": "0638",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0638.gif",
        "name": "Chin-Up de Um Braço",
        "target": "dorsal"
    },
    {
        "id": "0639",
        "bodyPart": "biceps/triceps",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0639.gif",
        "name": "Mergulho de Um Braço",
        "target": "tríceps"
    },
    {
        "id": "0640",
        "bodyPart": "core",
        "equipment": "bola",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0640.gif",
        "name": "Arremesso de Um Braço (com Bola Medicinal)",
        "target": "abdômen"
    },
    {
        "id": "1773",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1773.gif",
        "name": "Remada de Toalha de Um Braço",
        "target": "latíssimo"
    },
    {
        "id": "1386",
        "bodyPart": "panturrilha",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1386.gif",
        "name": "Elevação de Panturrilha de Um Pé com Alavanca de Burro",
        "target": "panturrilha"
    },
    {
        "id": "1387",
        "bodyPart": "panturrilha",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1387.gif",
        "name": "Elevação de Panturrilha de Um Pé no Chão",
        "target": "panturrilha"
    },
    {
        "id": "1476",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1476.gif",
        "name": "Agachamento de Um Pé",
        "target": "glúteos"
    },
    {
        "id": "0641",
        "bodyPart": "core",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0641.gif",
        "name": "Up Otis",
        "target": "abdômen"
    },
    {
        "id": "0642",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0642.gif",
        "name": "Flexão de Braço com Chute Externo da Perna",
        "target": "glúteos"
    },
    {
        "id": "0643",
        "bodyPart": "biceps/triceps",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0643.gif",
        "name": "Alongamento do Tríceps Acima da Cabeça",
        "target": "tríceps"
    },
    {
        "id": "3147",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3147.gif",
        "name": "Inclinação Pélvica",
        "target": "abdômen"
    },
    {
        "id": "1422",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1422.gif",
        "name": "Inclinação Pélvica em Ponte",
        "target": "glúteos"
    },
    {
        "id": "1388",
        "bodyPart": "panturrilha",
        "equipment": "corda naval",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1388.gif",
        "name": "Alongamento dos Peroneais",
        "target": "panturrilha"
    },
    {
        "id": "3662",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3662.gif",
        "name": "Push-Up da Cobra para a Pica",
        "target": "glúteos"
    },
    {
        "id": "1306",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1306.gif",
        "name": "Flexão Pliométrica",
        "target": "peitoral"
    },
    {
        "id": "1687",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1687.gif",
        "name": "Passo Posterior com Alcance Acima da Cabeça",
        "target": "abdômen"
    },
    {
        "id": "1389",
        "bodyPart": "panturrilha",
        "equipment": "corda naval",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1389.gif",
        "name": "Alongamento do Tibial Posterior",
        "target": "panturrilha"
    },
    {
        "id": "3119",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3119.gif",
        "name": "Agachamento do Trono",
        "target": "abdômen"
    },
    {
        "id": "3132",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3132.gif",
        "name": "Agachamento do Trono com Suporte",
        "target": "glúteos"
    },
    {
        "id": "0648",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0648.gif",
        "name": "Arranco",
        "target": "isquiotibiais"
    },
    {
        "id": "3665",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3665.gif",
        "name": "Prancha Reversa com Elevação de Perna",
        "target": "abdômen"
    },
    {
        "id": "3203",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3203.gif",
        "name": "Meio Abdominal em Prisioneiro (Masculino)",
        "target": "abdômen"
    },
    {
        "id": "1707",
        "bodyPart": "core",
        "equipment": "bola de estabiliade",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1707.gif",
        "name": "Torção Prone no Stability Ball",
        "target": "abdômen"
    },
    {
        "id": "0651",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0651.gif",
        "name": "Pull Up (Pegada Neutra)",
        "target": "dorsal"
    },
    {
        "id": "0650",
        "bodyPart": "core",
        "equipment": "bola de estabiliade",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0650.gif",
        "name": "Puxar (no Stability Ball)",
        "target": "abdômen"
    },
    {
        "id": "0652",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0652.gif",
        "name": "Pull-Up",
        "target": "dorsal"
    },
    {
        "id": "1689",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1689.gif",
        "name": "Empurrar e Puxar o Próprio Peso Corporal",
        "target": "peitoral"
    },
    {
        "id": "3638",
        "bodyPart": "cardio",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3638.gif",
        "name": "Empurrar para Correr",
        "target": "cardio"
    },
    {
        "id": "1307",
        "bodyPart": "peito",
        "equipment": "meia bola",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1307.gif",
        "name": "Flexão de Braço na Bola Bosu",
        "target": "peitoral"
    },
    {
        "id": "0662",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0662.gif",
        "name": "Flexão de Braço",
        "target": "peitoral"
    },
    {
        "id": "0653",
        "bodyPart": "peito",
        "equipment": "meia bola",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0653.gif",
        "name": "Flexão de Braço (Bola Bosu)",
        "target": "peitoral"
    },
    {
        "id": "0655",
        "bodyPart": "peito",
        "equipment": "bola de estabiliade",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0655.gif",
        "name": "Flexão de Braço (no Stability Ball)",
        "target": "peitoral"
    },
    {
        "id": "0656",
        "bodyPart": "peito",
        "equipment": "bola de estabiliade",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0656.gif",
        "name": "Flexão de Braço (no Stability Ball)",
        "target": "peitoral"
    },
    {
        "id": "0659",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0659.gif",
        "name": "Flexão de Braço (Parede)",
        "target": "peitoral"
    },
    {
        "id": "0658",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0658.gif",
        "name": "Flexão de Braço (Parede) Versão 2",
        "target": "peitoral"
    },
    {
        "id": "0660",
        "bodyPart": "biceps/triceps",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0660.gif",
        "name": "Flexão de Braço Fechada com ombreia de Halteres",
        "target": "tríceps"
    },
    {
        "id": "0661",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0661.gif",
        "name": "Flexão de Braço com Chute Dentro da Perna",
        "target": "glúteos"
    },
    {
        "id": "0663",
        "bodyPart": "peito",
        "equipment": "bola",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0663.gif",
        "name": "Flexão de Braço com Bola Medicinal",
        "target": "peitoral"
    },
    {
        "id": "1467",
        "bodyPart": "biceps/triceps",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1467.gif",
        "name": "Flexão de Braço nos Braços Inferiores",
        "target": "tríceps"
    },
    {
        "id": "3145",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3145.gif",
        "name": "Flexão de Braço Plus",
        "target": "peitoral"
    },
    {
        "id": "0664",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0664.gif",
        "name": "Flexão de Braço para Prancha Lateral",
        "target": "abdômen"
    },
    {
        "id": "3533",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3533.gif",
        "name": "Quadríceps",
        "target": "quadríceps"
    },
    {
        "id": "3201",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3201.gif",
        "name": "Meio Abdominal",
        "target": "abdômen"
    },
    {
        "id": "3552",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3552.gif",
        "name": "Pés Rápidos Versão 2",
        "target": "quadríceps"
    },
    {
        "id": "0666",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0666.gif",
        "name": "Elevação de Braço Único com Flexão de Braço",
        "target": "peitoral"
    },
    {
        "id": "0668",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0668.gif",
        "name": "Ponte Posterior Declinada",
        "target": "glúteos"
    },
    {
        "id": "0669",
        "bodyPart": "ombro",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0669.gif",
        "name": "Alongamento do Deltoides Posterior",
        "target": "deltóides"
    },
    {
        "id": "0670",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0670.gif",
        "name": "Puxada Posterior",
        "target": "dorsal"
    },
    {
        "id": "1582",
        "bodyPart": "quadriceps/posterior",
        "equipment": "corda naval",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1582.gif",
        "name": "Pose Reclinada de Dedo Grande com Corda",
        "target": "isquiotibiais"
    },
    {
        "id": "3236",
        "bodyPart": "quadriceps/posterior",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3236.gif",
        "name": "Impulso de Quadril com Banda de Resistência nos Joelhos (Feminino)",
        "target": "glúteos"
    },
    {
        "id": "3007",
        "bodyPart": "quadriceps/posterior",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3007.gif",
        "name": "Extensão de Perna com Banda de Resistência",
        "target": "quadríceps"
    },
    {
        "id": "3123",
        "bodyPart": "biceps/triceps",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3123.gif",
        "name": "Rosca de Bíceps Sentado com Banda de Resistência",
        "target": "bíceps"
    },
    {
        "id": "3124",
        "bodyPart": "peito",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3124.gif",
        "name": "Pressão de Peito Sentado com Banda de Resistência",
        "target": "peitoral"
    },
    {
        "id": "3006",
        "bodyPart": "quadriceps/posterior",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3006.gif",
        "name": "Abdução de Quadril Sentado com Banda de Resistência",
        "target": "abdutores"
    },
    {
        "id": "3122",
        "bodyPart": "ombro",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3122.gif",
        "name": "Pressão de Ombro Sentado com Banda de Resistência",
        "target": "deltóides"
    },
    {
        "id": "3144",
        "bodyPart": "costas",
        "equipment": "elástico",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3144.gif",
        "name": "Remada Retraída Sentado com Banda de Resistência",
        "target": "latíssimo"
    },
    {
        "id": "0872",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0872.gif",
        "name": "Crunch Reverso",
        "target": "abdômen"
    },
    {
        "id": "0672",
        "bodyPart": "biceps/triceps",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0672.gif",
        "name": "Mergulho Reverso",
        "target": "tríceps"
    },
    {
        "id": "0673",
        "bodyPart": "costas",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0673.gif",
        "name": "Puxada Latissimus com Máquina de Pegada Reversa",
        "target": "dorsal"
    },
    {
        "id": "0674",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0674.gif",
        "name": "Pull-Up com Pegada Reversa",
        "target": "dorsal"
    },
    {
        "id": "0675",
        "bodyPart": "quadriceps/posterior",
        "equipment": "bola de estabiliade",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0675.gif",
        "name": "Hiperextensão Reversa (no Stability Ball)",
        "target": "glúteos"
    },
    {
        "id": "1423",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1423.gif",
        "name": "Hiperextensão Reversa em Banco Plano",
        "target": "glúteos"
    },
    {
        "id": "3663",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3663.gif",
        "name": "Prancha Reversa com Elevação de Perna",
        "target": "abdômen"
    },
    {
        "id": "0677",
        "bodyPart": "biceps/triceps",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0677.gif",
        "name": "Mergulhos em Anéis",
        "target": "tríceps"
    },
    {
        "id": "2571",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2571.gif",
        "name": "Alongamento do Sapo Balançante",
        "target": "glúteos"
    },
    {
        "id": "0678",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0678.gif",
        "name": "Puxada para Baixo de Rocky",
        "target": "dorsal"
    },
    {
        "id": "2208",
        "bodyPart": "costas",
        "equipment": "rolo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2208.gif",
        "name": "alongamento das costas com rolo",
        "target": "coluna"
    },
    {
        "id": "2204",
        "bodyPart": "core",
        "equipment": "rolo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2204.gif",
        "name": "movimento do corpo com rolo",
        "target": "abdômen"
    },
    {
        "id": "2205",
        "bodyPart": "quadriceps/posterior",
        "equipment": "rolo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2205.gif",
        "name": "alongamento do quadril com rolo",
        "target": "glúteos"
    },
    {
        "id": "2202",
        "bodyPart": "quadriceps/posterior",
        "equipment": "rolo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2202.gif",
        "name": "alongamento do quadril com rolo",
        "target": "glúteos"
    },
    {
        "id": "2206",
        "bodyPart": "core",
        "equipment": "rolo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2206.gif",
        "name": "abdominal reverso com rolo",
        "target": "abdômen"
    },
    {
        "id": "2203",
        "bodyPart": "peito",
        "equipment": "rolo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2203.gif",
        "name": "flexão do ombro sentado com rolo para depressão e retração",
        "target": "peitoral"
    },
    {
        "id": "2209",
        "bodyPart": "peito",
        "equipment": "rolo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2209.gif",
        "name": "flexão do ombro sentado com rolo de uma perna para depressão e retração",
        "target": "peitoral"
    },
    {
        "id": "2207",
        "bodyPart": "costas",
        "equipment": "rolo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2207.gif",
        "name": "alongamento do latíssimo do dorso lateral com rolo",
        "target": "dorsal"
    },
    {
        "id": "0680",
        "bodyPart": "costas",
        "equipment": "corda naval",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0680.gif",
        "name": "escalada de corda",
        "target": "latíssimo"
    },
    {
        "id": "0685",
        "bodyPart": "cardio",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0685.gif",
        "name": "corrida",
        "target": "cardio"
    },
    {
        "id": "0684",
        "bodyPart": "cardio",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0684.gif",
        "name": "corrida (com equipamento)",
        "target": "cardio"
    },
    {
        "id": "1585",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1585.gif",
        "name": "alongamento para corredores",
        "target": "isquiotibiais"
    },
    {
        "id": "0687",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0687.gif",
        "name": "torção russa",
        "target": "abdômen"
    },
    {
        "id": "3012",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3012.gif",
        "name": "mergulho escapular",
        "target": "trapézio"
    },
    {
        "id": "3021",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3021.gif",
        "name": "flexão escapular",
        "target": "serrátil"
    },
    {
        "id": "0688",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0688.gif",
        "name": "pull-up escapular",
        "target": "trapézio"
    },
    {
        "id": "3219",
        "bodyPart": "cardio",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3219.gif",
        "name": "saltos tesoura (masculino)",
        "target": "cardio"
    },
    {
        "id": "1390",
        "bodyPart": "panturrilha",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1390.gif",
        "name": "alongamento do gêmeo sentado (masculino)",
        "target": "panturrilha"
    },
    {
        "id": "1424",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1424.gif",
        "name": "alongamento glúteo sentado",
        "target": "glúteos"
    },
    {
        "id": "0689",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0689.gif",
        "name": "elevação de pernas sentado",
        "target": "abdômen"
    },
    {
        "id": "0690",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0690.gif",
        "name": "alongamento lombar sentado",
        "target": "dorsal"
    },
    {
        "id": "2567",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2567.gif",
        "name": "alongamento piriforme sentado",
        "target": "glúteos"
    },
    {
        "id": "0691",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0691.gif",
        "name": "crunch lateral sentado (na parede)",
        "target": "abdômen"
    },
    {
        "id": "1587",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1587.gif",
        "name": "sequência de pose sentada de ângulo amplo",
        "target": "isquiotibiais"
    },
    {
        "id": "0697",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0697.gif",
        "name": "curl inverso de perna com ajuda própria",
        "target": "isquiotibiais"
    },
    {
        "id": "1766",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1766.gif",
        "name": "curl inverso de perna com ajuda própria",
        "target": "isquiotibiais"
    },
    {
        "id": "0696",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0696.gif",
        "name": "curl inverso de perna com ajuda própria (no chão)",
        "target": "isquiotibiais"
    },
    {
        "id": "3222",
        "bodyPart": "cardio",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3222.gif",
        "name": "salto semi-agachado (masculino)",
        "target": "cardio"
    },
    {
        "id": "3656",
        "bodyPart": "cardio",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3656.gif",
        "name": "corrida de passos curtos",
        "target": "cardio"
    },
    {
        "id": "1763",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1763.gif",
        "name": "pull-up com pegada de ombro",
        "target": "dorsal"
    },
    {
        "id": "3699",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3699.gif",
        "name": "toque de ombro",
        "target": "abdômen"
    },
    {
        "id": "0699",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0699.gif",
        "name": "flexão com toque de ombro",
        "target": "peitoral"
    },
    {
        "id": "1774",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1774.gif",
        "name": "abdução de quadril na prancha lateral",
        "target": "abdutores"
    },
    {
        "id": "0705",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0705.gif",
        "name": "prancha lateral versão 2",
        "target": "abdômen"
    },
    {
        "id": "0709",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0709.gif",
        "name": "abdução de quadril lateral (em barras paralelas)",
        "target": "abdômen"
    },
    {
        "id": "0710",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0710.gif",
        "name": "abdução de quadril lateral",
        "target": "abdutores"
    },
    {
        "id": "1358",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1358.gif",
        "name": "alongamento lateral no chão",
        "target": "dorsal"
    },
    {
        "id": "3667",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3667.gif",
        "name": "adução de quadril deitado de lado (masculino)",
        "target": "adutores"
    },
    {
        "id": "1775",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1775.gif",
        "name": "adução de quadril na prancha lateral",
        "target": "adutores"
    },
    {
        "id": "0716",
        "bodyPart": "pescoço",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0716.gif",
        "name": "alongamento do pescoço com empurrão lateral",
        "target": "escapula"
    },
    {
        "id": "0717",
        "bodyPart": "biceps/triceps",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0717.gif",
        "name": "flexão lateral",
        "target": "tríceps"
    },
    {
        "id": "0721",
        "bodyPart": "antebraço",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0721.gif",
        "name": "alongamento do pulso para o lado",
        "target": "antebraços"
    },
    {
        "id": "0720",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0720.gif",
        "name": "barra fixa de lado a lado",
        "target": "dorsal"
    },
    {
        "id": "3213",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3213.gif",
        "name": "toque nos dedos do pé de lado a lado (masculino)",
        "target": "abdômen"
    },
    {
        "id": "0725",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0725.gif",
        "name": "flexão de braço com um braço",
        "target": "peitoral"
    },
    {
        "id": "3645",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3645.gif",
        "name": "ponte de uma perna com perna estendida",
        "target": "glúteos"
    },
    {
        "id": "0727",
        "bodyPart": "panturrilha",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0727.gif",
        "name": "elevação de panturrilha com um pé (em um haltere)",
        "target": "panturrilha"
    },
    {
        "id": "0730",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0730.gif",
        "name": "deslize de plataforma com uma perna",
        "target": "isquiotibiais"
    },
    {
        "id": "1759",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1759.gif",
        "name": "agachamento de uma perna (pistola) masculino",
        "target": "glúteos"
    },
    {
        "id": "1489",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1489.gif",
        "name": "agachamento 'sissy'",
        "target": "quadríceps"
    },
    {
        "id": "0735",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0735.gif",
        "name": "abdominal versão 2",
        "target": "abdômen"
    },
    {
        "id": "3679",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3679.gif",
        "name": "abdominal com braços no peito",
        "target": "abdômen"
    },
    {
        "id": "3361",
        "bodyPart": "cardio",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3361.gif",
        "name": "pulos de patinador",
        "target": "cardio"
    },
    {
        "id": "2142",
        "bodyPart": "biceps/triceps",
        "equipment": "maquina SkiErg",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2142.gif",
        "name": "ergômetro de esqui",
        "target": "tríceps"
    },
    {
        "id": "3671",
        "bodyPart": "cardio",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3671.gif",
        "name": "passo de esqui",
        "target": "cardio"
    },
    {
        "id": "3304",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3304.gif",
        "name": "skin the 'cat'",
        "target": "latíssimo"
    },
    {
        "id": "1425",
        "bodyPart": "quadriceps/posterior",
        "equipment": "hack",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1425.gif",
        "name": "prensa de perna em um ângulo de 45 graus com um pé",
        "target": "glúteos"
    },
    {
        "id": "0738",
        "bodyPart": "panturrilha",
        "equipment": "hack",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0738.gif",
        "name": "elevação de panturrilha em um ângulo de 45 graus",
        "target": "panturrilha"
    },
    {
        "id": "0739",
        "bodyPart": "quadriceps/posterior",
        "equipment": "hack",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0739.gif",
        "name": "prensa de perna em um ângulo de 45 graus",
        "target": "glúteos"
    },
    {
        "id": "1464",
        "bodyPart": "quadriceps/posterior",
        "equipment": "hack",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1464.gif",
        "name": "prensa de perna em um ângulo de 45 graus (ponto de vista traseiro)",
        "target": "glúteos"
    },
    {
        "id": "1463",
        "bodyPart": "quadriceps/posterior",
        "equipment": "hack",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1463.gif",
        "name": "prensa de perna em um ângulo de 45 graus (ponto de vista lateral)",
        "target": "glúteos"
    },
    {
        "id": "0740",
        "bodyPart": "quadriceps/posterior",
        "equipment": "hack",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0740.gif",
        "name": "prensa de perna larga em um ângulo de 45 graus",
        "target": "glúteos"
    },
    {
        "id": "1391",
        "bodyPart": "panturrilha",
        "equipment": "hack",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1391.gif",
        "name": "prensa de panturrilha em um leg press",
        "target": "panturrilha"
    },
    {
        "id": "0741",
        "bodyPart": "quadriceps/posterior",
        "equipment": "hack",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0741.gif",
        "name": "agachamento hack com trenó mais próximo",
        "target": "glúteos"
    },
    {
        "id": "0742",
        "bodyPart": "panturrilha",
        "equipment": "hack",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0742.gif",
        "name": "elevação de panturrilha com ângulo para a frente",
        "target": "panturrilha"
    },
    {
        "id": "0743",
        "bodyPart": "quadriceps/posterior",
        "equipment": "hack",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0743.gif",
        "name": "agachamento hack com trenó",
        "target": "glúteos"
    },
    {
        "id": "2334",
        "bodyPart": "panturrilha",
        "equipment": "hack",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2334.gif",
        "name": "prensa de panturrilha deitado com trenó",
        "target": "panturrilha"
    },
    {
        "id": "0744",
        "bodyPart": "quadriceps/posterior",
        "equipment": "hack",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0744.gif",
        "name": "agachamento deitado com trenó",
        "target": "glúteos"
    },
    {
        "id": "1392",
        "bodyPart": "panturrilha",
        "equipment": "hack",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1392.gif",
        "name": "prensa de panturrilha de um pé em um leg press",
        "target": "panturrilha"
    },
    {
        "id": "1496",
        "bodyPart": "core",
        "equipment": "martelo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1496.gif",
        "name": "martelo de marreta",
        "target": "abdômen"
    },
    {
        "id": "0746",
        "bodyPart": "costas",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0746.gif",
        "name": "encolhimento das costas na barra fixa",
        "target": "trapézio"
    },
    {
        "id": "0747",
        "bodyPart": "ombro",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0747.gif",
        "name": "pressão por trás do pescoço na barra fixa",
        "target": "deltóides"
    },
    {
        "id": "0748",
        "bodyPart": "peito",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0748.gif",
        "name": "supino na barra fixa",
        "target": "peitoral"
    },
    {
        "id": "0749",
        "bodyPart": "quadriceps/posterior",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0749.gif",
        "name": "bom dia com joelhos dobrados na barra fixa",
        "target": "glúteos"
    },
    {
        "id": "1359",
        "bodyPart": "costas",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1359.gif",
        "name": "remada curvada na barra fixa",
        "target": "latíssimo"
    },
    {
        "id": "0750",
        "bodyPart": "quadriceps/posterior",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0750.gif",
        "name": "agachamento na cadeira na barra fixa",
        "target": "quadríceps"
    },
    {
        "id": "0751",
        "bodyPart": "biceps/triceps",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0751.gif",
        "name": "supino com pegada fechada na barra fixa",
        "target": "tríceps"
    },
    {
        "id": "0752",
        "bodyPart": "quadriceps/posterior",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0752.gif",
        "name": "levantamento terra na barra fixa",
        "target": "glúteos"
    },
    {
        "id": "0753",
        "bodyPart": "peito",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0753.gif",
        "name": "supino declinado na barra fixa",
        "target": "peitoral"
    },
    {
        "id": "0754",
        "bodyPart": "peito",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0754.gif",
        "name": "pressão reversa declinada na barra fixa",
        "target": "peitoral"
    },
    {
        "id": "1433",
        "bodyPart": "quadriceps/posterior",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1433.gif",
        "name": "agachamento frontal na barra fixa (pegada limpa)",
        "target": "glúteos"
    },
    {
        "id": "3281",
        "bodyPart": "quadriceps/posterior",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3281.gif",
        "name": "agachamento completo na barra fixa",
        "target": "glúteos"
    },
    {
        "id": "0755",
        "bodyPart": "quadriceps/posterior",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0755.gif",
        "name": "agachamento hack na barra fixa",
        "target": "glúteos"
    },
    {
        "id": "0756",
        "bodyPart": "core",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0756.gif",
        "name": "elevação de quadril na barra fixa",
        "target": "abdômen"
    },
    {
        "id": "0757",
        "bodyPart": "peito",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0757.gif",
        "name": "supino inclinado na barra fixa",
        "target": "peitoral"
    },
    {
        "id": "0758",
        "bodyPart": "peito",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0758.gif",
        "name": "pressão inclinada reversa na barra fixa",
        "target": "peitoral"
    },
    {
        "id": "0759",
        "bodyPart": "peito",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0759.gif",
        "name": "elevação lateral inclinada na barra fixa",
        "target": "serrátil"
    },
    {
        "id": "0760",
        "bodyPart": "quadriceps/posterior",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0760.gif",
        "name": "prensa de perna na barra fixa",
        "target": "glúteos"
    },
    {
        "id": "1434",
        "bodyPart": "quadriceps/posterior",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1434.gif",
        "name": "agachamento baixo na barra fixa",
        "target": "glúteos"
    },
    {
        "id": "1683",
        "bodyPart": "biceps/triceps",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1683.gif",
        "name": "rosca de bíceps na barra fixa",
        "target": "bíceps"
    },
    {
        "id": "1625",
        "bodyPart": "biceps/triceps",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1625.gif",
        "name": "supino declinado com pegada fechada na barra fixa",
        "target": "tríceps"
    },
    {
        "id": "1752",
        "bodyPart": "biceps/triceps",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1752.gif",
        "name": "extensão de tríceps na barra fixa inclinada",
        "target": "tríceps"
    },
    {
        "id": "1626",
        "bodyPart": "peito",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1626.gif",
        "name": "supino reverso declinado com pegada fechada na barra fixa",
        "target": "peitoral"
    },
    {
        "id": "0761",
        "bodyPart": "costas",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0761.gif",
        "name": "remada estreita na barra fixa",
        "target": "latíssimo"
    },
    {
        "id": "1360",
        "bodyPart": "costas",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1360.gif",
        "name": "remada unilateral na barra fixa",
        "target": "latíssimo"
    },
    {
        "id": "1393",
        "bodyPart": "panturrilha",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1393.gif",
        "name": "elevação de panturrilha de um pé no chão na barra fixa",
        "target": "panturrilha"
    },
    {
        "id": "0762",
        "bodyPart": "ombro",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0762.gif",
        "name": "remada deltóide posterior na barra fixa",
        "target": "deltóides"
    },
    {
        "id": "0763",
        "bodyPart": "panturrilha",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0763.gif",
        "name": "elevação de panturrilha reversa na barra fixa",
        "target": "panturrilha"
    },
    {
        "id": "1394",
        "bodyPart": "panturrilha",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1394.gif",
        "name": "elevação de panturrilha reversa na barra fixa",
        "target": "panturrilha"
    },
    {
        "id": "1361",
        "bodyPart": "costas",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1361.gif",
        "name": "remada curvada com pegada reversa na barra fixa",
        "target": "latíssimo"
    },
    {
        "id": "0764",
        "bodyPart": "peito",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0764.gif",
        "name": "pressão reversa na barra fixa",
        "target": "peitoral"
    },
    {
        "id": "1395",
        "bodyPart": "panturrilha",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1395.gif",
        "name": "elevação de panturrilha sentado de um pé na barra fixa",
        "target": "panturrilha"
    },
    {
        "id": "0765",
        "bodyPart": "ombro",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0765.gif",
        "name": "pressão de ombro sentado na barra fixa",
        "target": "deltóides"
    },
    {
        "id": "1426",
        "bodyPart": "antebraço",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1426.gif",
        "name": "rosca de pulso sentado na barra fixa",
        "target": "antebraços"
    },
    {
        "id": "0766",
        "bodyPart": "ombro",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0766.gif",
        "name": "pressão de ombro na barra fixa",
        "target": "deltóides"
    },
    {
        "id": "0767",
        "bodyPart": "costas",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0767.gif",
        "name": "encolhimento de ombros na barra fixa",
        "target": "trapézio"
    },
    {
        "id": "0768",
        "bodyPart": "quadriceps/posterior",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0768.gif",
        "name": "agachamento unilateral na barra fixa",
        "target": "quadríceps"
    },
    {
        "id": "0769",
        "bodyPart": "quadriceps/posterior",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0769.gif",
        "name": "afundo em corrida na barra fixa",
        "target": "glúteos"
    },
    {
        "id": "0770",
        "bodyPart": "quadriceps/posterior",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0770.gif",
        "name": "agachamento na barra fixa",
        "target": "glúteos"
    },
    {
        "id": "0771",
        "bodyPart": "antebraço",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0771.gif",
        "name": "elevação do pulso para trás em pé na barra fixa",
        "target": "antebraços"
    },
    {
        "id": "0772",
        "bodyPart": "ombro",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0772.gif",
        "name": "pressão militar atrás da cabeça em pé na barra fixa",
        "target": "deltóides"
    },
    {
        "id": "0773",
        "bodyPart": "panturrilha",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0773.gif",
        "name": "elevação de panturrilha em pé na barra fixa",
        "target": "panturrilha"
    },
    {
        "id": "0774",
        "bodyPart": "ombro",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0774.gif",
        "name": "pressão militar em pé na barra fixa",
        "target": "deltóides"
    },
    {
        "id": "3142",
        "bodyPart": "quadriceps/posterior",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3142.gif",
        "name": "agachamento sumô na barra fixa",
        "target": "glúteos"
    },
    {
        "id": "1396",
        "bodyPart": "panturrilha",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1396.gif",
        "name": "elevação de dedos na barra fixa",
        "target": "panturrilha"
    },
    {
        "id": "0775",
        "bodyPart": "ombro",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0775.gif",
        "name": "elevação frontal na barra fixa",
        "target": "deltóides"
    },
    {
        "id": "1308",
        "bodyPart": "peito",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1308.gif",
        "name": "supino com pegada larga na barra fixa",
        "target": "peitoral"
    },
    {
        "id": "1309",
        "bodyPart": "peito",
        "equipment": "maquina smith",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1309.gif",
        "name": "supino declinado com pegada larga na barra fixa",
        "target": "peitoral"
    },
    {
        "id": "0776",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0776.gif",
        "name": "puxada de arremesso",
        "target": "quadríceps"
    },
    {
        "id": "0777",
        "bodyPart": "core",
        "equipment": "halter",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0777.gif",
        "name": "lançador de feitiços",
        "target": "abdômen"
    },
    {
        "id": "1362",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1362.gif",
        "name": "esfinge",
        "target": "coluna"
    },
    {
        "id": "0778",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0778.gif",
        "name": "flexão de aranha",
        "target": "glúteos"
    },
    {
        "id": "1363",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1363.gif",
        "name": "alongamento da coluna",
        "target": "coluna"
    },
    {
        "id": "2329",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2329.gif",
        "name": "torção da coluna",
        "target": "abdômen"
    },
    {
        "id": "2368",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2368.gif",
        "name": "agachamento dividido",
        "target": "quadríceps"
    },
    {
        "id": "0786",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0786.gif",
        "name": "arranco em agachamento",
        "target": "quadríceps"
    },
    {
        "id": "1705",
        "bodyPart": "quadriceps/posterior",
        "equipment": "meia bola",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1705.gif",
        "name": "agachamento no bosu",
        "target": "quadríceps"
    },
    {
        "id": "1685",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1685.gif",
        "name": "agachamento com alcance acima da cabeça",
        "target": "quadríceps"
    },
    {
        "id": "1686",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1686.gif",
        "name": "agachamento com alcance acima da cabeça com torção",
        "target": "quadríceps"
    },
    {
        "id": "2297",
        "bodyPart": "core",
        "equipment": "bola de estabiliade",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2297.gif",
        "name": "abdominal na bola de estabilidade (amplitude total, mãos atrás da cabeça)",
        "target": "abdômen"
    },
    {
        "id": "3291",
        "bodyPart": "biceps/triceps",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3291.gif",
        "name": "prensa Stalder",
        "target": "tríceps"
    },
    {
        "id": "3669",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3669.gif",
        "name": "arqueiro em pé",
        "target": "latíssimo"
    },
    {
        "id": "0788",
        "bodyPart": "ombro",
        "equipment": "barra",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0788.gif",
        "name": "pressão por trás do pescoço em pé",
        "target": "deltóides"
    },
    {
        "id": "1490",
        "bodyPart": "panturrilha",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1490.gif",
        "name": "elevação de panturrilha em uma escadaria",
        "target": "panturrilha"
    },
    {
        "id": "1397",
        "bodyPart": "panturrilha",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1397.gif",
        "name": "elevações de panturrilha em pé",
        "target": "panturrilha"
    },
    {
        "id": "1398",
        "bodyPart": "panturrilha",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1398.gif",
        "name": "alongamento de panturrilha em pé",
        "target": "panturrilha"
    },
    {
        "id": "1599",
        "bodyPart": "quadriceps/posterior",
        "equipment": "corda naval",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1599.gif",
        "name": "alongamento de isquiotibiais e panturrilha em pé com alça",
        "target": "isquiotibiais"
    },
    {
        "id": "0794",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0794.gif",
        "name": "alongamento lateral em pé",
        "target": "dorsal"
    },
    {
        "id": "1364",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1364.gif",
        "name": "inclinação pélvica em pé",
        "target": "coluna"
    },
    {
        "id": "0795",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0795.gif",
        "name": "curl de perna em pé",
        "target": "isquiotibiais"
    },
    {
        "id": "0796",
        "bodyPart": "core",
        "equipment": "roda",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0796.gif",
        "name": "extensão de roda em pé",
        "target": "abdômen"
    },
    {
        "id": "3223",
        "bodyPart": "cardio",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3223.gif",
        "name": "salto estrela (masculino)",
        "target": "cardio"
    },
    {
        "id": "2138",
        "bodyPart": "cardio",
        "equipment": "bicicleta ergométrica",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2138.gif",
        "name": "corrida em bicicleta ergométrica versão 3",
        "target": "cardio"
    },
    {
        "id": "0798",
        "bodyPart": "cardio",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0798.gif",
        "name": "caminhada em bicicleta ergométrica",
        "target": "cardio"
    },
    {
        "id": "3314",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3314.gif",
        "name": "Maltese dividido",
        "target": "abdômen"
    },
    {
        "id": "3298",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3298.gif",
        "name": "planche dividido",
        "target": "abdômen"
    },
    {
        "id": "1427",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1427.gif",
        "name": "abdutor do quadril externo com perna estendida",
        "target": "abdutores"
    },
    {
        "id": "0803",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0803.gif",
        "name": "flexão super-homem",
        "target": "peitoral"
    },
    {
        "id": "0805",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0805.gif",
        "name": "queda abdominal suspensa",
        "target": "abdômen"
    },
    {
        "id": "0806",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0806.gif",
        "name": "flexão suspensa",
        "target": "peitoral"
    },
    {
        "id": "0807",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0807.gif",
        "name": "crunch reverso suspenso",
        "target": "abdômen"
    },
    {
        "id": "0808",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0808.gif",
        "name": "remada suspensa",
        "target": "latíssimo"
    },
    {
        "id": "0809",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0809.gif",
        "name": "agachamento suspenso",
        "target": "quadríceps"
    },
    {
        "id": "3433",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3433.gif",
        "name": "chutes de nadador versão 2 (masculino)",
        "target": "glúteos"
    },
    {
        "id": "3318",
        "bodyPart": "cardio",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3318.gif",
        "name": "giro 360",
        "target": "cardio"
    },
    {
        "id": "1753",
        "bodyPart": "biceps/triceps",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1753.gif",
        "name": "mergulho de três bancos",
        "target": "tríceps"
    },
    {
        "id": "2459",
        "bodyPart": "quadriceps/posterior",
        "equipment": "pneu",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2459.gif",
        "name": "virada de pneu",
        "target": "glúteos"
    },
    {
        "id": "0811",
        "bodyPart": "quadriceps/posterior",
        "equipment": "barra hexagonal",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0811.gif",
        "name": "levantamento terra com barra hexagonal",
        "target": "glúteos"
    },
    {
        "id": "0814",
        "bodyPart": "biceps/triceps",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0814.gif",
        "name": "mergulho de tríceps",
        "target": "tríceps"
    },
    {
        "id": "0812",
        "bodyPart": "biceps/triceps",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0812.gif",
        "name": "mergulho de tríceps (com pernas no banco)",
        "target": "tríceps"
    },
    {
        "id": "0813",
        "bodyPart": "biceps/triceps",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0813.gif",
        "name": "mergulho de tríceps (entre bancos)",
        "target": "tríceps"
    },
    {
        "id": "0815",
        "bodyPart": "biceps/triceps",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0815.gif",
        "name": "mergulhos de tríceps no chão",
        "target": "tríceps"
    },
    {
        "id": "0816",
        "bodyPart": "biceps/triceps",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0816.gif",
        "name": "pressão de tríceps",
        "target": "tríceps"
    },
    {
        "id": "0817",
        "bodyPart": "biceps/triceps",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0817.gif",
        "name": "alongamento de tríceps",
        "target": "tríceps"
    },
    {
        "id": "0871",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0871.gif",
        "name": "crunch com encolhimento",
        "target": "abdômen"
    },
    {
        "id": "0818",
        "bodyPart": "costas",
        "equipment": "cabo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0818.gif",
        "name": "puxada na barra com pegada paralela dupla",
        "target": "dorsal"
    },
    {
        "id": "1466",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1466.gif",
        "name": "levantamento de quadril com torção",
        "target": "glúteos"
    },
    {
        "id": "2802",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2802.gif",
        "name": "elevação de perna torcida",
        "target": "abdômen"
    },
    {
        "id": "2801",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2801.gif",
        "name": "elevação de perna torcida (feminino)",
        "target": "abdômen"
    },
    {
        "id": "3231",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3231.gif",
        "name": "toque em dois dedos (masculino)",
        "target": "coluna"
    },
    {
        "id": "1365",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1365.gif",
        "name": "alongamento do dorso superior",
        "target": "latíssimo"
    },
    {
        "id": "1366",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1366.gif",
        "name": "cachorro olhando para cima",
        "target": "coluna"
    },
    {
        "id": "3420",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3420.gif",
        "name": "v-sit no chão",
        "target": "abdômen"
    },
    {
        "id": "0826",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0826.gif",
        "name": "elevação de perna vertical (em barras paralelas)",
        "target": "abdômen"
    },
    {
        "id": "2141",
        "bodyPart": "cardio",
        "equipment": "",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2141.gif",
        "name": "caminhada no elíptico",
        "target": "cardio"
    },
    {
        "id": "3655",
        "bodyPart": "cardio",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3655.gif",
        "name": "passo alto de corrida",
        "target": "cardio"
    },
    {
        "id": "1460",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1460.gif",
        "name": "caminhada de passos",
        "target": "glúteos"
    },
    {
        "id": "3666",
        "bodyPart": "cardio",
        "equipment": "graviton",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3666.gif",
        "name": "caminhada na esteira inclinada",
        "target": "cardio"
    },
    {
        "id": "2311",
        "bodyPart": "cardio",
        "equipment": "escada",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2311.gif",
        "name": "caminhada na escada",
        "target": "cardio"
    },
    {
        "id": "0830",
        "bodyPart": "biceps/triceps",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0830.gif",
        "name": "mergulho no banco com peso",
        "target": "tríceps"
    },
    {
        "id": "2987",
        "bodyPart": "costas",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2987.gif",
        "name": "pull-up com pegada fechada com peso no suporte de mergulho",
        "target": "dorsal"
    },
    {
        "id": "3643",
        "bodyPart": "quadriceps/posterior",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3643.gif",
        "name": "agachamentos cossacos com peso (masculino)",
        "target": "glúteos"
    },
    {
        "id": "0832",
        "bodyPart": "core",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0832.gif",
        "name": "crunch com peso",
        "target": "abdômen"
    },
    {
        "id": "3670",
        "bodyPart": "core",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3670.gif",
        "name": "abdominal declinado com peso",
        "target": "abdômen"
    },
    {
        "id": "0833",
        "bodyPart": "panturrilha",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0833.gif",
        "name": "elevação de panturrilha de burro com peso",
        "target": "panturrilha"
    },
    {
        "id": "1310",
        "bodyPart": "peito",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1310.gif",
        "name": "flexão com queda de peso",
        "target": "peitoral"
    },
    {
        "id": "2135",
        "bodyPart": "core",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2135.gif",
        "name": "prancha frontal com peso",
        "target": "abdômen"
    },
    {
        "id": "0834",
        "bodyPart": "ombro",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0834.gif",
        "name": "elevação frontal com peso",
        "target": "deltóides"
    },
    {
        "id": "0866",
        "bodyPart": "core",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0866.gif",
        "name": "elevação de perna quadril com peso",
        "target": "abdômen"
    },
    {
        "id": "0835",
        "bodyPart": "costas",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0835.gif",
        "name": "hiperextensão com peso (no stability ball)",
        "target": "coluna"
    },
    {
        "id": "3641",
        "bodyPart": "ombro",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3641.gif",
        "name": "passo de joelho com balanço com peso",
        "target": "deltóides"
    },
    {
        "id": "3644",
        "bodyPart": "quadriceps/posterior",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3644.gif",
        "name": "passo com balanço com peso",
        "target": "glúteos"
    },
    {
        "id": "3286",
        "bodyPart": "costas",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3286.gif",
        "name": "muscle up com peso",
        "target": "dorsal"
    },
    {
        "id": "3312",
        "bodyPart": "costas",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3312.gif",
        "name": "muscle up com peso (na barra)",
        "target": "dorsal"
    },
    {
        "id": "3290",
        "bodyPart": "costas",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3290.gif",
        "name": "pull-up de um braço com peso",
        "target": "dorsal"
    },
    {
        "id": "0840",
        "bodyPart": "core",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0840.gif",
        "name": "crunch overhead com peso (no stability ball)",
        "target": "abdômen"
    },
    {
        "id": "0841",
        "bodyPart": "costas",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0841.gif",
        "name": "pull-up com peso",
        "target": "dorsal"
    },
    {
        "id": "0844",
        "bodyPart": "ombro",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0844.gif",
        "name": "round arm com peso",
        "target": "deltóides"
    },
    {
        "id": "0846",
        "bodyPart": "core",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0846.gif",
        "name": "twist russo com peso",
        "target": "abdômen"
    },
    {
        "id": "0845",
        "bodyPart": "core",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0845.gif",
        "name": "twist russo com peso (pernas levantadas)",
        "target": "abdômen"
    },
    {
        "id": "2371",
        "bodyPart": "core",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2371.gif",
        "name": "twist russo com peso versão 2",
        "target": "abdômen"
    },
    {
        "id": "0847",
        "bodyPart": "biceps/triceps",
        "equipment": "bola",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0847.gif",
        "name": "rosca de bíceps sentado com peso (no stability ball)",
        "target": "bíceps"
    },
    {
        "id": "0849",
        "bodyPart": "core",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0849.gif",
        "name": "torção sentada com peso (no stability ball)",
        "target": "abdômen"
    },
    {
        "id": "0850",
        "bodyPart": "core",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0850.gif",
        "name": "inclinação lateral com peso (no stability ball)",
        "target": "abdômen"
    },
    {
        "id": "0851",
        "bodyPart": "quadriceps/posterior",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0851.gif",
        "name": "agachamento sissy com peso",
        "target": "quadríceps"
    },
    {
        "id": "0852",
        "bodyPart": "quadriceps/posterior",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0852.gif",
        "name": "agachamento com peso",
        "target": "glúteos"
    },
    {
        "id": "0853",
        "bodyPart": "biceps/triceps",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0853.gif",
        "name": "curl em pé com peso",
        "target": "bíceps"
    },
    {
        "id": "0854",
        "bodyPart": "antebraço",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0854.gif",
        "name": "aperto de mão em pé com peso",
        "target": "antebraços"
    },
    {
        "id": "3313",
        "bodyPart": "peito",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3313.gif",
        "name": "mergulho em barra reta com peso",
        "target": "peitoral"
    },
    {
        "id": "3642",
        "bodyPart": "quadriceps/posterior",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3642.gif",
        "name": "passo alongado com peso",
        "target": "glúteos"
    },
    {
        "id": "0856",
        "bodyPart": "peito",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0856.gif",
        "name": "press de peito com peso",
        "target": "peitoral"
    },
    {
        "id": "1754",
        "bodyPart": "biceps/triceps",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1754.gif",
        "name": "mergulho de tríceps com peso",
        "target": "tríceps"
    },
    {
        "id": "1755",
        "bodyPart": "biceps/triceps",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1755.gif",
        "name": "mergulho de tríceps com peso",
        "target": "tríceps"
    },
    {
        "id": "1767",
        "bodyPart": "biceps/triceps",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1767.gif",
        "name": "mergulho de tríceps com peso em barras paralelas altas",
        "target": "tríceps"
    },
    {
        "id": "0857",
        "bodyPart": "core",
        "equipment": "roda",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0857.gif",
        "name": "rolo de pulso",
        "target": "abdômen"
    },
    {
        "id": "3637",
        "bodyPart": "cardio",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_3637.gif",
        "name": "corrida de roda",
        "target": "cardio"
    },
    {
        "id": "1429",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1429.gif",
        "name": "pull-up com pegada larga",
        "target": "dorsal"
    },
    {
        "id": "1367",
        "bodyPart": "costas",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1367.gif",
        "name": "pull-up com pegada larga na parte traseira",
        "target": "dorsal"
    },
    {
        "id": "1311",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1311.gif",
        "name": "flexão com as mãos largas",
        "target": "peitoral"
    },
    {
        "id": "2363",
        "bodyPart": "peito",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_2363.gif",
        "name": "mergulho de peito com pegada larga em barras paralelas altas",
        "target": "peitoral"
    },
    {
        "id": "0858",
        "bodyPart": "core",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0858.gif",
        "name": "sprints de vento",
        "target": "abdômen"
    },
    {
        "id": "1604",
        "bodyPart": "quadriceps/posterior",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1604.gif",
        "name": "alongamento do maior do mundo",
        "target": "isquiotibiais"
    },
    {
        "id": "1428",
        "bodyPart": "antebraço",
        "equipment": "peso do corpo",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_1428.gif",
        "name": "círculos de pulso",
        "target": "antebraços"
    },
    {
        "id": "0859",
        "bodyPart": "antebraço",
        "equipment": "anilha",
        "gifUrl": "https://xjnbjevqrawvgiesutug.supabase.co/storage/v1/object/public/exercises-demos/exercise_0859.gif",
        "name": "rolo de pulso",
        "target": "antebraços"
    }
]