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
      "gifUrl": "https://v2.exercisedb.io/image/B6hSTzQJxThpCw",
      "name": "abdominais a 3/4",
      "target": "abdômen"
  },
  {
      "id": "0002",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/ctSCHBS2jnSVEL",
      "name": "inclinação lateral a 45°",
      "target": "abdômen"
  },
  {
      "id": "0003",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/nOLT48Uc1-bOTn",
      "name": "bicicleta no ar",
      "target": "abdômen"
  },
  {
      "id": "1512",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/Qx9baq832NUFWJ",
      "name": "alongamento de agachamento em quatro apoios",
      "target": "quadríceps"
  },
  {
      "id": "0006",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/KGoVyFkkw2w7h8",
      "name": "toques alternados nos calcanhares",
      "target": "abdômen"
  },
  {
      "id": "0007",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/8staAAxZ7SU0kj",
      "name": "puxada lateral alternada",
      "target": "dorsal"
  },
  {
      "id": "1368",
      "bodyPart": "panturrilha",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/oPPuEujg--8q3b",
      "name": "círculos de tornozelo",
      "target": "panturrilha"
  },
  {
      "id": "3293",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/v7EELqyvKu2cYU",
      "name": "puxada arqueira",
      "target": "dorsal"
  },
  {
      "id": "3294",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/Ig00U3T3Nihf5y",
      "name": "flexão arqueira",
      "target": "peitoral"
  },
  {
      "id": "2355",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/ja4JiEKBtOSUJW",
      "name": "balanços de braço com pernas dobradas penduradas",
      "target": "abdômen"
  },
  {
      "id": "2333",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/78ZZv-0iAzWssn",
      "name": "balanços de braço com pernas estendidas penduradas",
      "target": "abdômen"
  },
  {
      "id": "3214",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/tHgh25EaXN-spP",
      "name": "toque circular com braços afastados nos dedos dos pés (masculino)",
      "target": "glúteos"
  },
  {
      "id": "3204",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/CmZPgVLGUJ-EI6",
      "name": "abdominais completos com os braços acima da cabeça (masculino)",
      "target": "abdômen"
  },
  {
      "id": "0009",
      "bodyPart": "peito",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/dBimVBV2fB5KjN",
      "name": "mergulho assistido no peito (ajoelhado)",
      "target": "peitoral"
  },
  {
      "id": "0011",
      "bodyPart": "core",
      "equipment": "com ajuda",
      "gifUrl": "https://v2.exercisedb.io/image/HW3QjauypbifHI",
      "name": "elevação de joelho pendurado assistido",
      "target": "abdômen"
  },
  {
      "id": "0010",
      "bodyPart": "core",
      "equipment": "com ajuda",
      "gifUrl": "https://v2.exercisedb.io/image/bum2CcnaUuu44s",
      "name": "elevação de joelho pendurado assistido com lançamento",
      "target": "abdômen"
  },
  {
      "id": "1708",
      "bodyPart": "panturrilha",
      "equipment": "com ajuda",
      "gifUrl": "https://v2.exercisedb.io/image/7hTIOg6dAo90Sg",
      "name": "alongamento de panturrilha deitado assistido",
      "target": "panturrilha"
  },
  {
      "id": "1709",
      "bodyPart": "quadriceps/posterior",
      "equipment": "com ajuda",
      "gifUrl": "https://v2.exercisedb.io/image/gAeC84L8aDW-pR",
      "name": "alongamento de glúteos deitado assistido",
      "target": "glúteos"
  },
  {
      "id": "1710",
      "bodyPart": "quadriceps/posterior",
      "equipment": "com ajuda",
      "gifUrl": "https://v2.exercisedb.io/image/3AiN-BCaudixWJ",
      "name": "alongamento de glúteos e piriforme deitado assistido",
      "target": "glúteos"
  },
  {
      "id": "0012",
      "bodyPart": "core",
      "equipment": "com ajuda",
      "gifUrl": "https://v2.exercisedb.io/image/oZYKMYqYczFmNI",
      "name": "elevação de perna deitada assistida com lançamento lateral",
      "target": "abdômen"
  },
  {
      "id": "0013",
      "bodyPart": "core",
      "equipment": "com ajuda",
      "gifUrl": "https://v2.exercisedb.io/image/O6BRCc3d1zwf9D",
      "name": "elevação de perna deitada assistida com lançamento",
      "target": "abdômen"
  },
  {
      "id": "0014",
      "bodyPart": "core",
      "equipment": "bola",
      "gifUrl": "https://v2.exercisedb.io/image/llM3Cx5DYODPAx",
      "name": "torção russa assistida",
      "target": "abdômen"
  },
  {
      "id": "0015",
      "bodyPart": "costas",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/zb55Flsq9ZVWjv",
      "name": "puxada paralela assistida de perto",
      "target": "dorsal"
  },
  {
      "id": "0016",
      "bodyPart": "quadriceps/posterior",
      "equipment": "com ajuda",
      "gifUrl": "https://v2.exercisedb.io/image/gtB5eznhy37X83",
      "name": "extensão de perna deitada assistida",
      "target": "isquiotibiais"
  },
  {
      "id": "1713",
      "bodyPart": "quadriceps/posterior",
      "equipment": "com ajuda",
      "gifUrl": "https://v2.exercisedb.io/image/Z9FsmSv7O6Qm0f",
      "name": "alongamento de quadríceps deitado assistido",
      "target": "quadríceps"
  },
  {
      "id": "1714",
      "bodyPart": "core",
      "equipment": "com ajuda",
      "gifUrl": "https://v2.exercisedb.io/image/kK8lAjj-3CMaup",
      "name": "alongamento do reto femoral deitado assistido",
      "target": "abdômen"
  },
  {
      "id": "0017",
      "bodyPart": "costas",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/H9O3v2FFhBOM2L",
      "name": "puxada assistida",
      "target": "dorsal"
  },
  {
      "id": "1716",
      "bodyPart": "peito",
      "equipment": "com ajuda",
      "gifUrl": "https://v2.exercisedb.io/image/1XULF17KDhoyB2",
      "name": "alongamento do peitoral maior sentado assistido com bola de estabilidade",
      "target": "peitoral"
  },
  {
      "id": "1712",
      "bodyPart": "quadriceps/posterior",
      "equipment": "com ajuda",
      "gifUrl": "https://v2.exercisedb.io/image/9v5aaMzY2aNIB6",
      "name": "alongamento do adutor deitado de lado assistido",
      "target": "adutores"
  },
  {
      "id": "1758",
      "bodyPart": "core",
      "equipment": "com ajuda",
      "gifUrl": "https://v2.exercisedb.io/image/QTrz7w2bBtbVtJ",
      "name": "abdominais assistidos",
      "target": "abdômen"
  },
  {
      "id": "1431",
      "bodyPart": "costas",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/-1YVGQI21Gk1Mp",
      "name": "puxada de pé assistida em pé",
      "target": "dorsal"
  },
  {
      "id": "1432",
      "bodyPart": "costas",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/7GzUz3amfgmVS2",
      "name": "puxada assistida em pé",
      "target": "dorsal"
  },
  {
      "id": "0018",
      "bodyPart": "biceps/triceps",
      "equipment": "com ajuda",
      "gifUrl": "https://v2.exercisedb.io/image/iA-B4oQWV9I5aw",
      "name": "extensão de tríceps em pé assistida (com toalha)",
      "target": "tríceps"
  },
  {
      "id": "0019",
      "bodyPart": "biceps/triceps",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/HgKSrHajaJBl4t",
      "name": "mergulho de tríceps assistido (ajoelhado)",
      "target": "tríceps"
  },
  {
      "id": "2364",
      "bodyPart": "peito",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/d-wWaRSKATigER",
      "name": "mergulho assistido largo de peito (ajoelhado)",
      "target": "peitoral"
  },
  {
      "id": "3220",
      "bodyPart": "cardio",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/can3j0gNB3LSZA",
      "name": "saltos à distância (masculino)",
      "target": "cardio"
  },
  {
      "id": "3672",
      "bodyPart": "cardio",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/T6MBbJaDa6akaJ",
      "name": "passo para trás e para frente",
      "target": "cardio"
  },
  {
      "id": "1314",
      "bodyPart": "costas",
      "equipment": "bola de estabiliade",
      "gifUrl": "https://v2.exercisedb.io/image/BhsNnB0Mn4D6Wp",
      "name": "extensão de costas na bola de exercícios",
      "target": "coluna"
  },
  {
      "id": "3297",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/tolDWDkLjwoNCq",
      "name": "alavanca para trás",
      "target": "latíssimo"
  },
  {
      "id": "1405",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/fAuPSUtbOApqSD",
      "name": "alongamento do peitoral para trás",
      "target": "dorsal"
  },
  {
      "id": "1473",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/BYkgM23QRWevbc",
      "name": "salto para trás",
      "target": "quadríceps"
  },
  {
      "id": "0020",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/RCR3Tu3ACpeMmv",
      "name": "prancha de equilíbrio",
      "target": "quadríceps"
  },
  {
      "id": "0968",
      "bodyPart": "biceps/triceps",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/cJYWMU-OQtH-RU",
      "name": "curl bíceps alternado com elástico",
      "target": "bíceps"
  },
  {
      "id": "0969",
      "bodyPart": "core",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/fWUuFEhBe4pUdF",
      "name": "v-up alternado com elástico",
      "target": "abdômen"
  },
  {
      "id": "0970",
      "bodyPart": "costas",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/mveIJ5tjkI0tl1",
      "name": "puxada assistida com elástico",
      "target": "dorsal"
  },
  {
      "id": "0971",
      "bodyPart": "core",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/w5ac3yp9WlE2EK",
      "name": "roda abdominal assistida com elástico",
      "target": "abdômen"
  },
  {
      "id": "1254",
      "bodyPart": "peito",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/gt1lr5366zDv2Z",
      "name": "supino com elástico",
      "target": "peitoral"
  },
  {
      "id": "0980",
      "bodyPart": "quadriceps/posterior",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/Rf7WjYs-NbIxkF",
      "name": "extensão de quadril inclinado com elástico",
      "target": "glúteos"
  },
  {
      "id": "0972",
      "bodyPart": "core",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/LKmV12u5IbxclL",
      "name": "crunch de bicicleta com elástico",
      "target": "abdômen"
  },
  {
      "id": "0974",
      "bodyPart": "costas",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/GxZOh6z4lAvFKX",
      "name": "puxada fechada com elástico",
      "target": "dorsal"
  },
  {
      "id": "0975",
      "bodyPart": "biceps/triceps",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/tFDhr7rjCOtx6V",
      "name": "flexão fechada com elástico",
      "target": "tríceps"
  },
  {
      "id": "0976",
      "bodyPart": "biceps/triceps",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/LIOW52WZk3ohYR",
      "name": "curl de concentração com elástico",
      "target": "bíceps"
  },
  {
      "id": "3117",
      "bodyPart": "costas",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/J8-MQoDbnRMPSz",
      "name": "puxada fechada com elástico com as costas fixas",
      "target": "dorsal"
  },
  {
      "id": "3116",
      "bodyPart": "costas",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/cMvimLB6x2DK-n",
      "name": "puxada invertida com elástico com as costas fixas",
      "target": "dorsal"
  },
  {
      "id": "0977",
      "bodyPart": "ombro",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/ccJWac5uBtqOND",
      "name": "elevação lateral frontal com elástico",
      "target": "deltóides"
  },
  {
      "id": "0978",
      "bodyPart": "ombro",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/C9w05AeZRl9bBR",
      "name": "elevação frontal com elástico",
      "target": "deltóides"
  },
  {
      "id": "1408",
      "bodyPart": "quadriceps/posterior",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/1mmnWrfI6Rs95Z",
      "name": "elevação de quadril com elástico",
      "target": "glúteos"
  },
  {
      "id": "0979",
      "bodyPart": "core",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/lzxAHV1BNhTIAW",
      "name": "pressão de Pallof horizontal com elástico",
      "target": "abdômen"
  },
  {
      "id": "0981",
      "bodyPart": "core",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/aLVJoW1WtgecEq",
      "name": "abdominal jack knife com elástico",
      "target": "abdômen"
  },
  {
      "id": "0983",
      "bodyPart": "costas",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/YISNYwuetW5TuQ",
      "name": "puxada unilateral de joelho ajoelhado com elástico",
      "target": "dorsal"
  },
  {
      "id": "0985",
      "bodyPart": "core",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/Chv1AbUJVG5S6H",
      "name": "crunch torcional ajoelhado com elástico",
      "target": "abdômen"
  },
  {
      "id": "0984",
      "bodyPart": "quadriceps/posterior",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/OLJYMbu7P-zTRh",
      "name": "rotação interna do quadril deitado com elástico",
      "target": "glúteos"
  },
  {
      "id": "1002",
      "bodyPart": "core",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/xxr7VR-7Fu9A-1",
      "name": "elevação de perna estendida deitada com elástico",
      "target": "abdômen"
  },
  {
      "id": "0986",
      "bodyPart": "biceps/triceps",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/pttz1hjeUgGRVH",
      "name": "curl de bíceps unilateral acima da cabeça com elástico",
      "target": "bíceps"
  },
  {
      "id": "0987",
      "bodyPart": "quadriceps/posterior",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/2XTPxNOGq817wF",
      "name": "agachamento unilateral com elástico",
      "target": "quadríceps"
  },
  {
      "id": "0988",
      "bodyPart": "costas",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/zZcnn94K64v3Ky",
      "name": "remada unilateral em pé com elástico",
      "target": "latíssimo"
  },
  {
      "id": "0989",
      "bodyPart": "peito",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/dPD5qoy9UsXdWO",
      "name": "flexão de peito torcida unilateral com elástico",
      "target": "peitoral"
  },
  {
      "id": "0990",
      "bodyPart": "costas",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/1TvmZAUvW4-H8B",
      "name": "remada sentada torcida unilateral com elástico",
      "target": "latíssimo"
  },
  {
      "id": "0991",
      "bodyPart": "quadriceps/posterior",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/vM8xbahJchqYlA",
      "name": "pull through com elástico",
      "target": "glúteos"
  },
  {
      "id": "0992",
      "bodyPart": "core",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/V-kjhJN7PIyWwu",
      "name": "abdominal com pressão com elástico",
      "target": "abdômen"
  },
  {
      "id": "0993",
      "bodyPart": "ombro",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/oJ-iRJ-hz-ji4R",
      "name": "elevação lateral reversa com elástico",
      "target": "deltóides"
  },
  {
      "id": "0994",
      "bodyPart": "antebraço",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/siHblmj2dic053",
      "name": "curl de pulso reverso com elástico",
      "target": "antebraços"
  },
  {
      "id": "0996",
      "bodyPart": "quadriceps/posterior",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/IVynBKFKESA-2G",
      "name": "rotação interna do quadril sentado com elástico",
      "target": "glúteos"
  },
  {
      "id": "1011",
      "bodyPart": "core",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/pPeOTwVJTi0V1Z",
      "name": "torção sentada com elástico",
      "target": "abdômen"
  },
  {
      "id": "0997",
      "bodyPart": "ombro",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/cuRb4VSOdBdBz9",
      "name": "elevação de ombro com elástico",
      "target": "deltóides"
  },
  {
      "id": "1018",
      "bodyPart": "costas",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/jF8ep3YNvm4UvM",
      "name": "encolhimento de ombros com elástico",
      "target": "trapézio"
  },
  {
      "id": "0998",
      "bodyPart": "biceps/triceps",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/buYdDW3WIV4Jtk",
      "name": "extensão de tríceps lateral com elástico",
      "target": "tríceps"
  },
  {
      "id": "0999",
      "bodyPart": "panturrilha",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/rJNohFMEk8FM4m",
      "name": "elevação de panturrilha unilateral com elástico",
      "target": "panturrilha"
  },
  {
      "id": "1000",
      "bodyPart": "panturrilha",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/e5QA2kZ1Bi2OT-",
      "name": "elevação de panturrilha unilateral invertida com elástico",
      "target": "panturrilha"
  },
  {
      "id": "1001",
      "bodyPart": "quadriceps/posterior",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/LgQfxzSx1gY0vK",
      "name": "agachamento unilateral com elástico",
      "target": "quadríceps"
  },
  {
      "id": "1004",
      "bodyPart": "quadriceps/posterior",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/ymjOpT4SPwUsli",
      "name": "agachamento com elástico",
      "target": "glúteos"
  },
  {
      "id": "1003",
      "bodyPart": "quadriceps/posterior",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/neAhptjnvZ65LK",
      "name": "remada com agachamento com elástico",
      "target": "glúteos"
  },
  {
      "id": "1005",
      "bodyPart": "core",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/9vC8QFDuYPhI33",
      "name": "crunch em pé com elástico",
      "target": "abdômen"
  },
  {
      "id": "1022",
      "bodyPart": "ombro",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/u047QYFNFIsF1N",
      "name": "remada deltóide posterior em pé com elástico",
      "target": "deltóides"
  },
  {
      "id": "1007",
      "bodyPart": "core",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/mJzxE--ybtNCrs",
      "name": "crunch torcional em pé com elástico",
      "target": "abdômen"
  },
  {
      "id": "1008",
      "bodyPart": "quadriceps/posterior",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/cehZdxXchWaJ4f",
      "name": "step-up com elástico",
      "target": "glúteos"
  },
  {
      "id": "1009",
      "bodyPart": "quadriceps/posterior",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/nOriX6NGZHBzyL",
      "name": "stiff leg deadlift com elástico",
      "target": "glúteos"
  },
  {
      "id": "1023",
      "bodyPart": "quadriceps/posterior",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/x0ZAjzREe3muPJ",
      "name": "stiff leg deadlift com as costas retas com elástico",
      "target": "glúteos"
  },
  {
      "id": "1010",
      "bodyPart": "costas",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/mooqpXfuIf5FiU",
      "name": "deadlift com perna reta com elástico",
      "target": "coluna"
  },
  {
      "id": "1012",
      "bodyPart": "ombro",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/Aaj1Q4RVDxAwIg",
      "name": "flexão torcional overhead com elástico",
      "target": "deltóides"
  },
  {
      "id": "1369",
      "bodyPart": "panturrilha",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/QoEm10FNiOnkrd",
      "name": "elevação de panturrilha com duas pernas com elástico",
      "target": "panturrilha"
  },
  {
      "id": "1013",
      "bodyPart": "costas",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/OPtudkOKQhXehg",
      "name": "puxada invertida com elástico",
      "target": "dorsal"
  },
  {
      "id": "1014",
      "bodyPart": "core",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/AkyRZVJCGXBnP2",
      "name": "v-up com elástico",
      "target": "abdômen"
  },
  {
      "id": "1015",
      "bodyPart": "core",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/ffaNb4xN-ZWPqm",
      "name": "pressão de Pallof vertical com elástico",
      "target": "abdômen"
  },
  {
      "id": "1016",
      "bodyPart": "antebraço",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/MHQAgxH32hogrL",
      "name": "curl de pulso com elástico",
      "target": "antebraços"
  },
  {
      "id": "1017",
      "bodyPart": "ombro",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/2mK5FtYUcM1U1E",
      "name": "elevação em Y com elástico",
      "target": "deltóides"
  },
  {
      "id": "0023",
      "bodyPart": "biceps/triceps",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/6n1MYNdIhFCtQv",
      "name": "curl bíceps alternado com barra",
      "target": "bíceps"
  },
  {
      "id": "0024",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/Oxlat1e5VpqnvK",
      "name": "agachamento frontal no banco com barra",
      "target": "quadríceps"
  },
  {
      "id": "0025",
      "bodyPart": "peito",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/2tbAuBeo6NUHY1",
      "name": "supino com barra",
      "target": "peitoral"
  },
  {
      "id": "0026",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/QIWuwSWJ-PEYI0",
      "name": "agachamento no banco com barra",
      "target": "quadríceps"
  },
  {
      "id": "1316",
      "bodyPart": "costas",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/iuJ76Z0DsYAeVe",
      "name": "Pullover com barra de braço dobrado",
      "target": "dorsal"
  },
  {
      "id": "0027",
      "bodyPart": "costas",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/wqjJ4kctt8xVmI",
      "name": "Remada curvada com barra",
      "target": "latíssimo"
  },
  {
      "id": "2407",
      "bodyPart": "biceps/triceps",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/NhWE6jhg45faRf",
      "name": "Rosca de bíceps com barra (com suporte de braço)",
      "target": "bíceps"
  },
  {
      "id": "0028",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/7qf1sktuJ0fGTe",
      "name": "Limpeza e pressão com barra",
      "target": "quadríceps"
  },
  {
      "id": "0029",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/TifqW9l5GMlrCO",
      "name": "Agachamento frontal com pegada limpa de barra",
      "target": "glúteos"
  },
  {
      "id": "0030",
      "bodyPart": "biceps/triceps",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/r-TJ7CofWDsY1e",
      "name": "Supino com pegada fechada de barra",
      "target": "tríceps"
  },
  {
      "id": "0031",
      "bodyPart": "biceps/triceps",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/yNydKf-P9ugEBI",
      "name": "Rosca com barra",
      "target": "bíceps"
  },
  {
      "id": "0032",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/KF2MZ5FKTB4X2Z",
      "name": "Levantamento terra com barra",
      "target": "glúteos"
  },
  {
      "id": "0033",
      "bodyPart": "peito",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/IfgS5iyMLMTvml",
      "name": "Supino declinado com barra",
      "target": "peitoral"
  },
  {
      "id": "0034",
      "bodyPart": "costas",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/9D0Dm7MYsTe405",
      "name": "Pullover declinado com barra de braço dobrado",
      "target": "dorsal"
  },
  {
      "id": "0035",
      "bodyPart": "biceps/triceps",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/oy-aBYCeBHnmVJ",
      "name": "Pressão de crânio com pegada fechada declinada de barra",
      "target": "tríceps"
  },
  {
      "id": "1255",
      "bodyPart": "peito",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/NIhW1-9LTY8t3G",
      "name": "Pullover declinado com barra",
      "target": "peitoral"
  },
  {
      "id": "0036",
      "bodyPart": "peito",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/EsGnaYVxjfLjJw",
      "name": "Pressão declinada com pegada larga de barra",
      "target": "peitoral"
  },
  {
      "id": "0037",
      "bodyPart": "costas",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/Xp8gOXXS0yIT2a",
      "name": "Pullover declinado com pegada larga de barra",
      "target": "dorsal"
  },
  {
      "id": "0038",
      "bodyPart": "biceps/triceps",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/BI6yVBJ2XUqmmf",
      "name": "Rosca inversa com barra",
      "target": "bíceps"
  },
  {
      "id": "1370",
      "bodyPart": "panturrilha",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/A7Ayxy8M3d1WY1",
      "name": "Elevação de panturrilha no chão com barra",
      "target": "panturrilha"
  },
  {
      "id": "0039",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/zvG39KKRDmARx6",
      "name": "Agachamento frontal no peito com barra",
      "target": "glúteos"
  },
  {
      "id": "0041",
      "bodyPart": "ombro",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/rpZBhf8uENVOz6",
      "name": "Elevação frontal com barra",
      "target": "deltóides"
  },
  {
      "id": "0040",
      "bodyPart": "peito",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/aerWDtY8EbCXjb",
      "name": "Elevação frontal com barra e pullover",
      "target": "peitoral"
  },
  {
      "id": "0042",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/LuoboPiUF0NjjK",
      "name": "Agachamento frontal com barra",
      "target": "glúteos"
  },
  {
      "id": "0043",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/rl2Q7yKtenuCMn",
      "name": "Agachamento completo com barra",
      "target": "glúteos"
  },
  {
      "id": "1461",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/s46xDjDZpyVIQS",
      "name": "Agachamento completo com barra (ponto de vista traseiro)",
      "target": "glúteos"
  },
  {
      "id": "1462",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/FmsVvoWl9wTeKl",
      "name": "Agachamento completo com barra (ponto de vista lateral)",
      "target": "glúteos"
  },
  {
      "id": "1545",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/od9ZvGxuDerlPa",
      "name": "Agachamento zercher completo com barra",
      "target": "glúteos"
  },
  {
      "id": "1409",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/6BUiwFpywEPRxB",
      "name": "Ponte de glúteos com barra",
      "target": "glúteos"
  },
  {
      "id": "3562",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/unOo0OgPC8qwPU",
      "name": "Ponte de glúteos com barra em duas pernas no banco (masculino)",
      "target": "glúteos"
  },
  {
      "id": "0044",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/zEoIG2BiUlM0is",
      "name": "Bom dia com barra",
      "target": "isquiotibiais"
  },
  {
      "id": "0045",
      "bodyPart": "peito",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/WDqD7mVCkGVBdO",
      "name": "Supino guilhotina com barra",
      "target": "peitoral"
  },
  {
      "id": "0046",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/ZQ63bYE4rk5IO6",
      "name": "Agachamento hack com barra",
      "target": "glúteos"
  },
  {
      "id": "1436",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/irLFoh6m7BdwgM",
      "name": "Agachamento alto com barra",
      "target": "glúteos"
  },
  {
      "id": "0047",
      "bodyPart": "peito",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/QawMHGqEfXhKkh",
      "name": "Supino inclinado com barra",
      "target": "peitoral"
  },
  {
      "id": "1719",
      "bodyPart": "biceps/triceps",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/g2iYvz2M7iQhZJ",
      "name": "Supino inclinado com pegada fechada com barra",
      "target": "tríceps"
  },
  {
      "id": "0048",
      "bodyPart": "biceps/triceps",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/XGrPArCcrxNwc6",
      "name": "Pressão reversa inclinada com barra",
      "target": "tríceps"
  },
  {
      "id": "0049",
      "bodyPart": "costas",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/sXrOQrmkJweaUP",
      "name": "Remada inclinada com barra",
      "target": "latíssimo"
  },
  {
      "id": "0050",
      "bodyPart": "peito",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/zvFQk0-kpPrwtw",
      "name": "Elevação de ombros inclinada com barra",
      "target": "serrátil"
  },
  {
      "id": "0051",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/Z9iJflV2Bk8xFZ",
      "name": "Agachamento Jefferson com barra",
      "target": "glúteos"
  },
  {
      "id": "0052",
      "bodyPart": "biceps/triceps",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/3ZJ5MJFbBvCcqe",
      "name": "Supino JM com barra",
      "target": "tríceps"
  },
  {
      "id": "0053",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/ZmKd-6IumSAXIi",
      "name": "Agachamento com salto com barra",
      "target": "glúteos"
  },
  {
      "id": "1410",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/wvP9z0WUobfGoI",
      "name": "Afundo lateral com barra",
      "target": "glúteos"
  },
  {
      "id": "1435",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/heDP5BSOevOSbP",
      "name": "Agachamento baixo com barra",
      "target": "glúteos"
  },
  {
      "id": "0054",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/tutR2q35LHwysu",
      "name": "Afundo com barra",
      "target": "glúteos"
  },
  {
      "id": "1720",
      "bodyPart": "biceps/triceps",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/UyVVVCC5E7rk28",
      "name": "Extensão de tríceps deitado com barra atrás da cabeça",
      "target": "tríceps"
  },
  {
      "id": "0055",
      "bodyPart": "biceps/triceps",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/rx8IbGLV4h3L9t",
      "name": "Pressão fechada deitada com barra",
      "target": "tríceps"
  },
  {
      "id": "0056",
      "bodyPart": "biceps/triceps",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/bOQ6T8uERYUY1q",
      "name": "Extensão de tríceps fechada deitada com barra",
      "target": "tríceps"
  },
  {
      "id": "0057",
      "bodyPart": "biceps/triceps",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/SS76JQTFsiFCYd",
      "name": "Extensão deitada com barra",
      "target": "tríceps"
  },
  {
      "id": "0058",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/8hNRS9CPaTqQMT",
      "name": "Levantamento deitado (no quadril) com barra",
      "target": "glúteos"
  },
  {
      "id": "0059",
      "bodyPart": "biceps/triceps",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/EZmsjxiinzXXxN",
      "name": "Rosca preacher deitada com barra",
      "target": "bíceps"
  },
  {
      "id": "0061",
      "bodyPart": "biceps/triceps",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/m0kePYWHbJlRex",
      "name": "Extensão de tríceps deitada com barra",
      "target": "tríceps"
  },
  {
      "id": "0060",
      "bodyPart": "biceps/triceps",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/XkjbJk4GbfADH1",
      "name": "Extensão de tríceps deitada com barra (crânio)",
      "target": "tríceps"
  },
  {
      "id": "0063",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/1XYmiUePnT9-jr",
      "name": "Agachamento com barra de estreitamento",
      "target": "glúteos"
  },
  {
      "id": "0064",
      "bodyPart": "costas",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/u4aARh7gdr92KY",
      "name": "Remada unilateral com barra",
      "target": "latíssimo"
  },
  {
      "id": "0065",
      "bodyPart": "biceps/triceps",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/DK17kISUhsHGK1",
      "name": "Supino unilateral no chão com barra",
      "target": "tríceps"
  },
  {
      "id": "0066",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/rvcdFiHYKJwZAy",
      "name": "Levantamento lateral unilateral com barra",
      "target": "glúteos"
  },
  {
      "id": "0067",
      "bodyPart": "ombro",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/bqLxBxuAyzyA8B",
      "name": "Snatch unilateral com barra",
      "target": "deltóides"
  },
  {
      "id": "0068",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/pEqXnTf68TfhMK",
      "name": "Agachamento unilateral com barra",
      "target": "quadríceps"
  },
  {
      "id": "0069",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/AI44RE4FpcFBVS",
      "name": "Agachamento acima da cabeça com barra",
      "target": "quadríceps"
  },
  {
      "id": "1411",
      "bodyPart": "antebraço",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/70NfwLvsafpS6m",
      "name": "Curl de pulso com palmas para baixo com barra em um banco",
      "target": "antebraços"
  },
  {
      "id": "1412",
      "bodyPart": "antebraço",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/cTj7qSJrA-IpTR",
      "name": "Curl de pulso com palmas para cima com barra em um banco",
      "target": "antebraços"
  },
  {
      "id": "3017",
      "bodyPart": "costas",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/V6wSFO01YD6TGI",
      "name": "Remada Pendlay com barra",
      "target": "latíssimo"
  },
  {
      "id": "1751",
      "bodyPart": "biceps/triceps",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/09xIGxCkR2Zsc2",
      "name": "Pressões de pino com barra",
      "target": "tríceps"
  },
  {
      "id": "0070",
      "bodyPart": "biceps/triceps",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/qEBSGA4HHbzH4v",
      "name": "Rosca preacher com barra",
      "target": "bíceps"
  },
  {
      "id": "0071",
      "bodyPart": "core",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/zBvrgoa2pMgWJT",
      "name": "Abdominal com pressão de barra",
      "target": "abdômen"
  },
  {
      "id": "0072",
      "bodyPart": "biceps/triceps",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/vKNjDSc5ob-8m3",
      "name": "Curl inclinado deitado com barra",
      "target": "bíceps"
  },
  {
      "id": "0073",
      "bodyPart": "costas",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/ihA42KLG9WCz5E",
      "name": "Pullover com barra",
      "target": "dorsal"
  },
  {
      "id": "0022",
      "bodyPart": "costas",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/2YGJ1Fxq2-miIY",
      "name": "Pullover para pressão com barra",
      "target": "dorsal"
  },
  {
      "id": "0074",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/ofVrmkpbLjyn1n",
      "name": "Puxada na barra de apoio",
      "target": "glúteos"
  },
  {
      "id": "0075",
      "bodyPart": "ombro",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/lN6zNv933wIgCD",
      "name": "Elevação lateral do deltóide com barra",
      "target": "deltóides"
  },
  {
      "id": "0076",
      "bodyPart": "ombro",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/TSlGohnT7fyZjv",
      "name": "Remada lateral do deltóide com barra",
      "target": "deltóides"
  },
  {
      "id": "0078",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/HPjBxUAzitZpmY",
      "name": "Afundo reverso com barra",
      "target": "glúteos"
  },
  {
      "id": "0077",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/ayHRy5VnyTfCKy",
      "name": "Afundo reverso com barra v. 2",
      "target": "glúteos"
  },
  {
      "id": "0079",
      "bodyPart": "antebraço",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/QGAtFeiL78dKON",
      "name": "Curl reverso de pulso v. 2 com barra",
      "target": "antebraços"
  },
  {
      "id": "2187",
      "bodyPart": "biceps/triceps",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/42sSLk46E4knWH",
      "name": "Supino inclinado com pegada fechada reversa com barra",
      "target": "tríceps"
  },
  {
      "id": "0080",
      "bodyPart": "biceps/triceps",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/UUoHYe7PU05SLd",
      "name": "Curl reverso com barra",
      "target": "bíceps"
  },
  {
      "id": "0118",
      "bodyPart": "costas",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/PfPsRX7qllyP6m",
      "name": "Remada curvada com pegada reversa com barra",
      "target": "latíssimo"
  },
  {
      "id": "1256",
      "bodyPart": "peito",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/2wIz7fPR2aRhpA",
      "name": "Supino declinado com pegada reversa com barra",
      "target": "peitoral"
  },
  {
      "id": "1257",
      "bodyPart": "peito",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/I2AYrwFYQoI7le",
      "name": "Supino inclinado com pegada reversa com barra",
      "target": "peitoral"
  },
  {
      "id": "1317",
      "bodyPart": "costas",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/lDnzkqYSqzIDdL",
      "name": "Remada inclinada com pegada reversa com barra",
      "target": "latíssimo"
  },
  {
      "id": "1721",
      "bodyPart": "biceps/triceps",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/QO84cnRiSiJsBt",
      "name": "Skullcrusher com pegada reversa com barra",
      "target": "tríceps"
  },
  {
      "id": "0081",
      "bodyPart": "biceps/triceps",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/f-tjBJW33hwxk6",
      "name": "Curl preacher com pegada reversa com barra",
      "target": "bíceps"
  },
  {
      "id": "0082",
      "bodyPart": "antebraço",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/xUDGgZ-EYha5gS",
      "name": "Curl de pulso reverso com barra",
      "target": "antebraços"
  },
  {
      "id": "0084",
      "bodyPart": "core",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/DdU2IzZejNKNdk",
      "name": "Rolamento com barra",
      "target": "abdômen"
  },
  {
      "id": "0083",
      "bodyPart": "core",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/wx-0ygDBoEng1s",
      "name": "Rolamento com barra a partir do banco",
      "target": "abdômen"
  },
  {
      "id": "0085",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/0wHJrVy-JxXFXw",
      "name": "Levantamento romeno com barra",
      "target": "glúteos"
  },
  {
      "id": "0086",
      "bodyPart": "ombro",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/tWB5BVMkwWOVSS",
      "name": "Pressão militar atrás da cabeça com barra sentado",
      "target": "deltóides"
  },
  {
      "id": "0087",
      "bodyPart": "ombro",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/upq0EZDQZR7mGJ",
      "name": "Pressão militar de Bradford com barra sentado",
      "target": "deltóides"
  },
  {
      "id": "0088",
      "bodyPart": "panturrilha",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/-9iXaaiYhJBq25",
      "name": "Elevação de panturrilha sentado com barra",
      "target": "panturrilha"
  },
  {
      "id": "1371",
      "bodyPart": "panturrilha",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/z6JrsnvqXL0SSb",
      "name": "Elevação de panturrilha sentado com barra",
      "target": "panturrilha"
  },
  {
      "id": "1718",
      "bodyPart": "biceps/triceps",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/upmdBfRYoApRiM",
      "name": "Extensão de tríceps com pegada fechada atrás do pescoço sentado com barra",
      "target": "tríceps"
  },
  {
      "id": "0089",
      "bodyPart": "biceps/triceps",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/80JSQaDzNYiM0L",
      "name": "Curl de concentração com pegada fechada sentado com barra",
      "target": "bíceps"
  },
  {
      "id": "0090",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/9iW8Gdfee4G55C",
      "name": "Bom dia sentado com barra",
      "target": "glúteos"
  },
  {
      "id": "0091",
      "bodyPart": "ombro",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/CqnzQiFLeYvGtq",
      "name": "Pressão aérea sentado com barra",
      "target": "deltóides"
  },
  {
      "id": "0092",
      "bodyPart": "biceps/triceps",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/LpDPVE9Q676MGe",
      "name": "Extensão de tríceps aérea sentado com barra",
      "target": "tríceps"
  },
  {
      "id": "0094",
      "bodyPart": "core",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/LSF5wfu-17nhZR",
      "name": "Torção sentado com barra",
      "target": "abdômen"
  },
  {
      "id": "0095",
      "bodyPart": "costas",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/vYQyNF4sUTplCL",
      "name": "Encolhimento de ombros com barra",
      "target": "trapézio"
  },
  {
      "id": "0096",
      "bodyPart": "core",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/Uh8nspTh7bkufw",
      "name": "Inclinação lateral com barra v. 2",
      "target": "abdômen"
  },
  {
      "id": "0098",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/RMj9I2Am3ksFYJ",
      "name": "Agachamento lateral com barra",
      "target": "quadríceps"
  },
  {
      "id": "0097",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/LoCN79hDbNoQ64",
      "name": "Agachamento lateral com barra v. 2",
      "target": "quadríceps"
  },
  {
      "id": "1756",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/SndT7FMqcWfGvW",
      "name": "Levantamento unilateral com barra",
      "target": "glúteos"
  },
  {
      "id": "0099",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/p11qslZjEcHvX2",
      "name": "Afundo unilateral com barra",
      "target": "quadríceps"
  },
  {
      "id": "2799",
      "bodyPart": "core",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/SGT6QP3zp0YdX1",
      "name": "Elevação de perna alternada sentado com barra",
      "target": "abdômen"
  },
  {
      "id": "2800",
      "bodyPart": "core",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/WykH3hAJExAn3b",
      "name": "Elevação alternada de perna sentado com barra (feminino)",
      "target": "abdômen"
  },
  {
      "id": "0100",
      "bodyPart": "ombro",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/Flb4qAkCkcZcM5",
      "name": "Esquiador com barra",
      "target": "deltóides"
  },
  {
      "id": "0101",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/L1g8UW0rMX7zoc",
      "name": "Agachamento rápido com barra",
      "target": "glúteos"
  },
  {
      "id": "2810",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/5ai1STHdVhOceh",
      "name": "Afundo com barra v. 2",
      "target": "quadríceps"
  },
  {
      "id": "0102",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/P3BuYeLALwIlis",
      "name": "Agachamento com barra (de joelhos)",
      "target": "quadríceps"
  },
  {
      "id": "2798",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/4GGOvfyU2oHDA3",
      "name": "Salto de agachamento com barra e avanço para trás",
      "target": "quadríceps"
  },
  {
      "id": "0103",
      "bodyPart": "core",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/b6pSgC3-6iQQ2K",
      "name": "Rolamento abdominal em pé com barra",
      "target": "abdômen"
  },
  {
      "id": "0104",
      "bodyPart": "antebraço",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/SiGe3bLn7f1BzY",
      "name": "Rosca de pulso em pé com barra",
      "target": "antebraços"
  },
  {
      "id": "0105",
      "bodyPart": "ombro",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/FlO8mofrC7xlcQ",
      "name": "Pressão militar Bradford em pé com barra",
      "target": "deltóides"
  },
  {
      "id": "1372",
      "bodyPart": "panturrilha",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/V4KwMgv-G8-H9L",
      "name": "Elevação de panturrilha em pé com barra",
      "target": "panturrilha"
  },
  {
      "id": "0106",
      "bodyPart": "biceps/triceps",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/PezEQP4o5JM806",
      "name": "Rosca em pé com pegada fechada com barra",
      "target": "bíceps"
  },
  {
      "id": "1456",
      "bodyPart": "ombro",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/JQASbiU0NxikoL",
      "name": "Pressão militar com pegada fechada em pé com barra",
      "target": "deltóides"
  },
  {
      "id": "2414",
      "bodyPart": "biceps/triceps",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/PqbJlQ9RBWIzZT",
      "name": "Rosca concentrada em pé com barra",
      "target": "bíceps"
  },
  {
      "id": "0107",
      "bodyPart": "ombro",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/AC2vV7N5U9KTwS",
      "name": "Elevação frontal sobre a cabeça em pé com barra",
      "target": "deltóides"
  },
  {
      "id": "0108",
      "bodyPart": "panturrilha",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/1xxUiX4ctsTekF",
      "name": "Elevação de panturrilha em pé com barra",
      "target": "panturrilha"
  },
  {
      "id": "0109",
      "bodyPart": "biceps/triceps",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/Yh9BEdzEIAEedt",
      "name": "Extensão de tríceps acima da cabeça em pé com barra",
      "target": "tríceps"
  },
  {
      "id": "0110",
      "bodyPart": "biceps/triceps",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/XCl9RCloWVO81m",
      "name": "Rosca reversa em pé com barra",
      "target": "bíceps"
  },
  {
      "id": "0111",
      "bodyPart": "panturrilha",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/Npd6X5B5TtN8T8",
      "name": "Elevação de panturrilha alternada com balanço em pé com barra",
      "target": "panturrilha"
  },
  {
      "id": "0112",
      "bodyPart": "core",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/fbtP4n59f1tNo3",
      "name": "Torção em pé com barra",
      "target": "abdômen"
  },
  {
      "id": "1629",
      "bodyPart": "biceps/triceps",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/lYg2ne-4ZehjEj",
      "name": "Rosca de bíceps ampla em pé com barra",
      "target": "bíceps"
  },
  {
      "id": "1457",
      "bodyPart": "ombro",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/VCWjauFGNXEuDB",
      "name": "Pressão militar ampla em pé com barra",
      "target": "deltóides"
  },
  {
      "id": "0113",
      "bodyPart": "biceps/triceps",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/V15wapLl5dG320",
      "name": "Rosca ampla em pé com barra",
      "target": "bíceps"
  },
  {
      "id": "0114",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/JDndSRlHV8QTqA",
      "name": "Step-up com barra",
      "target": "glúteos"
  },
  {
      "id": "0115",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/ynayyiX2Xg2qor",
      "name": "Bom dia com pernas esticadas com barra",
      "target": "glúteos"
  },
  {
      "id": "0116",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/eGm2Hq2LcWKXz5",
      "name": "Levantamento de peso morto com pernas esticadas com barra",
      "target": "isquiotibiais"
  },
  {
      "id": "0117",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/MV9ApYRQlOoKKe",
      "name": "Levantamento sumo com barra",
      "target": "glúteos"
  },
  {
      "id": "3305",
      "bodyPart": "ombro",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/6EG0fM6KTKfCAs",
      "name": "Pressão com barra",
      "target": "deltóides"
  },
  {
      "id": "0120",
      "bodyPart": "ombro",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/GN2GLj5zgoQ-af",
      "name": "Elevação lateral com barra",
      "target": "deltóides"
  },
  {
      "id": "0119",
      "bodyPart": "ombro",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/2fnNaIaif5YxvM",
      "name": "Elevação lateral com barra v. 2",
      "target": "deltóides"
  },
  {
      "id": "0121",
      "bodyPart": "ombro",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/vpi6CD9CI8VTQ9",
      "name": "Elevação lateral com barra v. 3",
      "target": "deltóides"
  },
  {
      "id": "0122",
      "bodyPart": "peito",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/IDedKeSahk5UBn",
      "name": "Supino largo com barra",
      "target": "peitoral"
  },
  {
      "id": "1258",
      "bodyPart": "peito",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/Ye3DUbDaTYn3VA",
      "name": "Supino com pegada reversa larga com barra",
      "target": "peitoral"
  },
  {
      "id": "0124",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/wpVrwrqwp2jVOT",
      "name": "Agachamento largo com barra",
      "target": "quadríceps"
  },
  {
      "id": "0123",
      "bodyPart": "ombro",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/sFNGH9U4HdJxqI",
      "name": "Elevação lateral ampla com barra",
      "target": "deltóides"
  },
  {
      "id": "0126",
      "bodyPart": "antebraço",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/USeeuFAsvJtP7H",
      "name": "Curl de pulso com barra",
      "target": "antebraços"
  },
  {
      "id": "0125",
      "bodyPart": "antebraço",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/GR6srFIlQ8PRAo",
      "name": "Curl de pulso com barra v. 2",
      "target": "antebraços"
  },
  {
      "id": "0127",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/y-hV2JWE3TJ9n5",
      "name": "Agachamento zercher com barra",
      "target": "glúteos"
  },
  {
      "id": "3212",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/bTLZohXaQ3xsTf",
      "name": "Toque básico nos dedos dos pés (masculino)",
      "target": "glúteos"
  },
  {
      "id": "0128",
      "bodyPart": "ombro",
      "equipment": "corda naval",
      "gifUrl": "https://v2.exercisedb.io/image/29bS9g965gLIL6",
      "name": "Corda de batalha",
      "target": "deltóides"
  },
  {
      "id": "3360",
      "bodyPart": "cardio",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/YFpUfzO8ZrxDjl",
      "name": "Rastejar de urso",
      "target": "cardio"
  },
  {
      "id": "1259",
      "bodyPart": "peito",
      "equipment": "com ajuda",
      "gifUrl": "https://v2.exercisedb.io/image/xAe95r71h7snRh",
      "name": "Alongamento do peitoral por trás da cabeça",
      "target": "peitoral"
  },
  {
      "id": "0129",
      "bodyPart": "biceps/triceps",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/AhdZmUPMSapGBb",
      "name": "Mergulho no banco (joelhos dobrados)",
      "target": "tríceps"
  },
  {
      "id": "1399",
      "bodyPart": "biceps/triceps",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/nvzwZ4BNDVbPiq",
      "name": "Mergulho no chão",
      "target": "tríceps"
  },
  {
      "id": "0130",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/M7A9Atuc9HeV48",
      "name": "Extensão de quadril no banco",
      "target": "glúteos"
  },
  {
      "id": "3019",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/yGyohYVYgUNM0o",
      "name": "Puxada no banco",
      "target": "dorsal"
  },
  {
      "id": "3639",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/dz2R9MsXKJVdCa",
      "name": "Torção deitado com joelhos dobrados (masculino)",
      "target": "glúteos"
  },
  {
      "id": "1770",
      "bodyPart": "biceps/triceps",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/qCvWESmnqwbenC",
      "name": "Rosca de bíceps concentrada na perna",
      "target": "bíceps"
  },
  {
      "id": "0139",
      "bodyPart": "biceps/triceps",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/vkCllmx8-fPZzj",
      "name": "Puxada estreita no banco",
      "target": "bíceps"
  },
  {
      "id": "0140",
      "bodyPart": "biceps/triceps",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/xkV3649aKggpFs",
      "name": "Puxada de bíceps",
      "target": "bíceps"
  },
  {
      "id": "0137",
      "bodyPart": "biceps/triceps",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/ePQmgPjsHNv8qL",
      "name": "Levantamento corporal",
      "target": "tríceps"
  },
  {
      "id": "3543",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/yV7XRREdJLM6Ih",
      "name": "Agachamento de salto com peso corporal",
      "target": "glúteos"
  },
  {
      "id": "3544",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/31CJ7XriYNUgNh",
      "name": "Prancha lateral inclinada com peso corporal",
      "target": "abdômen"
  },
  {
      "id": "1771",
      "bodyPart": "biceps/triceps",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/i8d9RYanTxtaU6",
      "name": "Extensão de tríceps ajoelhado com peso corporal",
      "target": "tríceps"
  },
  {
      "id": "1769",
      "bodyPart": "biceps/triceps",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/mUFpjxmSnCWUSD",
      "name": "Rosca de bíceps deitado com peso corporal",
      "target": "bíceps"
  },
  {
      "id": "3168",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/Xfj-EH74uqcFjS",
      "name": "Remada com peso corporal",
      "target": "latíssimo"
  },
  {
      "id": "3167",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/Umb45lIdJnxBzi",
      "name": "Remada com peso corporal (com toalha)",
      "target": "latíssimo"
  },
  {
      "id": "1373",
      "bodyPart": "panturrilha",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/iXBMFPpkRrDy4M",
      "name": "Elevação de panturrilha em pé com peso corporal",
      "target": "panturrilha"
  },
  {
      "id": "3156",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/E3Y2QfYWe-wk5i",
      "name": "Remada unilateral de pegada fechada em pé com peso corporal",
      "target": "latíssimo"
  },
  {
      "id": "3158",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/45p0hCW4sDaZwG",
      "name": "Remada de pegada fechada em pé com peso corporal",
      "target": "latíssimo"
  },
  {
      "id": "3162",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/Ydycdr2krSIRIR",
      "name": "Remada unilateral em pé com peso corporal",
      "target": "latíssimo"
  },
  {
      "id": "3161",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/2afzqiHL7Gvxz9",
      "name": "Remada unilateral em pé com peso corporal (com toalha)",
      "target": "latíssimo"
  },
  {
      "id": "3166",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/BTDfwwC9vg8gzO",
      "name": "Remada em pé com peso corporal",
      "target": "latíssimo"
  },
  {
      "id": "3165",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/-W2d7BfPXxcfE5",
      "name": "Remada em pé com peso corporal (com toalha)",
      "target": "latíssimo"
  },
  {
      "id": "0138",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/kUJ-olLfesyaP3",
      "name": "Levantamento de perna",
      "target": "abdômen"
  },
  {
      "id": "1374",
      "bodyPart": "panturrilha",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/DEic9vvNCd6qfj",
      "name": "Salto na caixa com estabilização de uma perna",
      "target": "panturrilha"
  },
  {
      "id": "2466",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/wIHt7DGKE-ZigP",
      "name": "Ponte",
      "target": "abdômen"
  },
  {
      "id": "1160",
      "bodyPart": "cardio",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/97HrTd3kjy9ZMs",
      "name": "Burpee",
      "target": "cardio"
  },
  {
      "id": "0870",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/PL9UFcmuNSQd5y",
      "name": "Elevação de quadril",
      "target": "abdômen"
  },
  {
      "id": "1494",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/hwV4B2CD0EKfXN",
      "name": "Pose de yoga borboleta",
      "target": "adutores"
  },
  {
      "id": "0148",
      "bodyPart": "ombro",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/201ilo5p7u65WS",
      "name": "Pressão alternada de ombros com cabo",
      "target": "deltóides"
  },
  {
      "id": "0149",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/U1Z6zcyT9ZtQNA",
      "name": "Extensão alternada de tríceps com cabo",
      "target": "tríceps"
  },
  {
      "id": "3235",
      "bodyPart": "quadriceps/posterior",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/eFjArdUubjU8I5",
      "name": "Flexão inversa de perna com cabo assistido",
      "target": "isquiotibiais"
  },
  {
      "id": "0150",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/bgEtd5lgsbi1bD",
      "name": "Puxada lateral com cabo para barra",
      "target": "dorsal"
  },
  {
      "id": "0151",
      "bodyPart": "peito",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/qcpyOaI2XVH4v3",
      "name": "Supino com cabo",
      "target": "peitoral"
  },
  {
      "id": "1630",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/zkqv5R1j5GZvrA",
      "name": "Rosca fechada com cabo",
      "target": "bíceps"
  },
  {
      "id": "1631",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/ARUsomWUQvs4WQ",
      "name": "Rosca concentrada com cabo",
      "target": "bíceps"
  },
  {
      "id": "0152",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/3-4mRnaxo3iMqK",
      "name": "Extensão concentrada com cabo (no joelho)",
      "target": "tríceps"
  },
  {
      "id": "0153",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/0sYWM4Py6dsVMo",
      "name": "Puxada lateral cruzada com cabo",
      "target": "dorsal"
  },
  {
      "id": "0154",
      "bodyPart": "ombro",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/vjXPH7Trst5IWk",
      "name": "Elevação lateral cruzada com cabo",
      "target": "deltóides"
  },
  {
      "id": "0155",
      "bodyPart": "peito",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/6AQbaz6zmgjj76",
      "name": "Variação cruzada com cabo",
      "target": "peitoral"
  },
  {
      "id": "0868",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/5vPX3QPsdNMrGO",
      "name": "Rosca com cabo",
      "target": "bíceps"
  },
  {
      "id": "0157",
      "bodyPart": "quadriceps/posterior",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/IwqlVyNp68MGQE",
      "name": "Levantamento de peso morto com cabo",
      "target": "glúteos"
  },
  {
      "id": "0158",
      "bodyPart": "peito",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/p8B2BZjzSNOTx8",
      "name": "Supino declinado com cabo",
      "target": "peitoral"
  },
  {
      "id": "1260",
      "bodyPart": "peito",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/D-SlsgQsoPrnTs",
      "name": "Supino declinado unilateral com cabo",
      "target": "peitoral"
  },
  {
      "id": "1261",
      "bodyPart": "peito",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/ja6lK91QserI0y",
      "name": "Supino declinado com cabo",
      "target": "peitoral"
  },
  {
      "id": "0159",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/EFabH1xXoXH5EA",
      "name": "Remada ampla sentado com cabo inclinado",
      "target": "latíssimo"
  },
  {
      "id": "1632",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/H4Sob84nAgzJyw",
      "name": "Rosca de arrasto com cabo",
      "target": "bíceps"
  },
  {
      "id": "0160",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/4vRab88rt8vroV",
      "name": "Remada ampla sentado com cabo no chão",
      "target": "latíssimo"
  },
  {
      "id": "0161",
      "bodyPart": "ombro",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/ROVhnlWPyweHR2",
      "name": "Elevação frontal com cabo",
      "target": "deltóides"
  },
  {
      "id": "0162",
      "bodyPart": "ombro",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/b2b3S4YKwqn4uF",
      "name": "Elevação frontal com cabo",
      "target": "deltóides"
  },
  {
      "id": "0164",
      "bodyPart": "ombro",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/d0lJYd5o9RjaHF",
      "name": "Elevação frontal com cabo",
      "target": "deltóides"
  },
  {
      "id": "0165",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/M0PdKWwR9s8R6S",
      "name": "Rosca martelo com cabo (com corda)",
      "target": "bíceps"
  },
  {
      "id": "1722",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/ohIiO9uUpuNN2e",
      "name": "Extensão de tríceps com cabo alto sobre a cabeça",
      "target": "tríceps"
  },
  {
      "id": "0167",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/GbxD1ZKCKpXj3R",
      "name": "Remada alta com cabo (ajoelhado)",
      "target": "latíssimo"
  },
  {
      "id": "0168",
      "bodyPart": "quadriceps/posterior",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/QWG6Jv0Xax6Asu",
      "name": "Adução de quadril com cabo",
      "target": "adutores"
  },
  {
      "id": "0169",
      "bodyPart": "peito",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/uV0ppPHS1cnLW0",
      "name": "Supino inclinado com cabo",
      "target": "peitoral"
  },
  {
      "id": "1318",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/ziWaqFtBgBAy1o",
      "name": "Remada inclinada com cabo",
      "target": "latíssimo"
  },
  {
      "id": "0171",
      "bodyPart": "peito",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/kcbly4by8rL1D8",
      "name": "Supino inclinado com cabo",
      "target": "peitoral"
  },
  {
      "id": "0170",
      "bodyPart": "peito",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/illwjGrCDb72OQ",
      "name": "Supino inclinado com cabo (na bola de estabilidade)",
      "target": "peitoral"
  },
  {
      "id": "0172",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/oNs5IZ5qpLmG9j",
      "name": "Extensão inclinada de tríceps com cabo",
      "target": "dorsal"
  },
  {
      "id": "0173",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/QoI1eqT8ZXlbnT",
      "name": "Extensão de tríceps inclinado com cabo",
      "target": "tríceps"
  },
  {
      "id": "0174",
      "bodyPart": "core",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/HKiKhljVM3gVZ7",
      "name": "Virada de judô com cabo",
      "target": "abdômen"
  },
  {
      "id": "0860",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/2PWqleLdjRD7Gf",
      "name": "Chute com cabo",
      "target": "tríceps"
  },
  {
      "id": "0175",
      "bodyPart": "core",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/-eDNhcBTni3JRL",
      "name": "Abdominal ajoelhado com cabo",
      "target": "abdômen"
  },
  {
      "id": "3697",
      "bodyPart": "ombro",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/VX6K1RMG4eWW9q",
      "name": "Remada traseira ajoelhada com cabo (com corda) (masculino)",
      "target": "deltóides"
  },
  {
      "id": "0176",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/X3RvTHc7rKhlqA",
      "name": "Extensão de tríceps ajoelhado com cabo",
      "target": "tríceps"
  },
  {
      "id": "2330",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/F3A1Jiz9CXCYzV",
      "name": "Puxada de lat com cabo em toda a amplitude de movimento",
      "target": "dorsal"
  },
  {
      "id": "0177",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/bCMAypaXCXq60h",
      "name": "Puxada lateral com cabo (com acessório de corda)",
      "target": "dorsal"
  },
  {
      "id": "2616",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/Zma1Jk1lypRILk",
      "name": "Puxada lateral com cabo e barra em V",
      "target": "dorsal"
  },
  {
      "id": "0178",
      "bodyPart": "ombro",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/2HELkSq5nCZIRa",
      "name": "Elevação lateral com cabo",
      "target": "deltóides"
  },
  {
      "id": "0179",
      "bodyPart": "peito",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/0l27W3MYlLVXuw",
      "name": "Fly baixo com cabo",
      "target": "peitoral"
  },
  {
      "id": "0180",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/tBECbNQUiLh5WC",
      "name": "Remada sentado baixo com cabo",
      "target": "latíssimo"
  },
  {
      "id": "1634",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/qLEuaX2JMMJPgs",
      "name": "Rosca de bíceps deitado com cabo",
      "target": "bíceps"
  },
  {
      "id": "0182",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/iRrPJbwR3MiYbW",
      "name": "Rosca fechada deitado com cabo",
      "target": "bíceps"
  },
  {
      "id": "0184",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/4bhkmZjvwS1T7X",
      "name": "Extensão pullover deitado com cabo (com acessório de corda)",
      "target": "dorsal"
  },
  {
      "id": "0185",
      "bodyPart": "peito",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/GT2XeZzX8YeifH",
      "name": "Fly deitado com cabo",
      "target": "peitoral"
  },
  {
      "id": "0186",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/OghhxE1tggg1Cy",
      "name": "Extensão de tríceps deitado v. 2 com cabo",
      "target": "tríceps"
  },
  {
      "id": "0188",
      "bodyPart": "peito",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/MB7gtPCgfZ-KRM",
      "name": "Fly médio com cabo",
      "target": "peitoral"
  },
  {
      "id": "0189",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/1WniaFIVBbjxBd",
      "name": "Remada unilateral com cabo",
      "target": "latíssimo"
  },
  {
      "id": "0190",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/jUtbPdn7kOUtcQ",
      "name": "Rosca unilateral com cabo",
      "target": "bíceps"
  },
  {
      "id": "1262",
      "bodyPart": "peito",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/cme-1b21WG5hDB",
      "name": "Fly unilateral declinado com cabo",
      "target": "peitoral"
  },
  {
      "id": "1263",
      "bodyPart": "peito",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/qSu5wKvCfLcUuB",
      "name": "Fly unilateral com cabo na bola de exercícios",
      "target": "peitoral"
  },
  {
      "id": "1264",
      "bodyPart": "peito",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/M8h4-sWjAcGpcH",
      "name": "Fly inclinado unilateral com cabo na bola de exercícios",
      "target": "peitoral"
  },
  {
      "id": "1265",
      "bodyPart": "peito",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/hYndVIHHwrWvGD",
      "name": "Pressão inclinada unilateral com cabo",
      "target": "peitoral"
  },
  {
      "id": "1266",
      "bodyPart": "peito",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/9ZHBoPjbXFCHiq",
      "name": "Pressão inclinada unilateral com cabo na bola de exercícios",
      "target": "peitoral"
  },
  {
      "id": "0191",
      "bodyPart": "peito",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/jPya2MUcPx8sce",
      "name": "Elevação lateral unilateral inclinada",
      "target": "peitoral"
  },
  {
      "id": "0192",
      "bodyPart": "ombro",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/-4EVo1N-olarm-",
      "name": "Elevação lateral unilateral com cabo",
      "target": "deltóides"
  },
  {
      "id": "1633",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/FhJleDS2ecN785",
      "name": "Rosca unilateral concentrada com cabo",
      "target": "bíceps"
  },
  {
      "id": "1267",
      "bodyPart": "peito",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/Gg-7JajhY3P8oF",
      "name": "Pressão unilateral com cabo na bola de exercícios",
      "target": "peitoral"
  },
  {
      "id": "3563",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/cLX731jdAMaJkt",
      "name": "Puxada unilateral com cabo",
      "target": "dorsal"
  },
  {
      "id": "1635",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/CLWw3VdcX8jOsV",
      "name": "Rosca inversa unilateral com cabo",
      "target": "bíceps"
  },
  {
      "id": "0193",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/Ket32pMHi1G63i",
      "name": "Remada alta unilateral reta para trás com cabo (ajoelhado)",
      "target": "latíssimo"
  },
  {
      "id": "1723",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/2qbR2yazRRRO3e",
      "name": "Pushdown de tríceps unilateral com cabo",
      "target": "tríceps"
  },
  {
      "id": "1636",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/xomMEHyH3N0f32",
      "name": "Rosca overhead com cabo",
      "target": "bíceps"
  },
  {
      "id": "1637",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/OnEttBSeBtylBd",
      "name": "Rosca overhead com cabo na bola de exercícios",
      "target": "bíceps"
  },
  {
      "id": "0194",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/DpoV3V1R1V6d-H",
      "name": "Extensão de tríceps overhead com cabo (acessório de corda)",
      "target": "tríceps"
  },
  {
      "id": "1319",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/ZUde5LoeWHErsr",
      "name": "Remada rotacional de palma com cabo",
      "target": "latíssimo"
  },
  {
      "id": "0195",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/rGGxiV-R9tKFj7",
      "name": "Rosca concentrada com cabo",
      "target": "bíceps"
  },
  {
      "id": "1268",
      "bodyPart": "peito",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/lj6zkjVekVvdUg",
      "name": "Pressão com cabo na bola de exercícios",
      "target": "peitoral"
  },
  {
      "id": "0196",
      "bodyPart": "quadriceps/posterior",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/7nHrW6ToaZzq5O",
      "name": "Puxada com cabo (com acessório de corda)",
      "target": "glúteos"
  },
  {
      "id": "0198",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/HZDO1SwA2RKMDb",
      "name": "Puxada com cabo",
      "target": "dorsal"
  },
  {
      "id": "0197",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/3Z5kdHxLjde9Hi",
      "name": "Puxada com cabo (com barra reta)",
      "target": "dorsal"
  },
  {
      "id": "1638",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/M5zniXmjUSfG00",
      "name": "Puxada de bíceps com cabo",
      "target": "bíceps"
  },
  {
      "id": "0201",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/I5-0gL4btrXdfV",
      "name": "Pushdown com cabo",
      "target": "tríceps"
  },
  {
      "id": "0199",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/IIjbnRNSKUkSvY",
      "name": "Pushdown com cabo (braço reto) v. 2",
      "target": "dorsal"
  },
  {
      "id": "0200",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/J8HK8TJ52L8iR4",
      "name": "Pushdown com cabo (com acessório de corda)",
      "target": "tríceps"
  },
  {
      "id": "0202",
      "bodyPart": "ombro",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/T7r5xx5iOPfrZ8",
      "name": "Remada de deltoides traseiro com cabo (puxadores)",
      "target": "deltóides"
  },
  {
      "id": "0203",
      "bodyPart": "ombro",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/ToD8t-YJ56Yo5c",
      "name": "Remada de deltoides traseiro com cabo (com corda)",
      "target": "deltóides"
  },
  {
      "id": "0204",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/9W5G7lPxS9-HXq",
      "name": "Condução traseira com cabo",
      "target": "tríceps"
  },
  {
      "id": "0205",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/7AAa-L7bY3PSsj",
      "name": "Puxada traseira com cabo",
      "target": "dorsal"
  },
  {
      "id": "0873",
      "bodyPart": "core",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/h9MZPwJYFJBgAM",
      "name": "Crunch reverso com cabo",
      "target": "abdômen"
  },
  {
      "id": "0206",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/8WaVghOak9wnaf",
      "name": "Rosca reversa com cabo",
      "target": "bíceps"
  },
  {
      "id": "2406",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/AngFhIcJhHMlIZ",
      "name": "Pushdown com pegada reversa e cabo (barra SZ) (com elástico de braço)",
      "target": "tríceps"
  },
  {
      "id": "1413",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/Q3YBCV4djRcjDV",
      "name": "Rosca unilateral reversa com cabo",
      "target": "bíceps"
  },
  {
      "id": "0209",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/rLpPhMXMV0hYm6",
      "name": "Rosca inversa com cabo",
      "target": "bíceps"
  },
  {
      "id": "0210",
      "bodyPart": "antebraço",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/JViBB0Uc0XEVyV",
      "name": "Curl de pulso reverso com cabo",
      "target": "antebraços"
  },
  {
      "id": "0207",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/twi7CxPTSk0fkD",
      "name": "Pushdown com cabo e pegada reversa",
      "target": "tríceps"
  },
  {
      "id": "0208",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/9rshISQuUmWVQ2",
      "name": "Remada alta sentado com cabo e pegada reversa",
      "target": "latíssimo"
  },
  {
      "id": "1320",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/skmuDsqws2Z2LN",
      "name": "Remada sentado com cabo cruzado",
      "target": "latíssimo"
  },
  {
      "id": "1321",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/UtBoL7XLHh7PlO",
      "name": "Remada sentado com cabo elevado",
      "target": "latíssimo"
  },
  {
      "id": "1322",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/bOtk1S9lBjuZXU",
      "name": "Extensão de tríceps inclinado com cabo na bancada",
      "target": "latíssimo"
  },
  {
      "id": "1639",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/DJsQht-tFWZ82I",
      "name": "Rosca martelo com cabo",
      "target": "bíceps"
  },
  {
      "id": "1724",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/R7roPm6y6TitLF",
      "name": "Extensão de tríceps overhead com cabo alto",
      "target": "tríceps"
  },
  {
      "id": "1725",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/AUzUod6711YVrs",
      "name": "Extensão de tríceps inclinado com cabo",
      "target": "tríceps"
  },
  {
      "id": "1726",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/7EG2CfJ1XnaLME",
      "name": "Extensão de tríceps deitado com cabo no chão",
      "target": "tríceps"
  },
  {
      "id": "1640",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/ks9zILbrMciCOZ",
      "name": "Rosca martelo unilateral com cabo",
      "target": "bíceps"
  },
  {
      "id": "1323",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/0xWZzBTeIuF0r7",
      "name": "Remada sentado com cabo",
      "target": "latíssimo"
  },
  {
      "id": "0211",
      "bodyPart": "core",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/vqusmQKa6R4rx1",
      "name": "Torção russa com cabo (na bola de estabilidade)",
      "target": "abdômen"
  },
  {
      "id": "2144",
      "bodyPart": "peito",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/nMwRrIlICkN8Ua",
      "name": "Pressão peitoral sentado com cabo",
      "target": "peitoral"
  },
  {
      "id": "0212",
      "bodyPart": "core",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/e-zNwqYUJPdkI1",
      "name": "Abdominal sentado com cabo",
      "target": "abdômen"
  },
  {
      "id": "1641",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/foSEg1Wec36QuI",
      "name": "Rosca sentado com cabo",
      "target": "bíceps"
  },
  {
      "id": "0213",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/zMmaIWl6Q0fjdh",
      "name": "Remada alta sentado com cabo (em V)",
      "target": "dorsal"
  },
  {
      "id": "0214",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/JFTnyWnF0FkrLv",
      "name": "Remada alternada unilateral sentado com cabo",
      "target": "latíssimo"
  },
  {
      "id": "1642",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/1w5ulEeO0nOjAc",
      "name": "Rosca concentrada unilateral sentado com cabo",
      "target": "bíceps"
  },
  {
      "id": "1643",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/7ApiR5TY3CjdFi",
      "name": "Rosca overhead sentado com cabo",
      "target": "bíceps"
  },
  {
      "id": "0215",
      "bodyPart": "ombro",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/-54nfApUqYciMG",
      "name": "Elevação lateral traseira sentado com cabo",
      "target": "deltóides"
  },
  {
      "id": "0861",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/kp-2gxKPJq7L75",
      "name": "Remada sentado com cabo",
      "target": "latíssimo"
  },
  {
      "id": "0216",
      "bodyPart": "ombro",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/ul6V1nxLcaeDp4",
      "name": "Rotação interna do ombro sentado com cabo",
      "target": "deltóides"
  },
  {
      "id": "2399",
      "bodyPart": "core",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/2FvsaPiCpMMypj",
      "name": "Torção sentado com cabo",
      "target": "abdômen"
  },
  {
      "id": "0218",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/eLu-ZAmoxhyGrF",
      "name": "Remada larga sentado com cabo",
      "target": "latíssimo"
  },
  {
      "id": "0219",
      "bodyPart": "ombro",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/1ToCGiPyOXjwNM",
      "name": "Pressão de ombro com cabo",
      "target": "deltóides"
  },
  {
      "id": "0220",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/eybE4SNgkSe59M",
      "name": "Encolhimento de ombros com cabo",
      "target": "trapézio"
  },
  {
      "id": "0222",
      "bodyPart": "core",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/Y5fF3miNKq1GXb",
      "name": "Flexão lateral com cabo",
      "target": "abdômen"
  },
  {
      "id": "0221",
      "bodyPart": "core",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/esObWoryVlhL8p",
      "name": "Crunch com flexão lateral com cabo (bola bosu)",
      "target": "abdômen"
  },
  {
      "id": "0223",
      "bodyPart": "core",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/ctJd8nv9ijfjcY",
      "name": "Crunch lateral com cabo",
      "target": "abdômen"
  },
  {
      "id": "1717",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/xEw1fRgc47Zjos",
      "name": "Remada com agachamento com cabo (com acessório de corda)",
      "target": "dorsal"
  },
  {
      "id": "1644",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/yaJM6o8luaikrC",
      "name": "Rosca agachado com cabo",
      "target": "bíceps"
  },
  {
      "id": "0224",
      "bodyPart": "antebraço",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/3SgNvBFcKFIPAt",
      "name": "Rosca de pulso em pé com cabo",
      "target": "antebraços"
  },
  {
      "id": "1375",
      "bodyPart": "panturrilha",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/cVVsjlLo43f1v0",
      "name": "Elevação de panturrilha em pé com cabo",
      "target": "panturrilha"
  },
  {
      "id": "0225",
      "bodyPart": "ombro",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/joFfHdgbPvyOT8",
      "name": "Elevação lateral traseira alta em pé com cabo",
      "target": "deltóides"
  },
  {
      "id": "0226",
      "bodyPart": "core",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/Z910BiJ2paNwfi",
      "name": "Crunch em pé com cabo",
      "target": "abdômen"
  },
  {
      "id": "0874",
      "bodyPart": "core",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/dZ-q4l5BzppSHd",
      "name": "Crunch em pé com cabo (com acessório de corda)",
      "target": "abdômen"
  },
  {
      "id": "0227",
      "bodyPart": "peito",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/4w0xwkojUhRWQ0",
      "name": "Fly em pé com cabo",
      "target": "peitoral"
  },
  {
      "id": "0228",
      "bodyPart": "quadriceps/posterior",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/w2AOlfbB3rsJ2J",
      "name": "Extensão do quadril em pé com cabo",
      "target": "glúteos"
  },
  {
      "id": "0229",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/BmonqhZTU2USFJ",
      "name": "Rosca interna em pé com cabo",
      "target": "bíceps"
  },
  {
      "id": "0230",
      "bodyPart": "core",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/562iEDiowzMIjb",
      "name": "Elevação em pé com cabo",
      "target": "abdômen"
  },
  {
      "id": "0231",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/wXDZamvRUY1RWk",
      "name": "Extensão de tríceps unilateral em pé com cabo",
      "target": "tríceps"
  },
  {
      "id": "1376",
      "bodyPart": "panturrilha",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/-j5jZiI4oI8wKF",
      "name": "Elevação de panturrilha unilateral em pé com cabo",
      "target": "panturrilha"
  },
  {
      "id": "0232",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/gp7zITiXXG4Pxc",
      "name": "Puxada em pé com cabo (com acessório de corda)",
      "target": "bíceps"
  },
  {
      "id": "0233",
      "bodyPart": "ombro",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/694NDHg837eUhK",
      "name": "Remada traseira em pé com cabo (com corda)",
      "target": "deltóides"
  },
  {
      "id": "1727",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/xiuMz4cZU4fcQZ",
      "name": "Extensão de tríceps overhead unilateral com cabo e pegada reversa",
      "target": "tríceps"
  },
  {
      "id": "0234",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/aNo-vvaY9kGFAH",
      "name": "Remada em pé com cabo (em V)",
      "target": "latíssimo"
  },
  {
      "id": "0235",
      "bodyPart": "ombro",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/P7WHJKSuk-D19i",
      "name": "Rotação externa do ombro em pé com cabo",
      "target": "deltóides"
  },
  {
      "id": "0236",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/og7Nf5p2ulBDn0",
      "name": "Remada em pé com torção (em V)",
      "target": "latíssimo"
  },
  {
      "id": "1269",
      "bodyPart": "peito",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/C3Ofx-4FE4VkV5",
      "name": "Cruzamento reto em pé com cabo",
      "target": "peitoral"
  },
  {
      "id": "0238",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/O9AB9K78enD902",
      "name": "Pulldown com braço reto com cabo",
      "target": "dorsal"
  },
  {
      "id": "0237",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/CGD8qABqMNwcDD",
      "name": "Pulldown com braço reto com cabo (com acessório de corda)",
      "target": "dorsal"
  },
  {
      "id": "0239",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/YferfF8FFuvVsf",
      "name": "Remada sentado com cabo",
      "target": "latíssimo"
  },
  {
      "id": "0240",
      "bodyPart": "ombro",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/vKggWu71zvaVs9",
      "name": "Fly traseiro supino com cabo",
      "target": "deltóides"
  },
  {
      "id": "2464",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/QihxiEjiXmQw7k",
      "name": "Remada de caiaque com cabo Thibaudeau",
      "target": "dorsal"
  },
  {
      "id": "0241",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/WfHFEN-kriIc-n",
      "name": "Pushdown de tríceps com V-barra com cabo",
      "target": "tríceps"
  },
  {
      "id": "2405",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/nxFk20FY04Ze5s",
      "name": "Pushdown de tríceps com V-barra com cabo (com elástico de braço)",
      "target": "tríceps"
  },
  {
      "id": "0242",
      "bodyPart": "core",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/6pELSoygfW0e1i",
      "name": "Crunch reverso com cabo",
      "target": "abdômen"
  },
  {
      "id": "0243",
      "bodyPart": "core",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/Nf9g7cDZm9rTrp",
      "name": "Torção com cabo",
      "target": "abdômen"
  },
  {
      "id": "0862",
      "bodyPart": "core",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/O6jZq5KbHAivGF",
      "name": "Torção com cabo (de cima para baixo)",
      "target": "abdômen"
  },
  {
      "id": "0244",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/ZFvrJ9Lf6FJ3xT",
      "name": "Puxada com torção com cabo",
      "target": "dorsal"
  },
  {
      "id": "1645",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/XMS6P4dhtHoGsg",
      "name": "Rosca bilateral deitada no banco inclinado com cabo",
      "target": "bíceps"
  },
  {
      "id": "1728",
      "bodyPart": "biceps/triceps",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/mgaK5wGK-L7GQZ",
      "name": "Kickback de tríceps bilateral com cabo",
      "target": "tríceps"
  },
  {
      "id": "0245",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/NII9W1gwYHXFaA",
      "name": "Pulldown com pegada supinada com cabo",
      "target": "dorsal"
  },
  {
      "id": "1270",
      "bodyPart": "peito",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/oQXYlBZP1WQZhz",
      "name": "Cruzamento superior do peito com cabo",
      "target": "peitoral"
  },
  {
      "id": "1324",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/SoFwDgIS9PX98A",
      "name": "Remada alta com cabo",
      "target": "latíssimo"
  },
  {
      "id": "0246",
      "bodyPart": "ombro",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/oBW-d66L7SQI-J",
      "name": "Remada alta com cabo em pé",
      "target": "deltóides"
  },
  {
      "id": "1325",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/R8qnRgdjFd9fNG",
      "name": "Puxada traseira ampla com cabo atrás do pescoço",
      "target": "dorsal"
  },
  {
      "id": "0247",
      "bodyPart": "antebraço",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/7dsieE3p3-GZf5",
      "name": "Rosca de pulso com cabo",
      "target": "antebraços"
  },
  {
      "id": "1407",
      "bodyPart": "panturrilha",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/yw7M8vd1CjRkwx",
      "name": "Alongamento do empurrão de panturrilha com mãos na parede",
      "target": "panturrilha"
  },
  {
      "id": "1377",
      "bodyPart": "panturrilha",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/GKb2fGGnu0vBON",
      "name": "Alongamento de panturrilha com mãos na parede",
      "target": "panturrilha"
  },
  {
      "id": "1378",
      "bodyPart": "panturrilha",
      "equipment": "corda naval",
      "gifUrl": "https://v2.exercisedb.io/image/erWF3QeNFwRgb7",
      "name": "Alongamento de panturrilha com cabo",
      "target": "panturrilha"
  },
  {
      "id": "0248",
      "bodyPart": "costas",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/aclEQuGLjktzWi",
      "name": "Remada deitado com barra curvada",
      "target": "latíssimo"
  },
  {
      "id": "2963",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/xWHGiq7T44AUhq",
      "name": "Elevação de perna reta na cadeira do capitão",
      "target": "abdômen"
  },
  {
      "id": "1548",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/RWPFqwcdUFrLI5",
      "name": "Alongamento com perna estendida na cadeira",
      "target": "quadríceps"
  },
  {
      "id": "1271",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/A3WVCc4vhCm5TU",
      "name": "Alongamento do peito e frente do ombro",
      "target": "peitoral"
  },
  {
      "id": "0251",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/m-jDKwvBOhSZ9H",
      "name": "Flexão de tronco",
      "target": "peitoral"
  },
  {
      "id": "1430",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/yENdj07S3Z0qUW",
      "name": "Flexão de tronco (no suporte de flexão e barra)",
      "target": "peitoral"
  },
  {
      "id": "2462",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/zsSwyYHk0TydHL",
      "name": "Flexão de tronco na barra reta",
      "target": "peitoral"
  },
  {
      "id": "1272",
      "bodyPart": "peito",
      "equipment": "bola de estabiliade",
      "gifUrl": "https://v2.exercisedb.io/image/SqqFS8WAowjsdX",
      "name": "Alongamento do peito com bola de exercícios",
      "target": "peitoral"
  },
  {
      "id": "3216",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/kzs68SB9uaZw6f",
      "name": "Flexão com toque no peito (masculino)",
      "target": "peitoral"
  },
  {
      "id": "1326",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/EpInsPFwAsRQg8",
      "name": "Chin-up",
      "target": "dorsal"
  },
  {
      "id": "0253",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/r46xVjyY1mJisO",
      "name": "Chin-ups (pegada paralela estreita)",
      "target": "latíssimo"
  },
  {
      "id": "0257",
      "bodyPart": "panturrilha",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/3oFvS5GMfB7uRM",
      "name": "Alongamento do joelho em círculos",
      "target": "panturrilha"
  },
  {
      "id": "1273",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/WTDcKHcQYrn7PB",
      "name": "Flexão com palmas das mãos",
      "target": "peitoral"
  },
  {
      "id": "0258",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/SUWdt7S3dt-4-B",
      "name": "Flexão em círculos",
      "target": "peitoral"
  },
  {
      "id": "1327",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/6LYEvGIzijFjUW",
      "name": "Chin-up com pegada fechada",
      "target": "dorsal"
  },
  {
      "id": "0259",
      "bodyPart": "biceps/triceps",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/ctXEuLjRx69EEF",
      "name": "Flexão com pegada fechada",
      "target": "tríceps"
  },
  {
      "id": "2398",
      "bodyPart": "biceps/triceps",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/DKSLXcLWgFtYSw",
      "name": "Flexão com pegada fechada (de joelhos)",
      "target": "tríceps"
  },
  {
      "id": "0260",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/scFgixoXeKItxU",
      "name": "Casulos",
      "target": "abdômen"
  },
  {
      "id": "1468",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/GOpY8D4BECKa9s",
      "name": "Torção com toque no dedo do pé",
      "target": "abdômen"
  },
  {
      "id": "0262",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/QsROWVAFDkSEXJ",
      "name": "Crunch cruzado",
      "target": "abdômen"
  },
  {
      "id": "0267",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/xqBVtUWZanHDeH",
      "name": "Abdominal (mãos acima da cabeça)",
      "target": "abdômen"
  },
  {
      "id": "0271",
      "bodyPart": "core",
      "equipment": "bola de estabiliade",
      "gifUrl": "https://v2.exercisedb.io/image/MM3Vry4uPw3ceh",
      "name": "Abdominal (na bola de estabilidade)",
      "target": "abdômen"
  },
  {
      "id": "0272",
      "bodyPart": "core",
      "equipment": "bola de estabiliade",
      "gifUrl": "https://v2.exercisedb.io/image/PoPIqZHqOH3XsN",
      "name": "Abdominal (na bola de estabilidade, braços esticados)",
      "target": "abdômen"
  },
  {
      "id": "0274",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/O2Wbp0PtyCDvR4",
      "name": "Abdominal no chão",
      "target": "abdômen"
  },
  {
      "id": "3016",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/DZVo6GQAbNgbUI",
      "name": "Curl-up",
      "target": "abdômen"
  },
  {
      "id": "3769",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/QBXXodaYeh5ZYv",
      "name": "Agachamento de cortesia",
      "target": "glúteos"
  },
  {
      "id": "2331",
      "bodyPart": "cardio",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/rKag47GzUq4oO6",
      "name": "Elíptico",
      "target": "cardio"
  },
  {
      "id": "0276",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/hm0Bx8ISYOD29x",
      "name": "Bug morto",
      "target": "abdômen"
  },
  {
      "id": "0277",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/f9bmXAPsYzJ6OF",
      "name": "Crunch declinado",
      "target": "abdômen"
  },
  {
      "id": "0279",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/lERI4GUxKRZCPk",
      "name": "Flexão declinada",
      "target": "peitoral"
  },
  {
      "id": "0282",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/LT-Xfam8p4YZwo",
      "name": "Abdominal declinado",
      "target": "abdômen"
  },
  {
      "id": "1274",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/ee2NcXanVNnoOO",
      "name": "Flexão profunda",
      "target": "peitoral"
  },
  {
      "id": "0283",
      "bodyPart": "biceps/triceps",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/MygIREYRPz4YYX",
      "name": "Flexão de diamante",
      "target": "tríceps"
  },
  {
      "id": "0284",
      "bodyPart": "panturrilha",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/1ARXnUmxGPAJ3i",
      "name": "Elevação de panturrilha como um burro",
      "target": "panturrilha"
  },
  {
      "id": "1275",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/Lfk6a4CMu1dbD5",
      "name": "Flexão com queda",
      "target": "peitoral"
  },
  {
      "id": "0285",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/s66Kz83LkWV5TY",
      "name": "Rosca de bíceps alternada com halteres",
      "target": "bíceps"
  },
  {
      "id": "2403",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/aFDjGRsfLZsrkm",
      "name": "Rosca de bíceps alternada com halteres (com elástico de braço)",
      "target": "bíceps"
  },
  {
      "id": "1646",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/k4ruIWCVnq0s9v",
      "name": "Rosca martelo alternada com halteres",
      "target": "bíceps"
  },
  {
      "id": "1647",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/lyiye3bVRkT0Lh",
      "name": "Rosca alternada com halteres",
      "target": "bíceps"
  },
  {
      "id": "1648",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/jOmske8224PBx0",
      "name": "Rosca martelo alternada sentado com halteres",
      "target": "bíceps"
  },
  {
      "id": "0286",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/W7a-QoYQF2jnC5",
      "name": "Pressão lateral alternada com halteres",
      "target": "deltóides"
  },
  {
      "id": "1649",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/3wBZAAcPHxNTbA",
      "name": "Rosca de bíceps alternada com perna elevada na bola de exercícios",
      "target": "bíceps"
  },
  {
      "id": "1650",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/gjfqxtFX4wlzDc",
      "name": "Rosca de bíceps alternada sentado com perna elevada na bola de exercícios",
      "target": "bíceps"
  },
  {
      "id": "2137",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/2wKMtKkeMPs1wt",
      "name": "Pressão Arnold com halteres",
      "target": "deltóides"
  },
  {
      "id": "0287",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/OSL3WbOinK4eKk",
      "name": "Pressão Arnold com halteres v. 2",
      "target": "deltóides"
  },
  {
      "id": "0288",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/g-2JBOJiL7i6eJ",
      "name": "Pullover com halteres em volta",
      "target": "peitoral"
  },
  {
      "id": "0289",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/tgoCAkyDYBjBQE",
      "name": "Supino com halteres",
      "target": "peitoral"
  },
  {
      "id": "0290",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/g2-uUgHxs-g9TL",
      "name": "Pressão sentado no banco com halteres",
      "target": "deltóides"
  },
  {
      "id": "0291",
      "bodyPart": "quadriceps/posterior",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/tLn2VfZPIHLABh",
      "name": "Agachamento no banco com halteres",
      "target": "glúteos"
  },
  {
      "id": "0293",
      "bodyPart": "costas",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/hZ1pp3oKFyQctX",
      "name": "Remada curvada com halteres",
      "target": "latíssimo"
  },
  {
      "id": "1651",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/ZfI9j476ANpyUR",
      "name": "Rosca de bíceps alternada com halteres em avanço com movimento de boliche",
      "target": "bíceps"
  },
  {
      "id": "1652",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/tzu44z32r2KmZO",
      "name": "Rosca de bíceps alternada com halteres com perna elevada",
      "target": "bíceps"
  },
  {
      "id": "1653",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/49nHLW4cZljfXb",
      "name": "Rosca de bíceps alternada com halteres com postura de cegonha",
      "target": "bíceps"
  },
  {
      "id": "0294",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/yxevE0jIW4igUe",
      "name": "Rosca de bíceps com halteres",
      "target": "bíceps"
  },
  {
      "id": "2401",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/0W69ldYqwCXtUF",
      "name": "Rosca de bíceps com halteres (com elástico de braço)",
      "target": "bíceps"
  },
  {
      "id": "1654",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/EszyCz-tKd-EF4",
      "name": "Rosca de bíceps alternada invertida com halteres",
      "target": "bíceps"
  },
  {
      "id": "1655",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/gS7tBY6Y4rwiKb",
      "name": "Rosca de bíceps alternada com agachamento com halteres",
      "target": "bíceps"
  },
  {
      "id": "1656",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/SZvoJn8ZDyk9fT",
      "name": "Rosca de bíceps alternada com V sit na bola bosu",
      "target": "bíceps"
  },
  {
      "id": "1201",
      "bodyPart": "cardio",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/cLG1jdPRS2WW3U",
      "name": "Burpee com halteres",
      "target": "cardio"
  },
  {
      "id": "0295",
      "bodyPart": "quadriceps/posterior",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/w-ju3C0NqKnT96",
      "name": "Clean com halteres",
      "target": "glúteos"
  },
  {
      "id": "1731",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/vq9UcKVA-EdPcQ",
      "name": "Pressão fechada com halteres",
      "target": "tríceps"
  },
  {
      "id": "0296",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/TRb30A7bli2mq4",
      "name": "Pressão fechada com halteres",
      "target": "tríceps"
  },
  {
      "id": "0297",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/FtMt9ZF5FB81JE",
      "name": "Rosca concentrada com halteres",
      "target": "bíceps"
  },
  {
      "id": "3635",
      "bodyPart": "quadriceps/posterior",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/N5QKlXvFL8ufjX",
      "name": "Avanço contralateral com halteres",
      "target": "glúteos"
  },
  {
      "id": "0298",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/yZhSpqhIq-XMtP",
      "name": "Rosca martelo cruzada com halteres",
      "target": "bíceps"
  },
  {
      "id": "1657",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/e7nzUdZt3L4fKr",
      "name": "Rosca martelo cruzada com halteres v. 2",
      "target": "bíceps"
  },
  {
      "id": "0299",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/25MEJfIhegHwmx",
      "name": "Press cubano com halteres",
      "target": "deltóides"
  },
  {
      "id": "2136",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/rTaTt6dMmab0Cu",
      "name": "Press cubano com halteres v. 2",
      "target": "deltóides"
  },
  {
      "id": "0300",
      "bodyPart": "quadriceps/posterior",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/e04I2rQU7Ezbp7",
      "name": "Levantamento terra com halteres",
      "target": "glúteos"
  },
  {
      "id": "0301",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/mMwO0FwiIqP38k",
      "name": "Pressão declinada com halteres",
      "target": "peitoral"
  },
  {
      "id": "0302",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/fE7rKVXUV28byL",
      "name": "Fly declinado com halteres",
      "target": "peitoral"
  },
  {
      "id": "0303",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/uXoCGxZiXvsTem",
      "name": "Pressão martelo declinada com halteres",
      "target": "peitoral"
  },
  {
      "id": "1276",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/YFjHu3w7BwewaU",
      "name": "Fly unilateral declinado com halteres",
      "target": "peitoral"
  },
  {
      "id": "1617",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/W1r8rm6x4yG9KL",
      "name": "Pressão de martelo de braço único em declínio com halteres",
      "target": "tríceps"
  },
  {
      "id": "0305",
      "bodyPart": "costas",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/B0veuQH-RlnmCj",
      "name": "Encolhimento de ombros em declínio com halteres",
      "target": "trapézio"
  },
  {
      "id": "0304",
      "bodyPart": "costas",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/bgctTYrFoBexTf",
      "name": "Encolhimento de ombros em declínio com halteres v. 2",
      "target": "trapézio"
  },
  {
      "id": "0306",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/5nYY6Z3Fg9KC5L",
      "name": "Extensão de tríceps em declínio com halteres",
      "target": "tríceps"
  },
  {
      "id": "0307",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/dT-6YBw9XQN-qm",
      "name": "Voo com torção em declínio com halteres",
      "target": "peitoral"
  },
  {
      "id": "1437",
      "bodyPart": "antebraço",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/7xxNXgJQkqmGtb",
      "name": "Rosca de dedos com halteres",
      "target": "antebraços"
  },
  {
      "id": "0308",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/nRGEefQgOKrnKT",
      "name": "Voo com halteres",
      "target": "peitoral"
  },
  {
      "id": "1277",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/ND5eOia5Olbfkq",
      "name": "Voo com halteres na bola de exercícios",
      "target": "peitoral"
  },
  {
      "id": "1732",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/JNwEqbaCftUjD9",
      "name": "Extensão de tríceps com avanço frontal em declínio com halteres",
      "target": "tríceps"
  },
  {
      "id": "0310",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/vN6W4I7s15zQTh",
      "name": "Elevação frontal com halteres",
      "target": "deltóides"
  },
  {
      "id": "0309",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/n5dImHiECaiw03",
      "name": "Elevação frontal com halteres v. 2",
      "target": "deltóides"
  },
  {
      "id": "0311",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/fKwYWARyjRfDln",
      "name": "Elevação lateral completa com halteres",
      "target": "deltóides"
  },
  {
      "id": "1760",
      "bodyPart": "quadriceps/posterior",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/lFoU731G-yEfsY",
      "name": "Agachamento com halteres",
      "target": "quadríceps"
  },
  {
      "id": "0313",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/G7e1WplQDLwQgc",
      "name": "Rosca martelo com halteres",
      "target": "bíceps"
  },
  {
      "id": "1659",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/4VE8nRI6TPlTyJ",
      "name": "Rosca martelo com halteres na bola de exercícios",
      "target": "bíceps"
  },
  {
      "id": "0312",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/tZtqR0RiEQJ151",
      "name": "Rosca martelo com halteres v. 2",
      "target": "bíceps"
  },
  {
      "id": "2402",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/pr0dGLfmPHv6ep",
      "name": "Rosca martelo com halteres (com suporte para braço)",
      "target": "bíceps"
  },
  {
      "id": "1664",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/wpZW1M0jCEL9uw",
      "name": "Rosca alta com halteres",
      "target": "bíceps"
  },
  {
      "id": "3545",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/6RoOr6V8HJRb4I",
      "name": "Pressão alternada em inclinação com halteres",
      "target": "peitoral"
  },
  {
      "id": "0314",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/y5nd5EDNWvLC2N",
      "name": "Supino inclinado com halteres",
      "target": "peitoral"
  },
  {
      "id": "0315",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/3ymbT7Iqxh1qcr",
      "name": "Rosca bíceps inclinada com halteres",
      "target": "bíceps"
  },
  {
      "id": "0316",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/Pt-8wLSe8sVYP3",
      "name": "Inclinação com halteres",
      "target": "peitoral"
  },
  {
      "id": "0318",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/xIPE6y27CijLiw",
      "name": "Rosca inclinada com halteres",
      "target": "bíceps"
  },
  {
      "id": "0317",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/94n2NWrHk7MRpZ",
      "name": "Rosca inclinada com halteres v. 2",
      "target": "bíceps"
  },
  {
      "id": "0319",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/oSyZ7xnovTCCBr",
      "name": "Voo inclinado com halteres",
      "target": "peitoral"
  },
  {
      "id": "1278",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/2q-S58Nf03F94E",
      "name": "Voo inclinado com halteres na bola de exercícios",
      "target": "peitoral"
  },
  {
      "id": "0320",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/JCeNkTS8xpHxbC",
      "name": "Rosca martelo inclinada com halteres",
      "target": "bíceps"
  },
  {
      "id": "0321",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/4cYXJiTP80mApX",
      "name": "Pressão martelo inclinada com halteres",
      "target": "peitoral"
  },
  {
      "id": "1618",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/RAY8AYGzkR4sZF",
      "name": "Pressão martelo inclinada com halteres na bola de exercícios",
      "target": "tríceps"
  },
  {
      "id": "0322",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/FutRuO2B3k0pGC",
      "name": "Rosca interna inclinada com halteres",
      "target": "bíceps"
  },
  {
      "id": "1279",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/ceFCDtJ2Zu2XID",
      "name": "Voo unilateral inclinado com halteres",
      "target": "peitoral"
  },
  {
      "id": "1280",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/anjiDrpmYe9wc8",
      "name": "Voo unilateral inclinado com halteres na bola de exercícios",
      "target": "peitoral"
  },
  {
      "id": "1619",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/uILHWwJLMPBnJ2",
      "name": "Pressão de martelo de braço único inclinada com halteres",
      "target": "tríceps"
  },
  {
      "id": "1620",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/-1aceswOWUQHxY",
      "name": "Pressão de martelo de braço único inclinada com halteres na bola de exercícios",
      "target": "tríceps"
  },
  {
      "id": "0323",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/a4oIUIuQ9MoTPx",
      "name": "Elevação lateral de braço único inclinada com halteres",
      "target": "deltóides"
  },
  {
      "id": "1281",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/tuZdk1XaMik5ta",
      "name": "Pressão de braço único inclinada com halteres",
      "target": "peitoral"
  },
  {
      "id": "1282",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/xiEyU9mkGAugGl",
      "name": "Pressão de braço único inclinada com halteres na bola de exercícios",
      "target": "peitoral"
  },
  {
      "id": "0324",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/OfRnN6SoQw4Cif",
      "name": "Pressão interna de braço único inclinada com halteres",
      "target": "peitoral"
  },
  {
      "id": "1283",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/FjtwRddPO6Z2qe",
      "name": "Pressão inclinada com halteres na bola de exercícios",
      "target": "peitoral"
  },
  {
      "id": "0325",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/eVWJuhLhi7SpMb",
      "name": "Elevação em inclinação com halteres",
      "target": "deltóides"
  },
  {
      "id": "0326",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/a5fiOHBOdyA09k",
      "name": "Elevação lateral traseira em inclinação com halteres",
      "target": "deltóides"
  },
  {
      "id": "0327",
      "bodyPart": "costas",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/eMPuedr9PlD4kZ",
      "name": "Remada em inclinação com halteres",
      "target": "latíssimo"
  },
  {
      "id": "0328",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/INMg1HwK02CfRn",
      "name": "Elevação de ombro em inclinação com halteres",
      "target": "serrátil"
  },
  {
      "id": "0329",
      "bodyPart": "costas",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/YFzqZOaAGhMmLN",
      "name": "Encolhimento de ombros em inclinação com halteres",
      "target": "trapézio"
  },
  {
      "id": "3542",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/eRueGco-qqst0p",
      "name": "Elevação em T em inclinação com halteres",
      "target": "deltóides"
  },
  {
      "id": "0330",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/uC-Tw70DgNdIeA",
      "name": "Extensão de tríceps em inclinação com halteres",
      "target": "tríceps"
  },
  {
      "id": "0331",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/SKmSPquP9O6TJi",
      "name": "Voos torcidos em inclinação com halteres",
      "target": "peitoral"
  },
  {
      "id": "1733",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/ua1OgE800qewKz",
      "name": "Extensão de dois braços em inclinação com halteres",
      "target": "tríceps"
  },
  {
      "id": "3541",
      "bodyPart": "costas",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/I75duOiPY6vKrH",
      "name": "Elevação em Y em inclinação com halteres",
      "target": "latíssimo"
  },
  {
      "id": "0332",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/ebjYLCvNjdcA1L",
      "name": "Cruz de ferro com halteres",
      "target": "deltóides"
  },
  {
      "id": "0333",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/aOV109bgSMRnBK",
      "name": "Tríceps kickback com halteres",
      "target": "tríceps"
  },
  {
      "id": "1734",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/XQ7b-LdOZSw1ug",
      "name": "Tríceps kickbacks na bola de exercícios com halteres",
      "target": "tríceps"
  },
  {
      "id": "1660",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/iMCxI13igDEjJU",
      "name": "Rosca de bíceps em posição ajoelhada com halteres na bola de exercícios",
      "target": "bíceps"
  },
  {
      "id": "0334",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/G90c5ahUhCZOxv",
      "name": "Elevação lateral com halteres",
      "target": "deltóides"
  },
  {
      "id": "0335",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/v6OIqiUyUeLuot",
      "name": "Elevação lateral para frente com halteres",
      "target": "deltóides"
  },
  {
      "id": "0336",
      "bodyPart": "quadriceps/posterior",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/36g0-23UA7n5D0",
      "name": "Agachamento com halteres",
      "target": "glúteos"
  },
  {
      "id": "1658",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/QrxrhIA-ei0B8-",
      "name": "Agachamento com halteres e rosca de bíceps",
      "target": "bíceps"
  },
  {
      "id": "0337",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/AA0UIjWMjaOmuE",
      "name": "Extensão deitada com halteres (sobre o rosto)",
      "target": "tríceps"
  },
  {
      "id": "1729",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/Qy6YRFkDOCX-hl",
      "name": "Extensão alternada deitada com halteres",
      "target": "tríceps"
  },
  {
      "id": "0338",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/1mFsNJJekXleLs",
      "name": "Pressão de cotovelo deitado com halteres",
      "target": "tríceps"
  },
  {
      "id": "0863",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/72H3TzuLU4CWQy",
      "name": "Rotação externa de ombro deitado com halteres",
      "target": "deltóides"
  },
  {
      "id": "0339",
      "bodyPart": "quadriceps/posterior",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/WyZI6fMaTw7LX2",
      "name": "Flexão femoral deitada com halteres",
      "target": "isquiotibiais"
  },
  {
      "id": "0340",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/hc5c6r0cG8ZpZu",
      "name": "Pressão martelo deitado com halteres",
      "target": "peitoral"
  },
  {
      "id": "2470",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/ig5k3hrVC5mkvj",
      "name": "Elevação traseira deitada no chão com halteres",
      "target": "deltóides"
  },
  {
      "id": "0341",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/WoIPG006bJal2w",
      "name": "Deltoides posterior deitado com um braço com halteres",
      "target": "deltóides"
  },
  {
      "id": "0343",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/3h9V00hl7lfh3n",
      "name": "Pressão de braço único deitado com halteres",
      "target": "peitoral"
  },
  {
      "id": "0342",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/yFm37qh-mdG3A7",
      "name": "Pressão de braço único deitado com halteres v. 2",
      "target": "peitoral"
  },
  {
      "id": "0344",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/fOWLv18SCkjfSu",
      "name": "Extensão de tríceps pronada de braço único deitado com halteres",
      "target": "tríceps"
  },
  {
      "id": "0345",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/GAmOSTokxdOv7C",
      "name": "Elevação lateral traseira de braço único deitado com halteres",
      "target": "deltóides"
  },
  {
      "id": "0346",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/LMf993Kuzd-2ox",
      "name": "Extensão de tríceps supinada de braço único deitado com halteres",
      "target": "tríceps"
  },
  {
      "id": "0347",
      "bodyPart": "antebraço",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/M8ngTk293HgC6C",
      "name": "Pronação deitada com halteres",
      "target": "antebraços"
  },
  {
      "id": "2705",
      "bodyPart": "antebraço",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/u4IAhARAFNYXcJ",
      "name": "Pronação deitada com halteres no chão",
      "target": "antebraços"
  },
  {
      "id": "1284",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/kg2Lolz4HcwFPc",
      "name": "Pullover deitado com halteres na bola de exercícios",
      "target": "peitoral"
  },
  {
      "id": "1328",
      "bodyPart": "costas",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/93A0nlUSlmvPp0",
      "name": "Remada deitada para deltoides posteriores com halteres",
      "target": "latíssimo"
  },
  {
      "id": "0348",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/HZ9DV1XyrpOfdW",
      "name": "Elevação lateral traseira deitada com halteres",
      "target": "deltóides"
  },
  {
      "id": "1735",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/sUkb-xv8LvK7Gl",
      "name": "Extensão única deitada com halteres",
      "target": "tríceps"
  },
  {
      "id": "0349",
      "bodyPart": "antebraço",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/GXE-HEK9XTbtcQ",
      "name": "Supinação deitada com halteres",
      "target": "antebraços"
  },
  {
      "id": "2706",
      "bodyPart": "antebraço",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/U2F8scWFlykvpv",
      "name": "Supinação deitada com halteres no chão",
      "target": "antebraços"
  },
  {
      "id": "1661",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/mIeCEGj8o-FduA",
      "name": "Rosca de bíceps deitada com halteres supinada",
      "target": "bíceps"
  },
  {
      "id": "0350",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/0AOklcpPZ-jACk",
      "name": "Rosca de bíceps deitada com halteres neutra",
      "target": "bíceps"
  },
  {
      "id": "0351",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/yZXfADp8SKBMUw",
      "name": "Extensão de tríceps deitada com halteres",
      "target": "tríceps"
  },
  {
      "id": "1662",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/EWQYLjtc1bsbye",
      "name": "Rosca larga de bíceps deitada com halteres",
      "target": "bíceps"
  },
  {
      "id": "0352",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/GEAVEx7c8eNijx",
      "name": "Supino com pegada neutra com halteres",
      "target": "tríceps"
  },
  {
      "id": "1285",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/IWiBM847jBP1Re",
      "name": "Voo de braço único com halteres",
      "target": "peitoral"
  },
  {
      "id": "0292",
      "bodyPart": "costas",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/NcXlrcJ9JV0sWB",
      "name": "Remada unilateral com halteres",
      "target": "latíssimo"
  },
  {
      "id": "1286",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/A0EKKNWdr2Yuzd",
      "name": "Supino unilateral com halteres na bola de exercícios",
      "target": "peitoral"
  },
  {
      "id": "0353",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/KVLbEVyskSGJCP",
      "name": "Rosca de concentração de braço único com halteres (sobre bola de estabilidade)",
      "target": "bíceps"
  },
  {
      "id": "1287",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/TaMS1cryqdZ0O-",
      "name": "Supino unilateral em declínio com halteres",
      "target": "peitoral"
  },
  {
      "id": "1288",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/UMq7sDsvkT2tZI",
      "name": "Voo de braço único com halteres na bola de exercícios",
      "target": "peitoral"
  },
  {
      "id": "1736",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/x8kWBJZFZKiyK3",
      "name": "Pressão francesa de braço único na bola de exercícios com halteres",
      "target": "tríceps"
  },
  {
      "id": "1663",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/36UDm-wsC-kkaW",
      "name": "Rosca martelo de braço único em declínio com halteres",
      "target": "bíceps"
  },
  {
      "id": "1621",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/CS8wqqeEKB9bXf",
      "name": "Pressão de martelo de braço único em declínio com halteres na bola de exercícios",
      "target": "tríceps"
  },
  {
      "id": "1289",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/gFYi-HNgodsKjm",
      "name": "Supino unilateral inclinado com halteres",
      "target": "peitoral"
  },
  {
      "id": "0354",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/fTPoenTFmuiORQ",
      "name": "Tríceps kickback de braço único com halteres",
      "target": "tríceps"
  },
  {
      "id": "0355",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/HszHkBbgTwzcqV",
      "name": "Elevação lateral de braço único com halteres",
      "target": "deltóides"
  },
  {
      "id": "0356",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/sr3JneGCj-isXs",
      "name": "Elevação lateral de braço único com halteres com apoio",
      "target": "deltóides"
  },
  {
      "id": "1290",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/4bqg4wdK9ULUvN",
      "name": "Pressão de braço único com halteres na bola de exercícios",
      "target": "peitoral"
  },
  {
      "id": "1665",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/V5Lp-HOHIjBjuI",
      "name": "Rosca de bíceps de braço único em pronação com halteres",
      "target": "bíceps"
  },
  {
      "id": "1666",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/hyDpC4uBvSEwhB",
      "name": "Rosca martelo de braço único em pronação com halteres",
      "target": "bíceps"
  },
  {
      "id": "1291",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/6EHEuVq2cysN0S",
      "name": "Pullover de braço único com halteres na bola de exercícios",
      "target": "peitoral"
  },
  {
      "id": "0358",
      "bodyPart": "antebraço",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/Y318rTgrUa72nc",
      "name": "Rosca reversa de pulso de braço único com halteres",
      "target": "antebraços"
  },
  {
      "id": "0359",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/JVCrwm3zveWXnR",
      "name": "Voo reverso de braço único (com apoio) com halteres",
      "target": "deltóides"
  },
  {
      "id": "1622",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/VFCqInjfqitMjO",
      "name": "Pressão de braço único com pegada reversa inclinada com halteres",
      "target": "peitoral"
  },
  {
      "id": "1414",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/DOqcfROWVu0wIv",
      "name": "Rosca de bíceps reversa de braço único",
      "target": "bíceps"
  },
  {
      "id": "1667",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/QYiVkcJfBj3wO-",
      "name": "Rosca de aranha reversa de braço único com halteres",
      "target": "bíceps"
  },
  {
      "id": "1668",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/s1ryG4I1Hnjs6I",
      "name": "Rosca de bíceps sentado de braço único com halteres na bola de exercícios",
      "target": "bíceps"
  },
  {
      "id": "1669",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/ikZjVrJYBQD2sk",
      "name": "dumbbell one arm seated hammer curl",
      "target": "bíceps"
  },
  {
      "id": "1415",
      "bodyPart": "antebraço",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/4qVMkyrIflic2u",
      "name": "Rosca de punho neutra sentado de braço único com halteres",
      "target": "antebraços"
  },
  {
      "id": "0361",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/yPYFlCdGhiDU83",
      "name": "Pressão de ombro de braço único com halteres",
      "target": "deltóides"
  },
  {
      "id": "0360",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/e18hDJcDavgpko",
      "name": "Pressão de ombro de braço único com halteres v. 2",
      "target": "deltóides"
  },
  {
      "id": "3888",
      "bodyPart": "quadriceps/posterior",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/SqsMxR6K0w8vPn",
      "name": "Snatch de braço único com halteres",
      "target": "glúteos"
  },
  {
      "id": "1670",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/cp47q2rHb1Z-WQ",
      "name": "Rosca de bíceps de braço único em pé",
      "target": "bíceps"
  },
  {
      "id": "1671",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/caUo1SOFKMHn-W",
      "name": "Rosca martelo de braço único em pé",
      "target": "bíceps"
  },
  {
      "id": "0362",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/5UxFN4xdu8n4nq",
      "name": "Extensão de tríceps de braço único (no banco) com halteres",
      "target": "tríceps"
  },
  {
      "id": "0363",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/fDtTWBrjkxz9s3",
      "name": "Elevação lateral de braço único com halteres",
      "target": "deltóides"
  },
  {
      "id": "0364",
      "bodyPart": "antebraço",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/XJAk6oKhZ1d6Zj",
      "name": "Rosca de pulso de braço único com halteres",
      "target": "antebraços"
  },
  {
      "id": "1672",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/PVUnTWGBvlpJcw",
      "name": "Rosca de bíceps de braço único com martelo Zottman",
      "target": "bíceps"
  },
  {
      "id": "1292",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/lQi5s6bxC94PZ3",
      "name": "Voo de perna única com halteres na bola de exercícios",
      "target": "peitoral"
  },
  {
      "id": "0365",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/9ELPnvYbPrZYQp",
      "name": "Rosca de pulso neutra sobre o banco com halteres",
      "target": "bíceps"
  },
  {
      "id": "0366",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/0YXwLjFZMju15z",
      "name": "Rosca de pulso neutra de braço único sobre o banco com halteres",
      "target": "bíceps"
  },
  {
      "id": "1441",
      "bodyPart": "antebraço",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/3THCOEwus0okhw",
      "name": "Rosca de punho reversa de braço único sobre o banco com halteres",
      "target": "antebraços"
  },
  {
      "id": "0367",
      "bodyPart": "antebraço",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/imBm5lK3oI3BC4",
      "name": "Rosca de pulso de braço único sobre o banco com halteres",
      "target": "antebraços"
  },
  {
      "id": "0368",
      "bodyPart": "antebraço",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/i8LEws9k501wZh",
      "name": "Rosca de pulso reversa de braço único sobre o banco com halteres",
      "target": "antebraços"
  },
  {
      "id": "0369",
      "bodyPart": "antebraço",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/RPuwCS0SnKRtmp",
      "name": "Rosca de pulso de braço único sobre o banco com halteres",
      "target": "antebraços"
  },
  {
      "id": "1329",
      "bodyPart": "costas",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/opV8lrlJsZ2rbj",
      "name": "Remada com rotação de palma de braço único inclinada com halteres",
      "target": "latíssimo"
  },
  {
      "id": "1623",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/vOiJQBnSUo1aRD",
      "name": "Supino inclinado com pegada interna com halteres",
      "target": "tríceps"
  },
  {
      "id": "0370",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/kTMq-9B33-XoSG",
      "name": "Rosca martelo deitado",
      "target": "bíceps"
  },
  {
      "id": "0371",
      "bodyPart": "quadriceps/posterior",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/bxCN0cGcxMhaTx",
      "name": "Agachamento pliométrico com halteres",
      "target": "glúteos"
  },
  {
      "id": "0372",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/MVryNB2uix4dL4",
      "name": "Rosca de bíceps com apoio",
      "target": "bíceps"
  },
  {
      "id": "1673",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/M3tTbJLkcNlSSd",
      "name": "Rosca martelo com apoio na bola de exercícios",
      "target": "bíceps"
  },
  {
      "id": "1293",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/80KEPh8yVDUyeG",
      "name": "Pressão com halteres na bola de exercícios",
      "target": "peitoral"
  },
  {
      "id": "0373",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/UfeJGPstVJtEJc",
      "name": "Extensão de tríceps com pegada pronada com halteres",
      "target": "tríceps"
  },
  {
      "id": "0374",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/PaswDaO-bvc9YJ",
      "name": "Rosca inclinada com halteres",
      "target": "bíceps"
  },
  {
      "id": "1674",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/P7kIUD1D71hq9i",
      "name": "Rosca martelo inclinada com halteres",
      "target": "bíceps"
  },
  {
      "id": "0375",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/khayT7elARSHW0",
      "name": "Pullover com halteres",
      "target": "peitoral"
  },
  {
      "id": "1294",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/Fz1f4l4-4inJyP",
      "name": "Pullover com extensão do quadril na bola de exercícios com halteres",
      "target": "peitoral"
  },
  {
      "id": "1295",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/0RdIQOgiuyMUcV",
      "name": "Pullover com halteres na bola de exercícios",
      "target": "peitoral"
  },
  {
      "id": "1700",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/HqNr9zK24-MjbA",
      "name": "Pressão com impulso com halteres",
      "target": "deltóides"
  },
  {
      "id": "0376",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/Eqfbj5uQ2YFyP7",
      "name": "Elevação com halteres",
      "target": "deltóides"
  },
  {
      "id": "2292",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/6zoZe-D0JaCose",
      "name": "Elevação de deltoides posterior com halteres",
      "target": "deltóides"
  },
  {
      "id": "0377",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/ayexM8phLXuGD3",
      "name": "Remada de deltoides posterior com halteres",
      "target": "deltóides"
  },
  {
      "id": "0378",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/0cqgWMAu04yBfT",
      "name": "Voo traseiro com halteres",
      "target": "deltóides"
  },
  {
      "id": "0380",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/e5ZNTFTAnx8POp",
      "name": "Elevação lateral traseira com halteres",
      "target": "deltóides"
  },
  {
      "id": "0379",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/PjYUFbLUFAcB3l",
      "name": "Elevação lateral traseira com halteres (apoio na cabeça)",
      "target": "deltóides"
  },
  {
      "id": "0381",
      "bodyPart": "quadriceps/posterior",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/nUwRMMYvZSNmN-",
      "name": "Avanço traseiro com halteres",
      "target": "glúteos"
  },
  {
      "id": "0382",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/VXn1zlaGbi7iKn",
      "name": "Rosca de bíceps com pegada reversa",
      "target": "bíceps"
  },
  {
      "id": "1624",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/u1yYK5ciBLxGzx",
      "name": "Supino reverso com halteres",
      "target": "peitoral"
  },
  {
      "id": "0383",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/jzZQWdagEYSYhY",
      "name": "Elevação lateral reversa com halteres",
      "target": "deltóides"
  },
  {
      "id": "1330",
      "bodyPart": "costas",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/jTwEjiQiYbcavU",
      "name": "Remada de um braço inclinada com pegada reversa com halteres",
      "target": "latíssimo"
  },
  {
      "id": "1331",
      "bodyPart": "costas",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/s5IJzzlrgtX8rg",
      "name": "Remada de dois braços inclinada com pegada reversa com halteres",
      "target": "latíssimo"
  },
  {
      "id": "2327",
      "bodyPart": "costas",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/bNoMCOKcgNjTsc",
      "name": "Remada com pegada reversa (feminino) com halteres",
      "target": "latíssimo"
  },
  {
      "id": "0384",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/7L9D2ir08ahjzY",
      "name": "Rosca de bíceps reversa",
      "target": "bíceps"
  },
  {
      "id": "1675",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/7rgFy7FR4lmAEW",
      "name": "Rosca de aranha reversa",
      "target": "bíceps"
  },
  {
      "id": "0385",
      "bodyPart": "antebraço",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/mOgP2BT7P-i4cW",
      "name": "Rosca de pulso reversa com halteres",
      "target": "antebraços"
  },
  {
      "id": "1459",
      "bodyPart": "quadriceps/posterior",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/emo6qGNMVIi-EG",
      "name": "Levantamento terra romeno com halteres",
      "target": "glúteos"
  },
  {
      "id": "0386",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/LOiMGJFhU9zqnP",
      "name": "Elevação lateral reversa com rotação com halteres",
      "target": "deltóides"
  },
  {
      "id": "2397",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/GrA6jFCmM7b9ny",
      "name": "Pressão Scott com halteres",
      "target": "deltóides"
  },
  {
      "id": "0387",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/cWKDjnGTJuDVZW",
      "name": "Elevação frontal alternada sentado com halteres",
      "target": "deltóides"
  },
  {
      "id": "1676",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/8KfJmha8IROuQj",
      "name": "Rosca martelo alternada sentado com halteres na bola de exercícios",
      "target": "bíceps"
  },
  {
      "id": "0388",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/StF74BlCaNYvjn",
      "name": "Pressão alternada sentado com halteres",
      "target": "deltóides"
  },
  {
      "id": "3546",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/K0D5H5w1wItYj3",
      "name": "Ombro alternado sentado com halteres",
      "target": "deltóides"
  },
  {
      "id": "0389",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/CJH-O2K0zYKxOs",
      "name": "Extensão de banco sentado com halteres",
      "target": "tríceps"
  },
  {
      "id": "2317",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/A3R31TGU4AG1Eh",
      "name": "Elevação lateral com braços dobrados sentado",
      "target": "deltóides"
  },
  {
      "id": "1730",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/S8NNtgNU9E7PNK",
      "name": "Tríceps kickback alternado inclinado sentado",
      "target": "tríceps"
  },
  {
      "id": "1737",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/sBxOUVm1zdhmkR",
      "name": "Extensão de tríceps inclinado sentado",
      "target": "tríceps"
  },
  {
      "id": "1677",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/MnXb9FD3O03RPl",
      "name": "Rosca bíceps sentado com halteres",
      "target": "bíceps"
  },
  {
      "id": "0390",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/w9NSU206HAwgP7",
      "name": "Rosca bíceps sentado (sobre a bola de estabilidade) com halteres",
      "target": "bíceps"
  },
  {
      "id": "3547",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/xGqmecT0hp92VU",
      "name": "Rosca bíceps sentado alternada com pressão de ombro com halteres",
      "target": "bíceps"
  },
  {
      "id": "1379",
      "bodyPart": "panturrilha",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/oVhNDfeO75LOO2",
      "name": "Elevação de gêmeos sentado com halteres",
      "target": "panturrilha"
  },
  {
      "id": "0391",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/1wo93bHGhlZxXq",
      "name": "Rosca sentado com halteres",
      "target": "bíceps"
  },
  {
      "id": "0392",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/dvk780g3UEz2Rw",
      "name": "Elevação frontal sentado com halteres",
      "target": "deltóides"
  },
  {
      "id": "1678",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/iecfxm8gwxcE9M",
      "name": "Rosca martelo sentado com halteres",
      "target": "bíceps"
  },
  {
      "id": "0393",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/6ViEzIsw8OZVCe",
      "name": "Rosca interna bíceps sentado com halteres",
      "target": "bíceps"
  },
  {
      "id": "0394",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/A3JC3riMdZgQPn",
      "name": "Tríceps kickback sentado com halteres",
      "target": "tríceps"
  },
  {
      "id": "0396",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/2b0p70CSk7gVxb",
      "name": "Elevação lateral sentado com halteres",
      "target": "deltóides"
  },
  {
      "id": "0395",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/xVs0BdwU6xm9C8",
      "name": "Elevação lateral sentado com halteres v. 2",
      "target": "deltóides"
  },
  {
      "id": "0397",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/K25mQ5CkUNExmY",
      "name": "Rosca de pulso neutra sentado com halteres",
      "target": "bíceps"
  },
  {
      "id": "1679",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/hmZmWWQkpczYqo",
      "name": "Rosca bíceps de braço único sentado com halteres sobre a bola de exercícios com perna elevada",
      "target": "bíceps"
  },
  {
      "id": "0398",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/LtPki07mXybf1G",
      "name": "Tríceps kickback de braço único sentado com halteres",
      "target": "tríceps"
  },
  {
      "id": "0399",
      "bodyPart": "antebraço",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/HcBYr9re7DHTF-",
      "name": "Rotação de braço único sentado com halteres",
      "target": "antebraços"
  },
  {
      "id": "0400",
      "bodyPart": "panturrilha",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/gleC-JuRnZZEhh",
      "name": "Elevação de gêmeo de uma perna sentado com halteres",
      "target": "panturrilha"
  },
  {
      "id": "1380",
      "bodyPart": "panturrilha",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/752Wj5DbbDpbDI",
      "name": "Elevação de gêmeo de uma perna sentado com halteres",
      "target": "panturrilha"
  },
  {
      "id": "1381",
      "bodyPart": "panturrilha",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/wz9yDVWlgeoQa7",
      "name": "Elevação de gêmeo de uma perna sentado com halteres",
      "target": "panturrilha"
  },
  {
      "id": "0401",
      "bodyPart": "antebraço",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/plNhA7jHA1cGLv",
      "name": "Rosca de pulso com palma para cima sentado com halteres",
      "target": "antebraços"
  },
  {
      "id": "0402",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/HJlaHPD72lDz57",
      "name": "Rosca bíceps sentado com halteres",
      "target": "bíceps"
  },
  {
      "id": "0403",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/3BtvoNUBrsCrwx",
      "name": "Rosca de concentração reversa sentado com halteres",
      "target": "bíceps"
  },
  {
      "id": "1738",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/WgVuDNP7LWVcdy",
      "name": "Extensão de tríceps unilateral com pegada reversa inclinada sentado com halteres",
      "target": "tríceps"
  },
  {
      "id": "0405",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/-rqH38IJ1NEr47",
      "name": "Pressão de ombro sentado com halteres",
      "target": "deltóides"
  },
  {
      "id": "0404",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/KVz-y97cw3PQ5a",
      "name": "Pressão de ombro sentado com halteres (pegada paralela)",
      "target": "deltóides"
  },
  {
      "id": "2188",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/yW-0VIsAQdJ8Ot",
      "name": "Extensão de tríceps sentado com halteres",
      "target": "tríceps"
  },
  {
      "id": "0406",
      "bodyPart": "costas",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/z7vzLfF3-Va2nm",
      "name": "Encolhimento de ombros com halteres",
      "target": "trapézio"
  },
  {
      "id": "0407",
      "bodyPart": "core",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/WzNmUegYXS85ul",
      "name": "Inclinação lateral com halteres",
      "target": "abdômen"
  },
  {
      "id": "0408",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/qmEYzdpW6oEcbc",
      "name": "Elevação de um braço deitado lateralmente com halteres",
      "target": "deltóides"
  },
  {
      "id": "3664",
      "bodyPart": "costas",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/6PNcItIlORP0A-",
      "name": "Prancha lateral com voo traseiro com halteres",
      "target": "latíssimo"
  },
  {
      "id": "3548",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/70cZelhBoAbBtq",
      "name": "Transporte de braço único acima da cabeça com halteres",
      "target": "deltóides"
  },
  {
      "id": "0409",
      "bodyPart": "panturrilha",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/mHDUgSI32li4ge",
      "name": "Elevação de gêmeo de uma perna com halteres",
      "target": "panturrilha"
  },
  {
      "id": "1757",
      "bodyPart": "quadriceps/posterior",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/RKgkgNVkuO1G-U",
      "name": "Levantamento terra com uma perna com halteres",
      "target": "glúteos"
  },
  {
      "id": "2805",
      "bodyPart": "quadriceps/posterior",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/StfMRPmlXvoDpf",
      "name": "Levantamento terra com uma perna com suporte de stepbox com halteres",
      "target": "glúteos"
  },
  {
      "id": "0410",
      "bodyPart": "quadriceps/posterior",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/HZAnhKGjPw9jps",
      "name": "Agachamento com uma perna com halteres",
      "target": "quadríceps"
  },
  {
      "id": "0411",
      "bodyPart": "quadriceps/posterior",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/srrWDyy77fxAtG",
      "name": "Agachamento com uma perna com halteres",
      "target": "glúteos"
  },
  {
      "id": "0413",
      "bodyPart": "quadriceps/posterior",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/p7rYXGifY2uCrl",
      "name": "Agachamento com halteres",
      "target": "glúteos"
  },
  {
      "id": "3560",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/MwKWuvkTqBzerb",
      "name": "Rosca martelo e pressão alternadas em pé com halteres",
      "target": "bíceps"
  },
  {
      "id": "0414",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/wjD5MXYyO948VV",
      "name": "Pressão alternada em pé com halteres",
      "target": "deltóides"
  },
  {
      "id": "0415",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/g7U0GQpZOlXdUS",
      "name": "Elevação alternada em pé com halteres",
      "target": "deltóides"
  },
  {
      "id": "1739",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/Fhu9u7jwtLbx2F",
      "name": "Tríceps kickback alternado em pé com halteres",
      "target": "tríceps"
  },
  {
      "id": "2143",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/DiJAzdJv3DvfUS",
      "name": "Circundução com halteres em pé",
      "target": "deltóides"
  },
  {
      "id": "1740",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/7HVGtuU16IGXDQ",
      "name": "Extensão de tríceps de um braço inclinado em pé com halteres",
      "target": "tríceps"
  },
  {
      "id": "1741",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/K8s3tUhgGIezHN",
      "name": "Extensão de tríceps de dois braços inclinado em pé com halteres",
      "target": "tríceps"
  },
  {
      "id": "0416",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/kSMjJWNLSTDQ0o",
      "name": "Rosca bíceps em pé com halteres",
      "target": "bíceps"
  },
  {
      "id": "0417",
      "bodyPart": "panturrilha",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/CohSEXoTPz91oN",
      "name": "Elevação de gêmeo em pé com halteres",
      "target": "panturrilha"
  },
  {
      "id": "0418",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/PA6wR0YBY1g121",
      "name": "Rosca de concentração em pé com halteres",
      "target": "bíceps"
  },
  {
      "id": "0419",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/uIxWfZPnysvTgx",
      "name": "Elevação frontal acima da cabeça em pé com halteres",
      "target": "deltóides"
  },
  {
      "id": "2321",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/GsR810VDDnTgoF",
      "name": "Rosca interna de bíceps em pé com halteres v. 2",
      "target": "bíceps"
  },
  {
      "id": "0420",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/p2FqTlaOIYZMIa",
      "name": "Tríceps kickback em pé com halteres",
      "target": "tríceps"
  },
  {
      "id": "0421",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/gXujRR0a8eh8M2",
      "name": "Rosca de concentração de braço único em pé com halteres",
      "target": "bíceps"
  },
  {
      "id": "0422",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/-XTcIK4GnKlKUD",
      "name": "Rosca de braço único em pé (sobre o banco inclinado) com halteres",
      "target": "bíceps"
  },
  {
      "id": "1680",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/IX3fWvvgwNNNLu",
      "name": "Rosca de braço único em pé sobre o banco inclinado com halteres",
      "target": "bíceps"
  },
  {
      "id": "0423",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/EyrFPKzKO7R6Zo",
      "name": "Extensão de braço único em pé com halteres",
      "target": "tríceps"
  },
  {
      "id": "0424",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/1znl3ui6sQyOAW",
      "name": "Pressão de palma única em pé com halteres",
      "target": "deltóides"
  },
  {
      "id": "0425",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/R7DfiJUE0SNvVt",
      "name": "Rosca reversa de braço único em pé com halteres",
      "target": "bíceps"
  },
  {
      "id": "0426",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/iOtlwOyXAD83mu",
      "name": "Pressão de ombro em pé com halteres",
      "target": "deltóides"
  },
  {
      "id": "0427",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/tlQ7ZmZxy0zigT",
      "name": "Pressão de palma única em pé com halteres",
      "target": "deltóides"
  },
  {
      "id": "0428",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/X9u2zsmCHH7XVl",
      "name": "Rosca de braço único em pé com halteres",
      "target": "bíceps"
  },
  {
      "id": "0429",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/tw95P8LG6q-y1f",
      "name": "Rosca reversa em pé com halteres",
      "target": "bíceps"
  },
  {
      "id": "0430",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/Ee4Jh7580WHd6c",
      "name": "Extensão de tríceps em pé com halteres",
      "target": "tríceps"
  },
  {
      "id": "2293",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/MnIy1-MWMAnhVw",
      "name": "Rosca de braço único em pé com halteres Zottman",
      "target": "bíceps"
  },
  {
      "id": "1684",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/FCJgkYMNH8oNpn",
      "name": "Levantamento com uma perna e equilíbrio com rosca de bíceps",
      "target": "bíceps"
  },
  {
      "id": "0431",
      "bodyPart": "quadriceps/posterior",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/8MaUJrK--I3DK2",
      "name": "Step-up com halteres",
      "target": "glúteos"
  },
  {
      "id": "2796",
      "bodyPart": "quadriceps/posterior",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/HSsQ0A6RWgIbwg",
      "name": "Afundo com halteres",
      "target": "quadríceps"
  },
  {
      "id": "2812",
      "bodyPart": "quadriceps/posterior",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/a67Klz3TAc-bgU",
      "name": "Agachamento com halteres",
      "target": "quadríceps"
  },
  {
      "id": "0432",
      "bodyPart": "quadriceps/posterior",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/tviwj-nvu8-dwN",
      "name": "Levantamento terra com pernas esticadas com halteres",
      "target": "glúteos"
  },
  {
      "id": "0433",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/HzuBEjd1e-MdTv",
      "name": "Pullover de braços esticados com halteres",
      "target": "peitoral"
  },
  {
      "id": "0434",
      "bodyPart": "quadriceps/posterior",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/LeCiYqKrDLmZpm",
      "name": "Levantamento terra com pernas esticadas com halteres",
      "target": "glúteos"
  },
  {
      "id": "2808",
      "bodyPart": "quadriceps/posterior",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/MYMeV3tp-6UFpL",
      "name": "Puxada com halteres estilo sumô",
      "target": "glúteos"
  },
  {
      "id": "2803",
      "bodyPart": "quadriceps/posterior",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/RKc4DLFFJIlZjm",
      "name": "Agachamento com apoio com halteres",
      "target": "quadríceps"
  },
  {
      "id": "0436",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/G1MnfDFuugFhPQ",
      "name": "Pressão Tate com halteres",
      "target": "tríceps"
  },
  {
      "id": "1742",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/54q5hg2-KYCGs6",
      "name": "Tríceps kickback com halteres com postura de cegonha",
      "target": "tríceps"
  },
  {
      "id": "1743",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/unuhLp1EvvruFL",
      "name": "Tríceps kickback na bola de exercícios com halteres",
      "target": "tríceps"
  },
  {
      "id": "0437",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/07aveCz3FN8kZd",
      "name": "Rosca martelo com halteres com apoio",
      "target": "deltóides"
  },
  {
      "id": "1765",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/g5y-j-jjlD4Q6-",
      "name": "dumbbell upright row (back pov)",
      "target": "deltóides"
  },
  {
      "id": "0864",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/Ith5KZsUjc8x4m",
      "name": "dumbbell upright shoulder external rotation",
      "target": "deltóides"
  },
  {
      "id": "5201",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/E8SiQ6civxQEXw",
      "name": "dumbbell waiter biceps curl",
      "target": "bíceps"
  },
  {
      "id": "0438",
      "bodyPart": "ombro",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/m-DHWaM6xKvXAX",
      "name": "Elevação com halteres com apoio",
      "target": "deltóides"
  },
  {
      "id": "0439",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/bnzzELSQLUXNw-",
      "name": "Elevação com halteres com apoio",
      "target": "bíceps"
  },
  {
      "id": "2294",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/Ez3Dg8x2Z3Cin3",
      "name": "dumbbell zottman preacher curl",
      "target": "bíceps"
  },
  {
      "id": "2189",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/30WRh4PJ2-QyMq",
      "name": "dumbbells seated triceps extension",
      "target": "tríceps"
  },
  {
      "id": "1167",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/t2THwxsLU9uAl4",
      "name": "dynamic chest stretch (male)",
      "target": "peitoral"
  },
  {
      "id": "3287",
      "bodyPart": "biceps/triceps",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/JV2lGRgPuEuono",
      "name": "elbow dips",
      "target": "tríceps"
  },
  {
      "id": "1772",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/oIlYm7vzb1kLOR",
      "name": "elbow lift - reverse push-up",
      "target": "latíssimo"
  },
  {
      "id": "0443",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/PgJJ1-fB63oV5t",
      "name": "Encolhimento de ombros com halteres com apoio",
      "target": "abdômen"
  },
  {
      "id": "3292",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/dBi46CZ9et302Q",
      "name": "Elevador",
      "target": "latíssimo"
  },
  {
      "id": "1332",
      "bodyPart": "costas",
      "equipment": "bola de estabiliade",
      "gifUrl": "https://v2.exercisedb.io/image/W2YkrpKWF2qlOJ",
      "name": "Elevação Alternada de Braços com Bola de Exercício",
      "target": "dorsal"
  },
  {
      "id": "1333",
      "bodyPart": "costas",
      "equipment": "bola de estabiliade",
      "gifUrl": "https://v2.exercisedb.io/image/PAyJ33PRXHLotp",
      "name": "Extensão das Costas com Braços Estendidos com Bola de Exercício",
      "target": "coluna"
  },
  {
      "id": "1334",
      "bodyPart": "costas",
      "equipment": "bola de estabiliade",
      "gifUrl": "https://v2.exercisedb.io/image/Gv7jwuFY--dAFO",
      "name": "Extensão das Costas com Mãos Atrás da Cabeça com Bola de Exercício",
      "target": "coluna"
  },
  {
      "id": "1335",
      "bodyPart": "costas",
      "equipment": "bola de estabiliade",
      "gifUrl": "https://v2.exercisedb.io/image/0mDB5MelOYEj6K",
      "name": "Extensão das Costas com Joelhos Fora do Chão com Bola de Exercício",
      "target": "coluna"
  },
  {
      "id": "1336",
      "bodyPart": "costas",
      "equipment": "bola de estabiliade",
      "gifUrl": "https://v2.exercisedb.io/image/4GqakFkcmZiYw4",
      "name": "Extensão das Costas com Rotação com Bola de Exercício",
      "target": "coluna"
  },
  {
      "id": "1744",
      "bodyPart": "biceps/triceps",
      "equipment": "bola de estabiliade",
      "gifUrl": "https://v2.exercisedb.io/image/t3l23cInCwWfEV",
      "name": "Mergulho com Bola de Exercício",
      "target": "tríceps"
  },
  {
      "id": "1559",
      "bodyPart": "quadriceps/posterior",
      "equipment": "bola de estabiliade",
      "gifUrl": "https://v2.exercisedb.io/image/6WGzKIxxAkSji3",
      "name": "Alongamento dos Flexores do Quadril com Bola de Exercício",
      "target": "glúteos"
  },
  {
      "id": "1338",
      "bodyPart": "costas",
      "equipment": "bola de estabiliade",
      "gifUrl": "https://v2.exercisedb.io/image/J45GpojUUXJh2q",
      "name": "Abraço com Bola de Exercício",
      "target": "coluna"
  },
  {
      "id": "1339",
      "bodyPart": "costas",
      "equipment": "bola de estabiliade",
      "gifUrl": "https://v2.exercisedb.io/image/TKp298mLjQQUNm",
      "name": "Alongamento do Latíssimo do Dorso com Bola de Exercício",
      "target": "dorsal"
  },
  {
      "id": "1341",
      "bodyPart": "costas",
      "equipment": "bola de estabiliade",
      "gifUrl": "https://v2.exercisedb.io/image/C3IrqX0UCiGRsq",
      "name": "Alongamento Lombar com Bola de Exercício (Pirâmide)",
      "target": "dorsal"
  },
  {
      "id": "1342",
      "bodyPart": "costas",
      "equipment": "bola de estabiliade",
      "gifUrl": "https://v2.exercisedb.io/image/esbWMSbrS-BjgE",
      "name": "Alongamento Lateral do Latíssimo do Dorso com Bola de Exercício",
      "target": "dorsal"
  },
  {
      "id": "1382",
      "bodyPart": "panturrilha",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/G3X0aJ9OIHWOnh",
      "name": "Elevação de Panturrilha com Bola de Exercício na Parede",
      "target": "panturrilha"
  },
  {
      "id": "3241",
      "bodyPart": "panturrilha",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/D0Q0x0QtFU0Tbx",
      "name": "Elevação de Panturrilha com Bola de Exercício na Parede (Bola de Tênis entre os Tornozelos)",
      "target": "panturrilha"
  },
  {
      "id": "3240",
      "bodyPart": "panturrilha",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/OX2ZlH6JH69bam",
      "name": "Elevação de Panturrilha com Bola de Exercício na Parede (Bola de Tênis entre os Joelhos)",
      "target": "panturrilha"
  },
  {
      "id": "1416",
      "bodyPart": "quadriceps/posterior",
      "equipment": "bola de estabiliade",
      "gifUrl": "https://v2.exercisedb.io/image/y2BNsnZIGS3R9t",
      "name": "Rotação do Corpo Inferior em Decúbito Ventral com uma Perna na Bola de Exercício",
      "target": "glúteos"
  },
  {
      "id": "1417",
      "bodyPart": "quadriceps/posterior",
      "equipment": "bola de estabiliade",
      "gifUrl": "https://v2.exercisedb.io/image/2v7FWK1Aj4AifR",
      "name": "Flexão Diagonal com Chute de Isquiotibiais com uma Perna na Bola de Exercício",
      "target": "glúteos"
  },
  {
      "id": "1296",
      "bodyPart": "peito",
      "equipment": "bola de estabiliade",
      "gifUrl": "https://v2.exercisedb.io/image/aMExHKnrFsyY3P",
      "name": "Flexão de Pino com Bola de Exercício",
      "target": "peitoral"
  },
  {
      "id": "1343",
      "bodyPart": "costas",
      "equipment": "bola de estabiliade",
      "gifUrl": "https://v2.exercisedb.io/image/tZksL99V40RtDD",
      "name": "Elevação de Pernas em Decúbito Ventral com Bola de Exercício",
      "target": "coluna"
  },
  {
      "id": "1560",
      "bodyPart": "quadriceps/posterior",
      "equipment": "bola de estabiliade",
      "gifUrl": "https://v2.exercisedb.io/image/lA5FWbc6rFbZBd",
      "name": "Alongamento dos Isquiotibiais Sentado com Bola de Exercício",
      "target": "isquiotibiais"
  },
  {
      "id": "1745",
      "bodyPart": "biceps/triceps",
      "equipment": "bola de estabiliade",
      "gifUrl": "https://v2.exercisedb.io/image/K3d-DtLtrbW9aZ",
      "name": "Alongamento dos Tríceps Sentado com Bola de Exercício",
      "target": "tríceps"
  },
  {
      "id": "1746",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/1mG043zOZy9KD7",
      "name": "Extensão dos Tríceps Supino com Bola de Exercício",
      "target": "tríceps"
  },
  {
      "id": "1747",
      "bodyPart": "biceps/triceps",
      "equipment": "barra W",
      "gifUrl": "https://v2.exercisedb.io/image/6-hMYF4D0EB5dW",
      "name": "Francês com Barra EZ na Bola de Exercício",
      "target": "tríceps"
  },
  {
      "id": "3010",
      "bodyPart": "costas",
      "equipment": "barra W",
      "gifUrl": "https://v2.exercisedb.io/image/ELfI3Bus6H91rm",
      "name": "Pulôver com Braços Dobrados com Barra EZ",
      "target": "dorsal"
  },
  {
      "id": "1748",
      "bodyPart": "biceps/triceps",
      "equipment": "barra W",
      "gifUrl": "https://v2.exercisedb.io/image/4CiosQ-8Cp7SJ2",
      "name": "Extensão dos Tríceps em Supino com Pegada Fechada Atrás da Cabeça com Barra EZ",
      "target": "tríceps"
  },
  {
      "id": "1344",
      "bodyPart": "costas",
      "equipment": "barra W",
      "gifUrl": "https://v2.exercisedb.io/image/FsY0iMcKjVXdvH",
      "name": "Remada Curvada com Pegada Reversa com Barra EZ",
      "target": "latíssimo"
  },
  {
      "id": "1682",
      "bodyPart": "biceps/triceps",
      "equipment": "barra W",
      "gifUrl": "https://v2.exercisedb.io/image/hC7ZTW-UMz1pk5",
      "name": "Rosca de bíceps com halteres com apoio",
      "target": "bíceps"
  },
  {
      "id": "1749",
      "bodyPart": "biceps/triceps",
      "equipment": "barra W",
      "gifUrl": "https://v2.exercisedb.io/image/Q5BN9v5mgCfDG9",
      "name": "Francês em Pé com Barra EZ",
      "target": "tríceps"
  },
  {
      "id": "0445",
      "bodyPart": "ombro",
      "equipment": "barra W",
      "gifUrl": "https://v2.exercisedb.io/image/1eDBaa092zuo0i",
      "name": "Pressão Anti-Gravidade com Barra EZ",
      "target": "deltóides"
  },
  {
      "id": "1627",
      "bodyPart": "biceps/triceps",
      "equipment": "barra W",
      "gifUrl": "https://v2.exercisedb.io/image/iBRzdFtgifIi6j",
      "name": "Rosca Scott com Barra EZ e Pegada Fechada",
      "target": "bíceps"
  },
  {
      "id": "0446",
      "bodyPart": "biceps/triceps",
      "equipment": "barra W",
      "gifUrl": "https://v2.exercisedb.io/image/rA3nOADhbFiPzX",
      "name": "Rosca com Pegada Fechada com Barra EZ",
      "target": "bíceps"
  },
  {
      "id": "0447",
      "bodyPart": "biceps/triceps",
      "equipment": "barra W",
      "gifUrl": "https://v2.exercisedb.io/image/uQYkgDTtcMeZ9d",
      "name": "Rosca com Barra EZ",
      "target": "bíceps"
  },
  {
      "id": "0448",
      "bodyPart": "biceps/triceps",
      "equipment": "barra W",
      "gifUrl": "https://v2.exercisedb.io/image/E8KUnThwspXJKh",
      "name": "Pressão Facial com Pegada Fechada em Declive com Barra EZ",
      "target": "tríceps"
  },
  {
      "id": "2186",
      "bodyPart": "biceps/triceps",
      "equipment": "barra W",
      "gifUrl": "https://v2.exercisedb.io/image/XDM20Y4OhNsrTJ",
      "name": "Extensão de Tríceps em Declive com Barra EZ",
      "target": "tríceps"
  },
  {
      "id": "0449",
      "bodyPart": "biceps/triceps",
      "equipment": "barra W",
      "gifUrl": "https://v2.exercisedb.io/image/Vii38ic6ajclNN",
      "name": "Extensão de Tríceps em Inclinação com Barra EZ",
      "target": "tríceps"
  },
  {
      "id": "0450",
      "bodyPart": "biceps/triceps",
      "equipment": "barra W",
      "gifUrl": "https://v2.exercisedb.io/image/2Y-hinIj2AX3wf",
      "name": "Supino com Barra EZ com Pegada JM",
      "target": "tríceps"
  },
  {
      "id": "0451",
      "bodyPart": "biceps/triceps",
      "equipment": "barra W",
      "gifUrl": "https://v2.exercisedb.io/image/cVOSN6S4DH6kZ-",
      "name": "Rosca Reversa com Barra EZ",
      "target": "bíceps"
  },
  {
      "id": "0452",
      "bodyPart": "biceps/triceps",
      "equipment": "barra W",
      "gifUrl": "https://v2.exercisedb.io/image/vqw-l-9Ch4dONH",
      "name": "Rosca Scott Reversa com Barra EZ",
      "target": "bíceps"
  },
  {
      "id": "1458",
      "bodyPart": "biceps/triceps",
      "equipment": "barra W",
      "gifUrl": "https://v2.exercisedb.io/image/Rtkmf4lLCKLQhH",
      "name": "Rosca Sentado com Barra EZ",
      "target": "bíceps"
  },
  {
      "id": "0453",
      "bodyPart": "biceps/triceps",
      "equipment": "barra W",
      "gifUrl": "https://v2.exercisedb.io/image/cUyxuUKE6I2pGV",
      "name": "Extensão de Tríceps Sentado com Barra EZ",
      "target": "tríceps"
  },
  {
      "id": "0454",
      "bodyPart": "biceps/triceps",
      "equipment": "barra W",
      "gifUrl": "https://v2.exercisedb.io/image/JM48IVw6pK1h3x",
      "name": "Rosca Aranha com Barra EZ",
      "target": "bíceps"
  },
  {
      "id": "1628",
      "bodyPart": "biceps/triceps",
      "equipment": "barra W",
      "gifUrl": "https://v2.exercisedb.io/image/xeB3AvmTSuVkVP",
      "name": "Rosca Aranha com Barra EZ",
      "target": "bíceps"
  },
  {
      "id": "2404",
      "bodyPart": "biceps/triceps",
      "equipment": "barra W",
      "gifUrl": "https://v2.exercisedb.io/image/zeYNpOKkHPJDQi",
      "name": "Rosca Bíceps com Barra EZ (com Braçadeira de Braço)",
      "target": "bíceps"
  },
  {
      "id": "2432",
      "bodyPart": "biceps/triceps",
      "equipment": "barra W",
      "gifUrl": "https://v2.exercisedb.io/image/QuuleDHHYLLCGN",
      "name": "Supino com Pegada Fechada com Barra EZ",
      "target": "tríceps"
  },
  {
      "id": "2741",
      "bodyPart": "biceps/triceps",
      "equipment": "barra W",
      "gifUrl": "https://v2.exercisedb.io/image/p8HME0r0TXuO33",
      "name": "Rosca Bíceps em Pé com Barra EZ e Pegada Larga",
      "target": "bíceps"
  },
  {
      "id": "2133",
      "bodyPart": "quadriceps/posterior",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/xw3Q86KWCFXEP2",
      "name": "Caminhada do Agricultor",
      "target": "quadríceps"
  },
  {
      "id": "0455",
      "bodyPart": "antebraço",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/rogLZaJVME0VFt",
      "name": "Rosca com os Dedos",
      "target": "antebraços"
  },
  {
      "id": "3303",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/MZebXmS0DFaBss",
      "name": "Bandeira",
      "target": "abdômen"
  },
  {
      "id": "0456",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/vUq4FnNIUjlfpb",
      "name": "Abdominal com Flexão de Pernas (Joelho Flexionado)",
      "target": "abdômen"
  },
  {
      "id": "0457",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/OZxvn3ph-yWxCL",
      "name": "Abdominal com Flexão de Pernas (Braços Estendidos)",
      "target": "abdômen"
  },
  {
      "id": "0458",
      "bodyPart": "peito",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/7DWCdpQEkXUZgh",
      "name": "Crucifixo no Chão (com Barra)",
      "target": "peitoral"
  },
  {
      "id": "0459",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/7sOp1bY4mG-DTA",
      "name": "Chutes Alternados",
      "target": "glúteos"
  },
  {
      "id": "1472",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/3sbuRfToOWxI6N",
      "name": "Salto para Frente",
      "target": "quadríceps"
  },
  {
      "id": "3470",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/Zai8ldm3B-8qVZ",
      "name": "Avanço para Frente (Masculino)",
      "target": "glúteos"
  },
  {
      "id": "3194",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/Nk91HIj5n7f4Ck",
      "name": "Agachamento Frankenstein",
      "target": "glúteos"
  },
  {
      "id": "2429",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/fr0DFCmSmcuruY",
      "name": "Crunch de Sapo",
      "target": "abdômen"
  },
  {
      "id": "3301",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/FPdGWcs7m7GuLw",
      "name": "Plancha de Sapo",
      "target": "abdômen"
  },
  {
      "id": "3296",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/qgApDcUDutg5nk",
      "name": "Alavanca Frontal",
      "target": "abdômen"
  },
  {
      "id": "3295",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/NUM35Ra0k8r9dN",
      "name": "Repetições de Alavanca Frontal",
      "target": "latíssimo"
  },
  {
      "id": "0464",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/-8L5iTHbFeGsyb",
      "name": "Prancha Frontal com Torção",
      "target": "abdômen"
  },
  {
      "id": "3315",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/dV4kA-jOUA9Hhs",
      "name": "Maltese Completa",
      "target": "abdômen"
  },
  {
      "id": "3299",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/ej34EUlzNbjac2",
      "name": "Plancha Completa",
      "target": "abdômen"
  },
  {
      "id": "3327",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/lmllIPTeaNAiO6",
      "name": "Flexão na Plancha Completa",
      "target": "peitoral"
  },
  {
      "id": "0466",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/2QzNnsOL5JGwoY",
      "name": "Esterno de Gironda com Queixo",
      "target": "dorsal"
  },
  {
      "id": "3561",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/Zy-7LrLqGO4CYK",
      "name": "Marcha de Ponte Glútea",
      "target": "glúteos"
  },
  {
      "id": "3523",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/F8v7KpkL7YXoX7",
      "name": "Ponte Glútea com Ambas as Pernas no Banco (Masculino)",
      "target": "glúteos"
  },
  {
      "id": "3193",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/zzXAKLrMUmNyNr",
      "name": "Elevação de Glúteo com Flexão do Quadril",
      "target": "isquiotibiais"
  },
  {
      "id": "0467",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/RH1vI8jDsu8pv3",
      "name": "Queixo Gorila",
      "target": "abdômen"
  },
  {
      "id": "0469",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/4d0Ej0r7rvDDj5",
      "name": "Crunch de Virilha",
      "target": "abdômen"
  },
  {
      "id": "1383",
      "bodyPart": "panturrilha",
      "equipment": "hack",
      "gifUrl": "https://v2.exercisedb.io/image/kxhFv6KKNYHtQo",
      "name": "Elevação de Panturrilha na Máquina Hack",
      "target": "panturrilha"
  },
  {
      "id": "1384",
      "bodyPart": "panturrilha",
      "equipment": "hack",
      "gifUrl": "https://v2.exercisedb.io/image/aJC2LWjq1OvDou",
      "name": "Elevação de Panturrilha Unilateral na Máquina Hack",
      "target": "panturrilha"
  },
  {
      "id": "3221",
      "bodyPart": "cardio",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/UCkPcntKlYa2FF",
      "name": "Flexão de Joelhos (Masculino)",
      "target": "cardio"
  },
  {
      "id": "3202",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/Qs93PRGCQdDAoo",
      "name": "Abdominal Semi Sentado (Masculino)",
      "target": "abdômen"
  },
  {
      "id": "1511",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/yBvG8EVZxSO497",
      "name": "Alongamento dos Isquiotibiais",
      "target": "isquiotibiais"
  },
  {
      "id": "2139",
      "bodyPart": "peito",
      "equipment": "cicloergômetro",
      "gifUrl": "https://v2.exercisedb.io/image/7sa8J9id1mu8u6",
      "name": "Pedalada de Mãos",
      "target": "peitoral"
  },
  {
      "id": "3218",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/S-nezGrwREawnx",
      "name": "Toque Circular nos Dedos com Mãos Entrelaçadas (Masculino)",
      "target": "glúteos"
  },
  {
      "id": "3215",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/FPhjTsJodP0WJH",
      "name": "Toque Circular nos Dedos Revertido com Mãos Entrelaçadas (Masculino)",
      "target": "glúteos"
  },
  {
      "id": "3302",
      "bodyPart": "biceps/triceps",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/QI1YhROn-bywqI",
      "name": "Parada de Mão",
      "target": "tríceps"
  },
  {
      "id": "0471",
      "bodyPart": "biceps/triceps",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/hMMsBUiURcKpgL",
      "name": "Flexão de Braço na Parada de Mão",
      "target": "tríceps"
  },
  {
      "id": "1764",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/YZp-nNS5a9geFu",
      "name": "Elevação de Quadril com Pernas Penduradas",
      "target": "abdômen"
  },
  {
      "id": "0472",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/znxWlvliYg20qW",
      "name": "Elevação de Pernas Penduradas",
      "target": "abdômen"
  },
  {
      "id": "1761",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/GWTz75KlEmSmDt",
      "name": "Elevação de Joelhos com Pendência Lateral",
      "target": "abdômen"
  },
  {
      "id": "0473",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/ZibTl5W7tOepYD",
      "name": "Elevação de Pernas Penduradas em V",
      "target": "abdômen"
  },
  {
      "id": "0474",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/AvZX7BTIFrgD-O",
      "name": "Elevação de Quadril com Pernas Estendidas Penduradas",
      "target": "abdômen"
  },
  {
      "id": "0475",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/Tx1for4saZhpam",
      "name": "Elevação de Pernas Estendidas Penduradas",
      "target": "abdômen"
  },
  {
      "id": "0476",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/yl78ph3yHPeTua",
      "name": "Elevação de Quadril com Pernas Estendidas e Torção Penduradas",
      "target": "abdômen"
  },
  {
      "id": "3636",
      "bodyPart": "cardio",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/lJcWMRDJbSQJ4m",
      "name": "Elevação de Joelho Contra a Parede",
      "target": "cardio"
  },
  {
      "id": "0484",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/heX8TEdEhaX4Ne",
      "name": "Elevação de Quadril (Joelho Flexionado)",
      "target": "abdômen"
  },
  {
      "id": "1418",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/6kWiZPXKWWF1hs",
      "name": "Abraço dos Joelhos ao Peito",
      "target": "glúteos"
  },
  {
      "id": "3234",
      "bodyPart": "peito",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/9Mh0xwxMwLUnAV",
      "name": "Crucifixo com Halteres",
      "target": "peitoral"
  },
  {
      "id": "0489",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/SvUk9pJKfHpLDj",
      "name": "Hiperextensão",
      "target": "coluna"
  },
  {
      "id": "0488",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/KmU3jVmjX3wCgu",
      "name": "Hiperextensão (no Banco)",
      "target": "coluna"
  },
  {
      "id": "3289",
      "bodyPart": "biceps/triceps",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/wQc3YwSVxU3YHL",
      "name": "Mergulhos Impossíveis",
      "target": "tríceps"
  },
  {
      "id": "1471",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/aHaUBLxzVAnpI6",
      "name": "Gusanito",
      "target": "abdômen"
  },
  {
      "id": "3698",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/FOnxObUyri2Khu",
      "name": "Gusanito Versão 2",
      "target": "abdômen"
  },
  {
      "id": "0490",
      "bodyPart": "biceps/triceps",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/1YrlwZJmgQOKt4",
      "name": "Flexão de Braço em Inclinação com Pegada Fechada",
      "target": "tríceps"
  },
  {
      "id": "0491",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/JjVDeGDoSOq73Z",
      "name": "Elevação de Quadril em Inclinação (Perna Estendida)",
      "target": "abdômen"
  },
  {
      "id": "0492",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/0HTh2yViX-6vK6",
      "name": "Salto Profundo na Flexão de Braço em Inclinação",
      "target": "peitoral"
  },
  {
      "id": "0493",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/gtazpzbNelGLX4",
      "name": "Flexão de Braço em Inclinação",
      "target": "peitoral"
  },
  {
      "id": "3785",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/d7QMJbiRT5k5ck",
      "name": "Flexão de Braço em Inclinação (na Caixa)",
      "target": "peitoral"
  },
  {
      "id": "0494",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/zGVVni3q-qpOBU",
      "name": "Flexão de Braço Reversa em Inclinação",
      "target": "peitoral"
  },
  {
      "id": "3011",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/8nVu8XouCv8YsI",
      "name": "Flexão de Escápulas em Inclinação",
      "target": "serrátil"
  },
  {
      "id": "0495",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/YfhjSbhZDVhFKl",
      "name": "Abdominal com Torção em Inclinação",
      "target": "abdômen"
  },
  {
      "id": "1564",
      "bodyPart": "quadriceps/posterior",
      "equipment": "corda naval",
      "gifUrl": "https://v2.exercisedb.io/image/8fi-WnYepFepVj",
      "name": "Alongamento Intermediário dos Flexores do Quadril e Quadríceps",
      "target": "quadríceps"
  },
  {
      "id": "0496",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/GGwUwNKyaz9u1F",
      "name": "Curl Invertido (com Suporte no Banco)",
      "target": "isquiotibiais"
  },
  {
      "id": "2400",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/AZVNG40GWUk8df",
      "name": "Curl Invertido (na Máquina de Cabo de Puxada)",
      "target": "isquiotibiais"
  },
  {
      "id": "0499",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/d3L1vP27enY6qe",
      "name": "Remada Invertida",
      "target": "latíssimo"
  },
  {
      "id": "2300",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/NoOh9LnZNQBvse",
      "name": "Remada Invertida com Joelhos Flexionados",
      "target": "latíssimo"
  },
  {
      "id": "2298",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/9c8ruBFJbU9Fkn",
      "name": "Remada Invertida no Banco",
      "target": "latíssimo"
  },
  {
      "id": "0497",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/bY6DfjySw0mFOb",
      "name": "Remada Invertida Versão 2",
      "target": "latíssimo"
  },
  {
      "id": "0498",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/7FtbOAuOAiklpO",
      "name": "Remada Invertida com Alças",
      "target": "latíssimo"
  },
  {
      "id": "1419",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/URd0qtScq7ucy0",
      "name": "Alongamento em Cruz de Ferro",
      "target": "glúteos"
  },
  {
      "id": "1297",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/hdOTUvngXreoLn",
      "name": "Compressão Isométrica do Peito",
      "target": "peitoral"
  },
  {
      "id": "0500",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/7ODscZur0oIsC0",
      "name": "Limpa Isométrica",
      "target": "peitoral"
  },
  {
      "id": "0501",
      "bodyPart": "cardio",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/h2iDOqdgExNFvt",
      "name": "Burpee com Salto",
      "target": "cardio"
  },
  {
      "id": "3224",
      "bodyPart": "cardio",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/OtZqa9iy89CXU4",
      "name": "Salto Jack (Masculino)",
      "target": "cardio"
  },
  {
      "id": "0507",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/voW1vD049TljIo",
      "name": "Abdominal Jackknife",
      "target": "abdômen"
  },
  {
      "id": "0508",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/i3g9fMeyz8Dj3k",
      "name": "Abdominal Janda",
      "target": "abdômen"
  },
  {
      "id": "2612",
      "bodyPart": "cardio",
      "equipment": "corda naval",
      "gifUrl": "https://v2.exercisedb.io/image/nMMD4qbbl5hR5Q",
      "name": "Pular Corda",
      "target": "cardio"
  },
  {
      "id": "0514",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/u5StY7DwfP2hjD",
      "name": "Agachamento com Salto",
      "target": "glúteos"
  },
  {
      "id": "0513",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/5FkRifBp35jBeg",
      "name": "Agachamento com Salto Versão 2",
      "target": "glúteos"
  },
  {
      "id": "0517",
      "bodyPart": "core",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/0lUwhCh6qatkEx",
      "name": "Moinho de Vento Avançado com Kettlebell",
      "target": "abdômen"
  },
  {
      "id": "0518",
      "bodyPart": "antebraço",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/TFPhsubxlEDlDu",
      "name": "Hang Clean Alternado com Kettlebell",
      "target": "antebraços"
  },
  {
      "id": "0520",
      "bodyPart": "ombro",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/KUyMHWeHInueqe",
      "name": "Pressão Alternada com Kettlebell",
      "target": "deltóides"
  },
  {
      "id": "0519",
      "bodyPart": "peito",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/vZKk0vUaD0-WwV",
      "name": "Pressão Alternada no Chão com Kettlebell",
      "target": "peitoral"
  },
  {
      "id": "0521",
      "bodyPart": "costas",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/VLmEg1iPStxpgz",
      "name": "Remada Renegada Alternada com Kettlebell",
      "target": "latíssimo"
  },
  {
      "id": "0522",
      "bodyPart": "costas",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/TXGxRuuURa7-Vb",
      "name": "Remada Alternada com Kettlebell",
      "target": "latíssimo"
  },
  {
      "id": "0523",
      "bodyPart": "ombro",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/eNB0DtDEs94z8q",
      "name": "Pressão Arnold com Kettlebell",
      "target": "deltóides"
  },
  {
      "id": "0524",
      "bodyPart": "core",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/aepF7z8gkfcCqd",
      "name": "Pressão Curvada com Kettlebell",
      "target": "abdômen"
  },
  {
      "id": "0525",
      "bodyPart": "biceps/triceps",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/mR2t5kSOquwYe9",
      "name": "Limpa com Kettlebell de Ponta para Cima da Posição de Pendurar",
      "target": "bíceps"
  },
  {
      "id": "0526",
      "bodyPart": "biceps/triceps",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/cVV7qbrzgzYe0N",
      "name": "Hang Clean Alternado com Kettlebell Duplo",
      "target": "bíceps"
  },
  {
      "id": "0527",
      "bodyPart": "ombro",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/yOeacY5YT9hwt8",
      "name": "Jerk Duplo com Kettlebell",
      "target": "deltóides"
  },
  {
      "id": "0528",
      "bodyPart": "ombro",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/Bc5FOZFg6dibeQ",
      "name": "Pressão Dupla com Kettlebell",
      "target": "deltóides"
  },
  {
      "id": "0529",
      "bodyPart": "ombro",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/rAo0Iv1LvQW3fW",
      "name": "Snatch Duplo com Kettlebell",
      "target": "deltóides"
  },
  {
      "id": "0530",
      "bodyPart": "core",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/y5J6L7yp71CYxz",
      "name": "Moinho de Vento Duplo com Kettlebell",
      "target": "abdômen"
  },
  {
      "id": "0531",
      "bodyPart": "peito",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/glo4AWxv9n2Cc5",
      "name": "Pressão de Braço Estendido com Kettlebell em Amplitude Estendida no Chão",
      "target": "peitoral"
  },
  {
      "id": "0532",
      "bodyPart": "core",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/1QKCViQ-OpnbxP",
      "name": "Figura 8 com Kettlebell",
      "target": "abdômen"
  },
  {
      "id": "0533",
      "bodyPart": "quadriceps/posterior",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/dZKfRAHas1gGiY",
      "name": "Agachamento Frontal com Kettlebell",
      "target": "glúteos"
  },
  {
      "id": "0534",
      "bodyPart": "quadriceps/posterior",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/hQ5D8BFGPLDZxv",
      "name": "Agachamento Goblet com Kettlebell",
      "target": "glúteos"
  },
  {
      "id": "0535",
      "bodyPart": "quadriceps/posterior",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/9O9-ovjsXnNLvh",
      "name": "Hang Clean com Kettlebell",
      "target": "isquiotibiais"
  },
  {
      "id": "0536",
      "bodyPart": "quadriceps/posterior",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/bdsgpzCsCCP7u1",
      "name": "Passagem de Agachamento com Kettlebell",
      "target": "glúteos"
  },
  {
      "id": "0537",
      "bodyPart": "ombro",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/TsJsQwDyLChWKY",
      "name": "Clean and Jerk de Um Braço com Kettlebell",
      "target": "deltóides"
  },
  {
      "id": "1298",
      "bodyPart": "peito",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/tDHttgLL-4NpE4",
      "name": "Pressão de Um Braço no Chão com Kettlebell",
      "target": "peitoral"
  },
  {
      "id": "0538",
      "bodyPart": "ombro",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/JUgX56iKYk6eAs",
      "name": "Jerk de Um Braço com Kettlebell",
      "target": "deltóides"
  },
  {
      "id": "0539",
      "bodyPart": "ombro",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/ejTQ4O8hI8nYVu",
      "name": "Pressão Militar de Um Braço para o Lado com Kettlebell",
      "target": "deltóides"
  },
  {
      "id": "0540",
      "bodyPart": "ombro",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/eVYZJskhMGmEsU",
      "name": "Pressão de Um Braço com Kettlebell",
      "target": "deltóides"
  },
  {
      "id": "0541",
      "bodyPart": "costas",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/dffVZ8r7gcPyzs",
      "name": "Remada de Um Braço com Kettlebell",
      "target": "latíssimo"
  },
  {
      "id": "0542",
      "bodyPart": "ombro",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/UXmaQAb5zWvSeY",
      "name": "Snatch de Um Braço com Kettlebell",
      "target": "deltóides"
  },
  {
      "id": "0543",
      "bodyPart": "ombro",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/4EfLifsY9eroeK",
      "name": "Pernas de Super Pirata com Kettlebell",
      "target": "deltóides"
  },
  {
      "id": "0544",
      "bodyPart": "quadriceps/posterior",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/qiOBkP5v1qDZ21",
      "name": "Agachamento Pistola com Kettlebell",
      "target": "glúteos"
  },
  {
      "id": "0545",
      "bodyPart": "peito",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/v3eKkhNtN-oRyX",
      "name": "Flexão Pliométrica com Kettlebell",
      "target": "peitoral"
  },
  {
      "id": "0546",
      "bodyPart": "ombro",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/92Vw1A5Ev0ZZkA",
      "name": "Pressão Sentada com Kettlebell",
      "target": "deltóides"
  },
  {
      "id": "1438",
      "bodyPart": "ombro",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/3YypBw1-XGdp-F",
      "name": "Pressão Militar com Ambos os Braços Sentado com Kettlebell",
      "target": "deltóides"
  },
  {
      "id": "0547",
      "bodyPart": "ombro",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/bbzCvEGKUEA5Hq",
      "name": "Pressão Alternada com Kettlebell",
      "target": "deltóides"
  },
  {
      "id": "0548",
      "bodyPart": "costas",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/bi35PMRmVVdUyc",
      "name": "Puxada Alta Sumô com Kettlebell",
      "target": "trapézio"
  },
  {
      "id": "0549",
      "bodyPart": "quadriceps/posterior",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/CWKKbSjixCPnSv",
      "name": "Balanço com Kettlebell",
      "target": "glúteos"
  },
  {
      "id": "0550",
      "bodyPart": "ombro",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/af9lsTjVyoAtF9",
      "name": "Agachamento com Impulso e Pressão com Kettlebell",
      "target": "deltóides"
  },
  {
      "id": "0551",
      "bodyPart": "quadriceps/posterior",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/i52nDeQg0YCA1r",
      "name": "Levantamento Turco com Kettlebell (Estilo Agachamento)",
      "target": "glúteos"
  },
  {
      "id": "0552",
      "bodyPart": "ombro",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/Qp4OIVERNME9vf",
      "name": "Limpa com Ambos os Braços com Kettlebell",
      "target": "deltóides"
  },
  {
      "id": "0553",
      "bodyPart": "ombro",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/TpHMCKOlI2YI0q",
      "name": "Pressão Militar com Ambos os Braços com Kettlebell",
      "target": "deltóides"
  },
  {
      "id": "1345",
      "bodyPart": "costas",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/yHhRIJfVPEGfJ6",
      "name": "Remada com Ambos os Braços com Kettlebell",
      "target": "latíssimo"
  },
  {
      "id": "0554",
      "bodyPart": "core",
      "equipment": "kettlebell",
      "gifUrl": "https://v2.exercisedb.io/image/ypnIqAcTzqi32O",
      "name": "Moinho de Vento com Kettlebell",
      "target": "abdômen"
  },
  {
      "id": "0555",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/1iZjiX1qIyH5oc",
      "name": "Abdominal com Extensão de Pernas",
      "target": "isquiotibiais"
  },
  {
      "id": "0558",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/pbYNepGH2QCeDv",
      "name": "Muscle Up com Balanço",
      "target": "dorsal"
  },
  {
      "id": "3640",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/6N7GX-tBx68ZwP",
      "name": "Crunch com Toque no Joelho",
      "target": "abdômen"
  },
  {
      "id": "1420",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/XSz5n8nasCVncT",
      "name": "Agachamento com Salto de Joelhos",
      "target": "glúteos"
  },
  {
      "id": "1346",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/xkk04keqngkbNZ",
      "name": "Alongamento do Latíssimo do Dorso em Posição de Joelhos",
      "target": "dorsal"
  },
  {
      "id": "3239",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/KV3w8PCM1psLqP",
      "name": "Prancha de Joelhos com Toque no Ombro (Masculino)",
      "target": "abdômen"
  },
  {
      "id": "3211",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/9lcokLwp5j0V6F",
      "name": "Flexão de Braço de Joelhos (Masculino)",
      "target": "peitoral"
  },
  {
      "id": "3288",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/1dARlGDddyB6yP",
      "name": "Mergulhos Coreanos",
      "target": "peitoral"
  },
  {
      "id": "3418",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/K5SjFx-EzztWY6",
      "name": "Pull-Up em L",
      "target": "dorsal"
  },
  {
      "id": "3419",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/yPemg4BIthBSWB",
      "name": "L-Sit no Chão",
      "target": "abdômen"
  },
  {
      "id": "0562",
      "bodyPart": "core",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/fPIjRGCoCaFldz",
      "name": "Giro de 180 Graus com Barra Fixa",
      "target": "abdômen"
  },
  {
      "id": "3237",
      "bodyPart": "ombro",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/Eu8ZwNb2YEm8tN",
      "name": "Elevação Lateral com Barra Fixa",
      "target": "deltóides"
  },
  {
      "id": "3300",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/fzuypaw-92VVSg",
      "name": "Plancha Inclinada",
      "target": "abdômen"
  },
  {
      "id": "2271",
      "bodyPart": "ombro",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/ouVRqIujlHt2Bf",
      "name": "Gancho Esquerdo. Boxe",
      "target": "deltóides"
  },
  {
      "id": "0570",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/1chHOygG1lZ9Oh",
      "name": "Puxada de Pernas em Banco Plano",
      "target": "abdômen"
  },
  {
      "id": "1576",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/mh0hJ43LQQXOnA",
      "name": "Alongamento dos Isquiotibiais Elevando a Perna",
      "target": "isquiotibiais"
  },
  {
      "id": "2287",
      "bodyPart": "quadriceps/posterior",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/IKG9e94siF5fPE",
      "name": "Pressão Alternada com Pernas com Alavanca",
      "target": "quadríceps"
  },
  {
      "id": "0571",
      "bodyPart": "costas",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/G87ABBOFXZ-Tip",
      "name": "Remada Sentada com Pegada Estreita Alternada com Alavanca",
      "target": "latíssimo"
  },
  {
      "id": "0572",
      "bodyPart": "costas",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/ymK8oHv93ZIiFx",
      "name": "Chin-Up com Ajuda de Alavanca",
      "target": "dorsal"
  },
  {
      "id": "0573",
      "bodyPart": "costas",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/gakoXnDo9Ge9by",
      "name": "Extensão das Costas com Alavanca",
      "target": "coluna"
  },
  {
      "id": "0574",
      "bodyPart": "costas",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/dj2vzU6JFfRBsJ",
      "name": "Remada Curvada com Alavanca",
      "target": "latíssimo"
  },
  {
      "id": "3200",
      "bodyPart": "costas",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/dTk1BW3nlWGlQZ",
      "name": "Remada Curvada com Alavanca e Barra em V",
      "target": "latíssimo"
  },
  {
      "id": "0575",
      "bodyPart": "biceps/triceps",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/oagL20IncSDfB8",
      "name": "Rosca Bíceps com Alavanca",
      "target": "bíceps"
  },
  {
      "id": "2289",
      "bodyPart": "panturrilha",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/zUAPFXPpP8-ZOy",
      "name": "Pressão de Panturrilha com Alavanca",
      "target": "panturrilha"
  },
  {
      "id": "0577",
      "bodyPart": "peito",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/bGj05JITBAievo",
      "name": "Pressão Peitoral com Alavanca",
      "target": "peitoral"
  },
  {
      "id": "0576",
      "bodyPart": "peito",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/Me7Id-PXByrpVa",
      "name": "Pressão Peitoral com Alavanca",
      "target": "peitoral"
  },
  {
      "id": "0578",
      "bodyPart": "quadriceps/posterior",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/YG1FvD2b7OQmap",
      "name": "Levantamento Terra com Alavanca",
      "target": "glúteos"
  },
  {
      "id": "1300",
      "bodyPart": "peito",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/DpMTJrnarnCEYm",
      "name": "Pressão Peitoral Declinada com Alavanca",
      "target": "peitoral"
  },
  {
      "id": "1253",
      "bodyPart": "panturrilha",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/3PZ6d7oD0akyCY",
      "name": "Elevação de Panturrilha com Alavanca de Burro",
      "target": "panturrilha"
  },
  {
      "id": "0579",
      "bodyPart": "costas",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/s8L6plRl23VEFz",
      "name": "Puxada Frontal com Alavanca",
      "target": "dorsal"
  },
  {
      "id": "0580",
      "bodyPart": "costas",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/VlOU6bTQtSMuuF",
      "name": "Encolhimento sem Pegada com Alavanca",
      "target": "trapézio"
  },
  {
      "id": "1439",
      "bodyPart": "costas",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/1RxegSfnfsM6ba",
      "name": "Encolhimento sem Pegada com Alavanca Versão 2",
      "target": "trapézio"
  },
  {
      "id": "2288",
      "bodyPart": "antebraço",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/jvCcSFYDulxUc7",
      "name": "Pegada sem Pegada com Alavanca",
      "target": "antebraços"
  },
  {
      "id": "1615",
      "bodyPart": "biceps/triceps",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/UICLeJlWMmNve-",
      "name": "Rosca Martelo em Supino com Alavanca",
      "target": "bíceps"
  },
  {
      "id": "0581",
      "bodyPart": "costas",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/6fhoZfGOiddpoF",
      "name": "Remada Alta com Alavanca",
      "target": "latíssimo"
  },
  {
      "id": "2286",
      "bodyPart": "quadriceps/posterior",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/UZgfY4nXPWxEhd",
      "name": "Extensão de Quadril com Alavanca Versão 2",
      "target": "glúteos"
  },
  {
      "id": "2611",
      "bodyPart": "quadriceps/posterior",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/3FAmCMR704X0NW",
      "name": "Pressão de Perna em Posição Horizontal com Alavanca",
      "target": "glúteos"
  },
  {
      "id": "1299",
      "bodyPart": "peito",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/uXXv0wi71PUQnN",
      "name": "Pressão Peitoral Inclinada com Alavanca",
      "target": "peitoral"
  },
  {
      "id": "1479",
      "bodyPart": "peito",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/EYvABc8D8CS9xP",
      "name": "Pressão Peitoral Inclinada com Alavanca Versão 2",
      "target": "peitoral"
  },
  {
      "id": "0582",
      "bodyPart": "quadriceps/posterior",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/XCtyAK-JSvX1pm",
      "name": "Flexão de Pernas com Alavanca Ajoelhado",
      "target": "isquiotibiais"
  },
  {
      "id": "0583",
      "bodyPart": "core",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/Yt6bX-P57fH9d1",
      "name": "Torção Ajoelhada com Alavanca",
      "target": "abdômen"
  },
  {
      "id": "0584",
      "bodyPart": "ombro",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/uCqaIBbQHgAkU0",
      "name": "Elevação Lateral com Alavanca",
      "target": "deltóides"
  },
  {
      "id": "0585",
      "bodyPart": "quadriceps/posterior",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/nQ73Upjeg6lhA0",
      "name": "Extensão de Pernas com Alavanca",
      "target": "quadríceps"
  },
  {
      "id": "0586",
      "bodyPart": "quadriceps/posterior",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/WCdGjCO4jw9AU1",
      "name": "Flexão de Pernas Deitado com Alavanca",
      "target": "isquiotibiais"
  },
  {
      "id": "3195",
      "bodyPart": "quadriceps/posterior",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/JCVpGYlcWHITxu",
      "name": "Flexão de Pernas Deitado com Alavanca Dois-para-Um",
      "target": "isquiotibiais"
  },
  {
      "id": "0587",
      "bodyPart": "ombro",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/kNSJD13C90aTkI",
      "name": "Pressão Militar com Alavanca",
      "target": "deltóides"
  },
  {
      "id": "0588",
      "bodyPart": "costas",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/I6zktFfE2iu88K",
      "name": "Remada Sentada com Pegada Estreita com Alavanca",
      "target": "latíssimo"
  },
  {
      "id": "0589",
      "bodyPart": "costas",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/9cuYxTnRxDDC24",
      "name": "Remada Curvada com Alavanca de Um Braço",
      "target": "latíssimo"
  },
  {
      "id": "1356",
      "bodyPart": "costas",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/I1NaaM6Ju6Zs-c",
      "name": "Remada Alta Lateral de Um Braço com Alavanca",
      "target": "latíssimo"
  },
  {
      "id": "1347",
      "bodyPart": "costas",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/AkVQMXvo8AzdHD",
      "name": "Puxada Lateral Ampla de Um Braço com Alavanca",
      "target": "dorsal"
  },
  {
      "id": "0590",
      "bodyPart": "ombro",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/IVF9qCvYovfVZU",
      "name": "Pressão de Ombro de Um Braço com Alavanca",
      "target": "deltóides"
  },
  {
      "id": "0591",
      "bodyPart": "biceps/triceps",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/qXUq7EKPM1qtpy",
      "name": "Mergulho de Tríceps de Cima com Alavanca",
      "target": "tríceps"
  },
  {
      "id": "0592",
      "bodyPart": "biceps/triceps",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/Kwzr5Fi9zJejUS",
      "name": "Rosca em Banco Scott com Alavanca",
      "target": "bíceps"
  },
  {
      "id": "1614",
      "bodyPart": "biceps/triceps",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/q1L6gztfVmCb0f",
      "name": "Rosca Scott com Alavanca Versão 2",
      "target": "bíceps"
  },
  {
      "id": "2285",
      "bodyPart": "costas",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/obGQsfJ52-5M1b",
      "name": "Pulôver com Alavanca",
      "target": "dorsal"
  },
  {
      "id": "2736",
      "bodyPart": "costas",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/4FyxNdE8gf7uJh",
      "name": "Puxada Lateral Reversa com Alavanca de Pegada Reversa",
      "target": "dorsal"
  },
  {
      "id": "1616",
      "bodyPart": "biceps/triceps",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/DuyPr3sAnhN7TW",
      "name": "Rosca Martelo Reversa em Supino com Alavanca",
      "target": "bíceps"
  },
  {
      "id": "1348",
      "bodyPart": "costas",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/tk6aTXU38YV-CD",
      "name": "Remada Vertical de Pegada Reversa com Alavanca",
      "target": "latíssimo"
  },
  {
      "id": "0593",
      "bodyPart": "quadriceps/posterior",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/c1CE7rO4CS3JEP",
      "name": "Hiperextensão Reversa com Alavanca",
      "target": "glúteos"
  },
  {
      "id": "1349",
      "bodyPart": "costas",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/3ezcTDcluABIXO",
      "name": "Remada T-Bar de Pegada Reversa com Alavanca",
      "target": "latíssimo"
  },
  {
      "id": "2315",
      "bodyPart": "panturrilha",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/-zU4WUspLXXw1Y",
      "name": "Panturrilha Rotativa com Alavanca",
      "target": "panturrilha"
  },
  {
      "id": "2335",
      "bodyPart": "panturrilha",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/uJ21iWmqc5MaqG",
      "name": "Pressão de Panturrilha Sentado com Alavanca",
      "target": "panturrilha"
  },
  {
      "id": "0594",
      "bodyPart": "panturrilha",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/2nv7UliJgwzbeI",
      "name": "Elevação de Panturrilha Sentado com Alavanca",
      "target": "panturrilha"
  },
  {
      "id": "1452",
      "bodyPart": "core",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/AEvTXAY54kzMfE",
      "name": "Crunch Sentado com Alavanca",
      "target": "abdômen"
  },
  {
      "id": "0595",
      "bodyPart": "core",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/ReS1EyUhe-qEGL",
      "name": "Crunch Sentado com Alavanca (Almofada no Peito)",
      "target": "abdômen"
  },
  {
      "id": "3760",
      "bodyPart": "core",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/QQQBUpF2X5YcI0",
      "name": "Crunch Sentado com Alavanca Versão 2",
      "target": "abdômen"
  },
  {
      "id": "1451",
      "bodyPart": "biceps/triceps",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/eH0s2c7yBhFmES",
      "name": "Mergulho Sentado com Alavanca",
      "target": "tríceps"
  },
  {
      "id": "0596",
      "bodyPart": "peito",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/v6ZPzvwyuud8x7",
      "name": "Fly Sentado com Alavanca",
      "target": "peitoral"
  },
  {
      "id": "3759",
      "bodyPart": "quadriceps/posterior",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/czapEe1eUeloyM",
      "name": "Bom Dia Sentado com Alavanca",
      "target": "glúteos"
  },
  {
      "id": "0597",
      "bodyPart": "quadriceps/posterior",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/KQTXz6soAQfr8H",
      "name": "Abdução do Quadril Sentado com Alavanca",
      "target": "abdutores"
  },
  {
      "id": "0598",
      "bodyPart": "quadriceps/posterior",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/YxWcUk0G4q7JvO",
      "name": "Adução do Quadril Sentado com Alavanca",
      "target": "adutores"
  },
  {
      "id": "0599",
      "bodyPart": "quadriceps/posterior",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/iBJq8Od34zDvKr",
      "name": "Flexão de Pernas Sentado com Alavanca",
      "target": "isquiotibiais"
  },
  {
      "id": "0600",
      "bodyPart": "core",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/IXwDmALQGjOhfQ",
      "name": "Crunch com Elevação de Pernas Sentado com Alavanca",
      "target": "abdômen"
  },
  {
      "id": "0602",
      "bodyPart": "ombro",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/p5r03gUVSaVNgg",
      "name": "Elevação Lateral Reversa Sentado com Alavanca",
      "target": "deltóides"
  },
  {
      "id": "0601",
      "bodyPart": "ombro",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/j291F5YLIu4lP7",
      "name": "Elevação Lateral Reversa Sentado com Alavanca (Pegada Paralela)",
      "target": "deltóides"
  },
  {
      "id": "1350",
      "bodyPart": "costas",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/4wE6hfNulOgEaO",
      "name": "Remada Sentada com Alavanca",
      "target": "latíssimo"
  },
  {
      "id": "1385",
      "bodyPart": "panturrilha",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/UjVetxFDBSLkk5",
      "name": "Elevação de Panturrilha Sentado com Alavanca em Máquina de Leg Press",
      "target": "panturrilha"
  },
  {
      "id": "0603",
      "bodyPart": "ombro",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/s5472WpGp1OB15",
      "name": "Pressão de Ombro com Alavanca",
      "target": "deltóides"
  },
  {
      "id": "0869",
      "bodyPart": "ombro",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/y4YrftETo1JZ-M",
      "name": "Pressão de Ombro com Alavanca Versão 2",
      "target": "deltóides"
  },
  {
      "id": "2318",
      "bodyPart": "ombro",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/S8L11ukwLcIUvX",
      "name": "Pressão de Ombro com Alavanca Versão 3",
      "target": "deltóides"
  },
  {
      "id": "0604",
      "bodyPart": "costas",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/WWC09LAdzu7gu9",
      "name": "Encolhimento com Alavanca",
      "target": "trapézio"
  },
  {
      "id": "0605",
      "bodyPart": "panturrilha",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/tVVpAdFC4mZ3qE",
      "name": "Elevação de Panturrilha em Pé com Alavanca",
      "target": "panturrilha"
  },
  {
      "id": "3758",
      "bodyPart": "peito",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/Pnnem9J43RzvSO",
      "name": "Pressão Peitoral em Pé com Alavanca",
      "target": "peitoral"
  },
  {
      "id": "0606",
      "bodyPart": "costas",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/K8r9-qtyHe3zSb",
      "name": "Remada T-Bar com Alavanca",
      "target": "latíssimo"
  },
  {
      "id": "1351",
      "bodyPart": "costas",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/KtDkeJe6JlCObp",
      "name": "Remada T-Bar de Pegada Reversa com Alavanca",
      "target": "latíssimo"
  },
  {
      "id": "0607",
      "bodyPart": "biceps/triceps",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/TmR5I6BGSQVCZm",
      "name": "Extensão de Tríceps com Alavanca",
      "target": "tríceps"
  },
  {
      "id": "1313",
      "bodyPart": "costas",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/GYE2bjxnHePHkt",
      "name": "Remada Unilateral com Alavanca",
      "target": "latíssimo"
  },
  {
      "id": "0609",
      "bodyPart": "costas",
      "equipment": "corda naval",
      "gifUrl": "https://v2.exercisedb.io/image/vcvLyPhvz8Wcd0",
      "name": "Ponte de Londres",
      "target": "latíssimo"
  },
  {
      "id": "3013",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/abF7s8nQMsJoEI",
      "name": "Ponte de Glúteos Baixa no Chão",
      "target": "glúteos"
  },
  {
      "id": "1352",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/hK10IzG52oPo8L",
      "name": "Curl da Parte Inferior das Costas",
      "target": "coluna"
  },
  {
      "id": "3582",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/RbrUm-ZQ5i3A4h",
      "name": "Avanço com Salto",
      "target": "glúteos"
  },
  {
      "id": "1688",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/UgFMwlCKzFiJB5",
      "name": "Avanço com Torção",
      "target": "abdômen"
  },
  {
      "id": "0613",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/eJWw8HVdNKTMaN",
      "name": "Alongamento dos Quadris (Deitado de Lado)",
      "target": "quadríceps"
  },
  {
      "id": "2312",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/-fup32VqMIWx9m",
      "name": "Cotovelo no Joelho Deitado",
      "target": "abdômen"
  },
  {
      "id": "0620",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/uubW2W1tue2quN",
      "name": "Elevação de Pernas em Banco Plano Deitado",
      "target": "abdômen"
  },
  {
      "id": "0865",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/B7Vi7--zRo0Ak8",
      "name": "Elevação de Pernas e Quadris Deitado",
      "target": "abdômen"
  },
  {
      "id": "1301",
      "bodyPart": "peito",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/jRKJW9MLPyUp8l",
      "name": "Pressão Interna do Peitoral na Máquina",
      "target": "peitoral"
  },
  {
      "id": "0624",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/J4pN6Fh8kntKsF",
      "name": "Abdominal Marcha (Parede)",
      "target": "glúteos"
  },
  {
      "id": "1353",
      "bodyPart": "costas",
      "equipment": "bola",
      "gifUrl": "https://v2.exercisedb.io/image/LeG3qG596z8O52",
      "name": "Pegar e Lançar uma Bola Medicinal Acima da Cabeça",
      "target": "dorsal"
  },
  {
      "id": "1302",
      "bodyPart": "peito",
      "equipment": "bola",
      "gifUrl": "https://v2.exercisedb.io/image/8nAq3-Tw1D6sWf",
      "name": "Passagem de Peito com Bola Medicinal",
      "target": "peitoral"
  },
  {
      "id": "1303",
      "bodyPart": "peito",
      "equipment": "bola",
      "gifUrl": "https://v2.exercisedb.io/image/RYp9zYmyzl4oDE",
      "name": "Empurrão de Peito com Bola Medicinal a partir de 3 Pontos de Apoio",
      "target": "peitoral"
  },
  {
      "id": "1304",
      "bodyPart": "peito",
      "equipment": "bola",
      "gifUrl": "https://v2.exercisedb.io/image/nRnHK6VJlwbjEC",
      "name": "Empurrão de Peito com Bola Medicinal com Múltiplas Respostas",
      "target": "peitoral"
  },
  {
      "id": "1305",
      "bodyPart": "peito",
      "equipment": "bola",
      "gifUrl": "https://v2.exercisedb.io/image/3-9IQx-oe3Tts7",
      "name": "Empurrão de Peito com Bola Medicinal com Resposta Única",
      "target": "peitoral"
  },
  {
      "id": "1312",
      "bodyPart": "peito",
      "equipment": "bola",
      "gifUrl": "https://v2.exercisedb.io/image/fGeDuSYzx7QDBH",
      "name": "Empurrão de Peito com Bola Medicinal com Lançamento em Corrida",
      "target": "peitoral"
  },
  {
      "id": "1701",
      "bodyPart": "biceps/triceps",
      "equipment": "bola",
      "gifUrl": "https://v2.exercisedb.io/image/MBTopR0hEGtLQ3",
      "name": "Flexão de Braço em Inclinação com Pegada Fechada com Bola Medicinal",
      "target": "tríceps"
  },
  {
      "id": "1354",
      "bodyPart": "costas",
      "equipment": "bola",
      "gifUrl": "https://v2.exercisedb.io/image/LQse5aMsg5rrr3",
      "name": "Arremesso Acima da Cabeça com Bola Medicinal",
      "target": "latíssimo"
  },
  {
      "id": "1750",
      "bodyPart": "biceps/triceps",
      "equipment": "bola",
      "gifUrl": "https://v2.exercisedb.io/image/bORY2m7K6W73t6",
      "name": "Arremesso Supino com Bola Medicinal",
      "target": "tríceps"
  },
  {
      "id": "0627",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/eunzMu0jMBE-fZ",
      "name": "Chin-Up com Pegada Mista",
      "target": "dorsal"
  },
  {
      "id": "3217",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/BUqQgojhF2N6vm",
      "name": "Flexão Hindu Modificada (Masculino)",
      "target": "peitoral"
  },
  {
      "id": "1421",
      "bodyPart": "antebraço",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/7nQ-ZBx39dT6-K",
      "name": "Flexão Modificada para Abaixar os Braços",
      "target": "antebraços"
  },
  {
      "id": "0628",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/mh9n0uhAMxzt2S",
      "name": "Caminhada Monstro",
      "target": "glúteos"
  },
  {
      "id": "0630",
      "bodyPart": "cardio",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/1m10B4HZtlBNOE",
      "name": "Escalador",
      "target": "cardio"
  },
  {
      "id": "0631",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/nun8CBYBYug1B-",
      "name": "Muscle Up",
      "target": "dorsal"
  },
  {
      "id": "1401",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/v63glErB1fVUcy",
      "name": "Muscle-Up (na Barra Vertical)",
      "target": "dorsal"
  },
  {
      "id": "2328",
      "bodyPart": "biceps/triceps",
      "equipment": "bola de estabiliade",
      "gifUrl": "https://v2.exercisedb.io/image/6uVKU976yR-O84",
      "name": "Flexão de Braço Estreita em Bola de Exercícios",
      "target": "tríceps"
  },
  {
      "id": "1403",
      "bodyPart": "pescoço",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/cddTD66sYsURJC",
      "name": "Alongamento Lateral do Pescoço",
      "target": "escapula"
  },
  {
      "id": "0634",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/iqbQF047ZRkwb4",
      "name": "Abdominal Negativo",
      "target": "abdômen"
  },
  {
      "id": "1495",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/ynJQJKHHVOKDpb",
      "name": "Abdominal Oblíquo Versão 2",
      "target": "abdômen"
  },
  {
      "id": "0635",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/5K2e3cKn1gqYOP",
      "name": "Abdominais Oblíquos no Chão",
      "target": "abdômen"
  },
  {
      "id": "0636",
      "bodyPart": "biceps/triceps",
      "equipment": "barra olímpica",
      "gifUrl": "https://v2.exercisedb.io/image/wSzG9PKdx1-Imd",
      "name": "Rosca Martelo com Barra Olímpica",
      "target": "bíceps"
  },
  {
      "id": "0637",
      "bodyPart": "biceps/triceps",
      "equipment": "barra olímpica",
      "gifUrl": "https://v2.exercisedb.io/image/FFoXJGGtOjytDX",
      "name": "Extensão de Tríceps com Barra Olímpica",
      "target": "tríceps"
  },
  {
      "id": "1355",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/mS-PqHQwMs2apS",
      "name": "Um Braço Contra a Parede",
      "target": "dorsal"
  },
  {
      "id": "0638",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/xtnlMZ2t1S96nA",
      "name": "Chin-Up de Um Braço",
      "target": "dorsal"
  },
  {
      "id": "0639",
      "bodyPart": "biceps/triceps",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/J09ds6LLYTCrP1",
      "name": "Mergulho de Um Braço",
      "target": "tríceps"
  },
  {
      "id": "0640",
      "bodyPart": "core",
      "equipment": "bola",
      "gifUrl": "https://v2.exercisedb.io/image/0vmzloMKj67fuY",
      "name": "Arremesso de Um Braço (com Bola Medicinal)",
      "target": "abdômen"
  },
  {
      "id": "1773",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/dvG0-T5uiye42U",
      "name": "Remada de Toalha de Um Braço",
      "target": "latíssimo"
  },
  {
      "id": "1386",
      "bodyPart": "panturrilha",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/qiiR53VkoP6xLC",
      "name": "Elevação de Panturrilha de Um Pé com Alavanca de Burro",
      "target": "panturrilha"
  },
  {
      "id": "1387",
      "bodyPart": "panturrilha",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/-4oopCmar1-1j2",
      "name": "Elevação de Panturrilha de Um Pé no Chão",
      "target": "panturrilha"
  },
  {
      "id": "1476",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/KTTSMkvjuBvTqZ",
      "name": "Agachamento de Um Pé",
      "target": "glúteos"
  },
  {
      "id": "0641",
      "bodyPart": "core",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/bbQWOBQUHmFJLB",
      "name": "Up Otis",
      "target": "abdômen"
  },
  {
      "id": "0642",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/UD-74DhxfqnsPj",
      "name": "Flexão de Braço com Chute Externo da Perna",
      "target": "glúteos"
  },
  {
      "id": "0643",
      "bodyPart": "biceps/triceps",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/PS38Gj7EIiF-Pj",
      "name": "Alongamento do Tríceps Acima da Cabeça",
      "target": "tríceps"
  },
  {
      "id": "3147",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/Mw4ERd2u3ZbDSJ",
      "name": "Inclinação Pélvica",
      "target": "abdômen"
  },
  {
      "id": "1422",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/sqfUo2SGEX38UK",
      "name": "Inclinação Pélvica em Ponte",
      "target": "glúteos"
  },
  {
      "id": "1388",
      "bodyPart": "panturrilha",
      "equipment": "corda naval",
      "gifUrl": "https://v2.exercisedb.io/image/NJm4WhTpYo5Bel",
      "name": "Alongamento dos Peroneais",
      "target": "panturrilha"
  },
  {
      "id": "3662",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/EbhWxxPnzMG8jc",
      "name": "Push-Up da Cobra para a Pica",
      "target": "glúteos"
  },
  {
      "id": "1306",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/iYLWGe2Dx57ADw",
      "name": "Flexão Pliométrica",
      "target": "peitoral"
  },
  {
      "id": "1687",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/BpS0bS4Zft5DnR",
      "name": "Passo Posterior com Alcance Acima da Cabeça",
      "target": "abdômen"
  },
  {
      "id": "1389",
      "bodyPart": "panturrilha",
      "equipment": "corda naval",
      "gifUrl": "https://v2.exercisedb.io/image/tTVhr8eknjcRqC",
      "name": "Alongamento do Tibial Posterior",
      "target": "panturrilha"
  },
  {
      "id": "3119",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/ecf5KfMJc6MHBa",
      "name": "Agachamento do Trono",
      "target": "abdômen"
  },
  {
      "id": "3132",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/KJgZBzvFld1cIv",
      "name": "Agachamento do Trono com Suporte",
      "target": "glúteos"
  },
  {
      "id": "0648",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/mvc30dXeEAvsLr",
      "name": "Arranco",
      "target": "isquiotibiais"
  },
  {
      "id": "3665",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/WpIyDVgUCBMjS9",
      "name": "Prancha Reversa com Elevação de Perna",
      "target": "abdômen"
  },
  {
      "id": "3203",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/hew6fTduSt6oe4",
      "name": "Meio Abdominal em Prisioneiro (Masculino)",
      "target": "abdômen"
  },
  {
      "id": "1707",
      "bodyPart": "core",
      "equipment": "bola de estabiliade",
      "gifUrl": "https://v2.exercisedb.io/image/YfGzXhOf4DfVDc",
      "name": "Torção Prone no Stability Ball",
      "target": "abdômen"
  },
  {
      "id": "0651",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/gO44YX31txnzsQ",
      "name": "Pull Up (Pegada Neutra)",
      "target": "dorsal"
  },
  {
      "id": "0650",
      "bodyPart": "core",
      "equipment": "bola de estabiliade",
      "gifUrl": "https://v2.exercisedb.io/image/IKyt22TiamfoUr",
      "name": "Puxar (no Stability Ball)",
      "target": "abdômen"
  },
  {
      "id": "0652",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/llMfAVRbTGJfT7",
      "name": "Pull-Up",
      "target": "dorsal"
  },
  {
      "id": "1689",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/GXjGi6aaO2153t",
      "name": "Empurrar e Puxar o Próprio Peso Corporal",
      "target": "peitoral"
  },
  {
      "id": "3638",
      "bodyPart": "cardio",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/jBLgwpZ1nDmYCK",
      "name": "Empurrar para Correr",
      "target": "cardio"
  },
  {
      "id": "1307",
      "bodyPart": "peito",
      "equipment": "meia bola",
      "gifUrl": "https://v2.exercisedb.io/image/-AsRItv6GZMPot",
      "name": "Flexão de Braço na Bola Bosu",
      "target": "peitoral"
  },
  {
      "id": "0662",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/j2iOoiHRKE-Q3R",
      "name": "Flexão de Braço",
      "target": "peitoral"
  },
  {
      "id": "0653",
      "bodyPart": "peito",
      "equipment": "meia bola",
      "gifUrl": "https://v2.exercisedb.io/image/iR2ATzGefHWoj4",
      "name": "Flexão de Braço (Bola Bosu)",
      "target": "peitoral"
  },
  {
      "id": "0655",
      "bodyPart": "peito",
      "equipment": "bola de estabiliade",
      "gifUrl": "https://v2.exercisedb.io/image/Y6eArzwJx8jmn9",
      "name": "Flexão de Braço (no Stability Ball)",
      "target": "peitoral"
  },
  {
      "id": "0656",
      "bodyPart": "peito",
      "equipment": "bola de estabiliade",
      "gifUrl": "https://v2.exercisedb.io/image/YAmQ-x6Oe-c588",
      "name": "Flexão de Braço (no Stability Ball)",
      "target": "peitoral"
  },
  {
      "id": "0659",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/3MjgUCZuGHkO9w",
      "name": "Flexão de Braço (Parede)",
      "target": "peitoral"
  },
  {
      "id": "0658",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/D7zr00H9vTjqS3",
      "name": "Flexão de Braço (Parede) Versão 2",
      "target": "peitoral"
  },
  {
      "id": "0660",
      "bodyPart": "biceps/triceps",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/w5da0gbb6uuFVJ",
      "name": "Flexão de Braço Fechada com ombreia de Halteres",
      "target": "tríceps"
  },
  {
      "id": "0661",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/N4x4Bwqcrb4quW",
      "name": "Flexão de Braço com Chute Dentro da Perna",
      "target": "glúteos"
  },
  {
      "id": "0663",
      "bodyPart": "peito",
      "equipment": "bola",
      "gifUrl": "https://v2.exercisedb.io/image/dPfUN0ULju70vA",
      "name": "Flexão de Braço com Bola Medicinal",
      "target": "peitoral"
  },
  {
      "id": "1467",
      "bodyPart": "biceps/triceps",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/PzUlJ6YECC1Nah",
      "name": "Flexão de Braço nos Braços Inferiores",
      "target": "tríceps"
  },
  {
      "id": "3145",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/Nc-SpIBVmlk7-S",
      "name": "Flexão de Braço Plus",
      "target": "peitoral"
  },
  {
      "id": "0664",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/T0PE8YtRQHKMi7",
      "name": "Flexão de Braço para Prancha Lateral",
      "target": "abdômen"
  },
  {
      "id": "3533",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/YxQn88B7YlyFWB",
      "name": "Quadríceps",
      "target": "quadríceps"
  },
  {
      "id": "3201",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/3pnZUELCJ2bd71",
      "name": "Meio Abdominal",
      "target": "abdômen"
  },
  {
      "id": "3552",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/c5-Q-UK5OELdxA",
      "name": "Pés Rápidos Versão 2",
      "target": "quadríceps"
  },
  {
      "id": "0666",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/s4KLmEcjbMYr6V",
      "name": "Elevação de Braço Único com Flexão de Braço",
      "target": "peitoral"
  },
  {
      "id": "0668",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/fH2c5cpy3a4BUj",
      "name": "Ponte Posterior Declinada",
      "target": "glúteos"
  },
  {
      "id": "0669",
      "bodyPart": "ombro",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/t5UpEWc-5PzX1y",
      "name": "Alongamento do Deltoides Posterior",
      "target": "deltóides"
  },
  {
      "id": "0670",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/neK3pLFEFaQ-io",
      "name": "Puxada Posterior",
      "target": "dorsal"
  },
  {
      "id": "1582",
      "bodyPart": "quadriceps/posterior",
      "equipment": "corda naval",
      "gifUrl": "https://v2.exercisedb.io/image/Fj7HozrsTR7LRk",
      "name": "Pose Reclinada de Dedo Grande com Corda",
      "target": "isquiotibiais"
  },
  {
      "id": "3236",
      "bodyPart": "quadriceps/posterior",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/qucztJPtzhGnQ5",
      "name": "Impulso de Quadril com Banda de Resistência nos Joelhos (Feminino)",
      "target": "glúteos"
  },
  {
      "id": "3007",
      "bodyPart": "quadriceps/posterior",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/BKtNpmlqtyC37R",
      "name": "Extensão de Perna com Banda de Resistência",
      "target": "quadríceps"
  },
  {
      "id": "3123",
      "bodyPart": "biceps/triceps",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/uFKHG9OTrlQUtR",
      "name": "Rosca de Bíceps Sentado com Banda de Resistência",
      "target": "bíceps"
  },
  {
      "id": "3124",
      "bodyPart": "peito",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/3IePhHNuSakhNe",
      "name": "Pressão de Peito Sentado com Banda de Resistência",
      "target": "peitoral"
  },
  {
      "id": "3006",
      "bodyPart": "quadriceps/posterior",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/mHwHhqpijLUVpW",
      "name": "Abdução de Quadril Sentado com Banda de Resistência",
      "target": "abdutores"
  },
  {
      "id": "3122",
      "bodyPart": "ombro",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/G2eLtcVgwlb9Bt",
      "name": "Pressão de Ombro Sentado com Banda de Resistência",
      "target": "deltóides"
  },
  {
      "id": "3144",
      "bodyPart": "costas",
      "equipment": "elástico",
      "gifUrl": "https://v2.exercisedb.io/image/Rkcv5PbiYWx7Tf",
      "name": "Remada Retraída Sentado com Banda de Resistência",
      "target": "latíssimo"
  },
  {
      "id": "0872",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/QYi5Gcbs4cVSPp",
      "name": "Crunch Reverso",
      "target": "abdômen"
  },
  {
      "id": "0672",
      "bodyPart": "biceps/triceps",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/ObXisBAMo8l1UK",
      "name": "Mergulho Reverso",
      "target": "tríceps"
  },
  {
      "id": "0673",
      "bodyPart": "costas",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/L-poHXfctJncG4",
      "name": "Puxada Latissimus com Máquina de Pegada Reversa",
      "target": "dorsal"
  },
  {
      "id": "0674",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/BmRDYuBFvTc8iz",
      "name": "Pull-Up com Pegada Reversa",
      "target": "dorsal"
  },
  {
      "id": "0675",
      "bodyPart": "quadriceps/posterior",
      "equipment": "bola de estabiliade",
      "gifUrl": "https://v2.exercisedb.io/image/QnsAdeZWWMAbvN",
      "name": "Hiperextensão Reversa (no Stability Ball)",
      "target": "glúteos"
  },
  {
      "id": "1423",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/Nyi3WYvrRlURNb",
      "name": "Hiperextensão Reversa em Banco Plano",
      "target": "glúteos"
  },
  {
      "id": "3663",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/c2Jo7gIHkNr7Xh",
      "name": "Prancha Reversa com Elevação de Perna",
      "target": "abdômen"
  },
  {
      "id": "0677",
      "bodyPart": "biceps/triceps",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/LYr5VJaPHccPcq",
      "name": "Mergulhos em Anéis",
      "target": "tríceps"
  },
  {
      "id": "2571",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/bmo2COGTjiB3YT",
      "name": "Alongamento do Sapo Balançante",
      "target": "glúteos"
  },
  {
      "id": "0678",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/x1Y7MYDpMzq0dV",
      "name": "Puxada para Baixo de Rocky",
      "target": "dorsal"
  },
  {
      "id": "2208",
      "bodyPart": "costas",
      "equipment": "rolo",
      "gifUrl": "https://v2.exercisedb.io/image/zk4zon4MczxNJ6",
      "name": "alongamento das costas com rolo",
      "target": "coluna"
  },
  {
      "id": "2204",
      "bodyPart": "core",
      "equipment": "rolo",
      "gifUrl": "https://v2.exercisedb.io/image/8klR9FdOWMUemo",
      "name": "movimento do corpo com rolo",
      "target": "abdômen"
  },
  {
      "id": "2205",
      "bodyPart": "quadriceps/posterior",
      "equipment": "rolo",
      "gifUrl": "https://v2.exercisedb.io/image/s9GLLY131uMDWD",
      "name": "alongamento do quadril com rolo",
      "target": "glúteos"
  },
  {
      "id": "2202",
      "bodyPart": "quadriceps/posterior",
      "equipment": "rolo",
      "gifUrl": "https://v2.exercisedb.io/image/oFq7SHKH9yXAHK",
      "name": "alongamento do quadril com rolo",
      "target": "glúteos"
  },
  {
      "id": "2206",
      "bodyPart": "core",
      "equipment": "rolo",
      "gifUrl": "https://v2.exercisedb.io/image/Z7TqpB7iLasLKN",
      "name": "abdominal reverso com rolo",
      "target": "abdômen"
  },
  {
      "id": "2203",
      "bodyPart": "peito",
      "equipment": "rolo",
      "gifUrl": "https://v2.exercisedb.io/image/TgOUFmAdbKNg31",
      "name": "flexão do ombro sentado com rolo para depressão e retração",
      "target": "peitoral"
  },
  {
      "id": "2209",
      "bodyPart": "peito",
      "equipment": "rolo",
      "gifUrl": "https://v2.exercisedb.io/image/gffOuWzlcXW6HN",
      "name": "flexão do ombro sentado com rolo de uma perna para depressão e retração",
      "target": "peitoral"
  },
  {
      "id": "2207",
      "bodyPart": "costas",
      "equipment": "rolo",
      "gifUrl": "https://v2.exercisedb.io/image/qwL18qWKZHf0F8",
      "name": "alongamento do latíssimo do dorso lateral com rolo",
      "target": "dorsal"
  },
  {
      "id": "0680",
      "bodyPart": "costas",
      "equipment": "corda naval",
      "gifUrl": "https://v2.exercisedb.io/image/yQtKwHUFgSku0G",
      "name": "escalada de corda",
      "target": "latíssimo"
  },
  {
      "id": "0685",
      "bodyPart": "cardio",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/wb7v6hhaDoJ6wR",
      "name": "corrida",
      "target": "cardio"
  },
  {
      "id": "0684",
      "bodyPart": "cardio",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/E2cH7bj7bdzFzS",
      "name": "corrida (com equipamento)",
      "target": "cardio"
  },
  {
      "id": "1585",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/UZHncY5oF7oHzT",
      "name": "alongamento para corredores",
      "target": "isquiotibiais"
  },
  {
      "id": "0687",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/cPSouK5wQXIrxs",
      "name": "torção russa",
      "target": "abdômen"
  },
  {
      "id": "3012",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/przcbJ0bTcKCuD",
      "name": "mergulho escapular",
      "target": "trapézio"
  },
  {
      "id": "3021",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/58hFn2avNHYtB3",
      "name": "flexão escapular",
      "target": "serrátil"
  },
  {
      "id": "0688",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/W1y1QYjJ5DmVc0",
      "name": "pull-up escapular",
      "target": "trapézio"
  },
  {
      "id": "3219",
      "bodyPart": "cardio",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/ZTkzfUkik1gfm3",
      "name": "saltos tesoura (masculino)",
      "target": "cardio"
  },
  {
      "id": "1390",
      "bodyPart": "panturrilha",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/GDYKQpzAoA9H7e",
      "name": "alongamento do gêmeo sentado (masculino)",
      "target": "panturrilha"
  },
  {
      "id": "1424",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/4MR-tu0elBmzkw",
      "name": "alongamento glúteo sentado",
      "target": "glúteos"
  },
  {
      "id": "0689",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/YTDJ80YPP22jRr",
      "name": "elevação de pernas sentado",
      "target": "abdômen"
  },
  {
      "id": "0690",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/-k15S1nbna0fNs",
      "name": "alongamento lombar sentado",
      "target": "dorsal"
  },
  {
      "id": "2567",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/aQ0WhYHFCWua2P",
      "name": "alongamento piriforme sentado",
      "target": "glúteos"
  },
  {
      "id": "0691",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/sejt204gTEG25N",
      "name": "crunch lateral sentado (na parede)",
      "target": "abdômen"
  },
  {
      "id": "1587",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/HuqVMJmym7JhnW",
      "name": "sequência de pose sentada de ângulo amplo",
      "target": "isquiotibiais"
  },
  {
      "id": "0697",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/mKOw4ItMH1VUTu",
      "name": "curl inverso de perna com ajuda própria",
      "target": "isquiotibiais"
  },
  {
      "id": "1766",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/bt2gjF5fS0770x",
      "name": "curl inverso de perna com ajuda própria",
      "target": "isquiotibiais"
  },
  {
      "id": "0696",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/th4ydTOrpKdupO",
      "name": "curl inverso de perna com ajuda própria (no chão)",
      "target": "isquiotibiais"
  },
  {
      "id": "3222",
      "bodyPart": "cardio",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/Fj6JOpguQlFgLv",
      "name": "salto semi-agachado (masculino)",
      "target": "cardio"
  },
  {
      "id": "3656",
      "bodyPart": "cardio",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/HBjA9NZbvoW3PI",
      "name": "corrida de passos curtos",
      "target": "cardio"
  },
  {
      "id": "1763",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/CXVKW8ovqvQwT-",
      "name": "pull-up com pegada de ombro",
      "target": "dorsal"
  },
  {
      "id": "3699",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/MJuCIRd4lHqjrK",
      "name": "toque de ombro",
      "target": "abdômen"
  },
  {
      "id": "0699",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/VIjxX5KaKZhMhz",
      "name": "flexão com toque de ombro",
      "target": "peitoral"
  },
  {
      "id": "1774",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/ddByoaPKNiyf90",
      "name": "abdução de quadril na prancha lateral",
      "target": "abdutores"
  },
  {
      "id": "0705",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/3Aa0JOBzOevFJo",
      "name": "prancha lateral versão 2",
      "target": "abdômen"
  },
  {
      "id": "0709",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/W1iBl3LVKbtoQV",
      "name": "abdução de quadril lateral (em barras paralelas)",
      "target": "abdômen"
  },
  {
      "id": "0710",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/77RMbaz39E5ly7",
      "name": "abdução de quadril lateral",
      "target": "abdutores"
  },
  {
      "id": "1358",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/hJ8xF9HrfrfHK4",
      "name": "alongamento lateral no chão",
      "target": "dorsal"
  },
  {
      "id": "3667",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/USZCELrhv0zfha",
      "name": "adução de quadril deitado de lado (masculino)",
      "target": "adutores"
  },
  {
      "id": "1775",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/DC7j12RCXfDWxv",
      "name": "adução de quadril na prancha lateral",
      "target": "adutores"
  },
  {
      "id": "0716",
      "bodyPart": "pescoço",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/FxQhxd8nnsQoxm",
      "name": "alongamento do pescoço com empurrão lateral",
      "target": "escapula"
  },
  {
      "id": "0717",
      "bodyPart": "biceps/triceps",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/ahvgQhwJtAzDQa",
      "name": "flexão lateral",
      "target": "tríceps"
  },
  {
      "id": "0721",
      "bodyPart": "antebraço",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/EgsmiWyWKRk6mo",
      "name": "alongamento do pulso para o lado",
      "target": "antebraços"
  },
  {
      "id": "0720",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/ZYcjWwl1bp4vua",
      "name": "barra fixa de lado a lado",
      "target": "dorsal"
  },
  {
      "id": "3213",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/PLKtze4djEQeOf",
      "name": "toque nos dedos do pé de lado a lado (masculino)",
      "target": "abdômen"
  },
  {
      "id": "0725",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/4b2VPH4Q8qgMMX",
      "name": "flexão de braço com um braço",
      "target": "peitoral"
  },
  {
      "id": "3645",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/ObhkaOzRJRs3uC",
      "name": "ponte de uma perna com perna estendida",
      "target": "glúteos"
  },
  {
      "id": "0727",
      "bodyPart": "panturrilha",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/xYrKqOA4hQeuzC",
      "name": "elevação de panturrilha com um pé (em um haltere)",
      "target": "panturrilha"
  },
  {
      "id": "0730",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/rwkHZSMKzgayN7",
      "name": "deslize de plataforma com uma perna",
      "target": "isquiotibiais"
  },
  {
      "id": "1759",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/Dq3VOqDnUIU89l",
      "name": "agachamento de uma perna (pistola) masculino",
      "target": "glúteos"
  },
  {
      "id": "1489",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/veBTQ94wUKHL2E",
      "name": "agachamento 'sissy'",
      "target": "quadríceps"
  },
  {
      "id": "0735",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/1TOYL8AdZtYc48",
      "name": "abdominal versão 2",
      "target": "abdômen"
  },
  {
      "id": "3679",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/LVg6ThXoY8CP8Z",
      "name": "abdominal com braços no peito",
      "target": "abdômen"
  },
  {
      "id": "3361",
      "bodyPart": "cardio",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/c6cr5wwgOTE9KG",
      "name": "pulos de patinador",
      "target": "cardio"
  },
  {
      "id": "2142",
      "bodyPart": "biceps/triceps",
      "equipment": "maquina SkiErg",
      "gifUrl": "https://v2.exercisedb.io/image/YSrc5gDlch7b-U",
      "name": "ergômetro de esqui",
      "target": "tríceps"
  },
  {
      "id": "3671",
      "bodyPart": "cardio",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/pzsQBReygT1dtC",
      "name": "passo de esqui",
      "target": "cardio"
  },
  {
      "id": "3304",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/VfGvR1AHa9QwAQ",
      "name": "skin the 'cat'",
      "target": "latíssimo"
  },
  {
      "id": "1425",
      "bodyPart": "quadriceps/posterior",
      "equipment": "hack",
      "gifUrl": "https://v2.exercisedb.io/image/7mXRUNyUaHA8yh",
      "name": "prensa de perna em um ângulo de 45 graus com um pé",
      "target": "glúteos"
  },
  {
      "id": "0738",
      "bodyPart": "panturrilha",
      "equipment": "hack",
      "gifUrl": "https://v2.exercisedb.io/image/v-7JteBGjo7isa",
      "name": "elevação de panturrilha em um ângulo de 45 graus",
      "target": "panturrilha"
  },
  {
      "id": "0739",
      "bodyPart": "quadriceps/posterior",
      "equipment": "hack",
      "gifUrl": "https://v2.exercisedb.io/image/fzFoy5fYUcWUw1",
      "name": "prensa de perna em um ângulo de 45 graus",
      "target": "glúteos"
  },
  {
      "id": "1464",
      "bodyPart": "quadriceps/posterior",
      "equipment": "hack",
      "gifUrl": "https://v2.exercisedb.io/image/EjC788MFLpZ1op",
      "name": "prensa de perna em um ângulo de 45 graus (ponto de vista traseiro)",
      "target": "glúteos"
  },
  {
      "id": "1463",
      "bodyPart": "quadriceps/posterior",
      "equipment": "hack",
      "gifUrl": "https://v2.exercisedb.io/image/aq-yrydswGmb6Y",
      "name": "prensa de perna em um ângulo de 45 graus (ponto de vista lateral)",
      "target": "glúteos"
  },
  {
      "id": "0740",
      "bodyPart": "quadriceps/posterior",
      "equipment": "hack",
      "gifUrl": "https://v2.exercisedb.io/image/S0JHPipGHNeHl7",
      "name": "prensa de perna larga em um ângulo de 45 graus",
      "target": "glúteos"
  },
  {
      "id": "1391",
      "bodyPart": "panturrilha",
      "equipment": "hack",
      "gifUrl": "https://v2.exercisedb.io/image/mH3Gc24lLLQy5T",
      "name": "prensa de panturrilha em um leg press",
      "target": "panturrilha"
  },
  {
      "id": "0741",
      "bodyPart": "quadriceps/posterior",
      "equipment": "hack",
      "gifUrl": "https://v2.exercisedb.io/image/0Sj5Kzgay2RsQ5",
      "name": "agachamento hack com trenó mais próximo",
      "target": "glúteos"
  },
  {
      "id": "0742",
      "bodyPart": "panturrilha",
      "equipment": "hack",
      "gifUrl": "https://v2.exercisedb.io/image/iuJGZzIZhXZMrw",
      "name": "elevação de panturrilha com ângulo para a frente",
      "target": "panturrilha"
  },
  {
      "id": "0743",
      "bodyPart": "quadriceps/posterior",
      "equipment": "hack",
      "gifUrl": "https://v2.exercisedb.io/image/kJZr65QYHoSP0J",
      "name": "agachamento hack com trenó",
      "target": "glúteos"
  },
  {
      "id": "2334",
      "bodyPart": "panturrilha",
      "equipment": "hack",
      "gifUrl": "https://v2.exercisedb.io/image/OOtYAKoNcYCqFE",
      "name": "prensa de panturrilha deitado com trenó",
      "target": "panturrilha"
  },
  {
      "id": "0744",
      "bodyPart": "quadriceps/posterior",
      "equipment": "hack",
      "gifUrl": "https://v2.exercisedb.io/image/d8I6v3kjMF8Xju",
      "name": "agachamento deitado com trenó",
      "target": "glúteos"
  },
  {
      "id": "1392",
      "bodyPart": "panturrilha",
      "equipment": "hack",
      "gifUrl": "https://v2.exercisedb.io/image/mnnacNAdSkzUE4",
      "name": "prensa de panturrilha de um pé em um leg press",
      "target": "panturrilha"
  },
  {
      "id": "1496",
      "bodyPart": "core",
      "equipment": "martelo",
      "gifUrl": "https://v2.exercisedb.io/image/8J5GXbFOydMoom",
      "name": "martelo de marreta",
      "target": "abdômen"
  },
  {
      "id": "0746",
      "bodyPart": "costas",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/rvi8QOKAz-wCn7",
      "name": "encolhimento das costas na barra fixa",
      "target": "trapézio"
  },
  {
      "id": "0747",
      "bodyPart": "ombro",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/zUXqzyXGsN4pgw",
      "name": "pressão por trás do pescoço na barra fixa",
      "target": "deltóides"
  },
  {
      "id": "0748",
      "bodyPart": "peito",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/yycj40J-QZIWpR",
      "name": "supino na barra fixa",
      "target": "peitoral"
  },
  {
      "id": "0749",
      "bodyPart": "quadriceps/posterior",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/M1Ady61Ubu2Cor",
      "name": "bom dia com joelhos dobrados na barra fixa",
      "target": "glúteos"
  },
  {
      "id": "1359",
      "bodyPart": "costas",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/H3iXSdZrZED9KX",
      "name": "remada curvada na barra fixa",
      "target": "latíssimo"
  },
  {
      "id": "0750",
      "bodyPart": "quadriceps/posterior",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/r0P4RSujOwEk8m",
      "name": "agachamento na cadeira na barra fixa",
      "target": "quadríceps"
  },
  {
      "id": "0751",
      "bodyPart": "biceps/triceps",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/z9HD4IcvEkVfCp",
      "name": "supino com pegada fechada na barra fixa",
      "target": "tríceps"
  },
  {
      "id": "0752",
      "bodyPart": "quadriceps/posterior",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/6JPqmkYXzX211J",
      "name": "levantamento terra na barra fixa",
      "target": "glúteos"
  },
  {
      "id": "0753",
      "bodyPart": "peito",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/PGA4u33eBQ29yZ",
      "name": "supino declinado na barra fixa",
      "target": "peitoral"
  },
  {
      "id": "0754",
      "bodyPart": "peito",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/2XhfF9vlVOnYBC",
      "name": "pressão reversa declinada na barra fixa",
      "target": "peitoral"
  },
  {
      "id": "1433",
      "bodyPart": "quadriceps/posterior",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/f6RwX8vGYULDSi",
      "name": "agachamento frontal na barra fixa (pegada limpa)",
      "target": "glúteos"
  },
  {
      "id": "3281",
      "bodyPart": "quadriceps/posterior",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/59wfQz-yev9495",
      "name": "agachamento completo na barra fixa",
      "target": "glúteos"
  },
  {
      "id": "0755",
      "bodyPart": "quadriceps/posterior",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/rQrSQKwahpC2yG",
      "name": "agachamento hack na barra fixa",
      "target": "glúteos"
  },
  {
      "id": "0756",
      "bodyPart": "core",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/Isaa3njP0NuTGc",
      "name": "elevação de quadril na barra fixa",
      "target": "abdômen"
  },
  {
      "id": "0757",
      "bodyPart": "peito",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/97O7QsJ6bt42RW",
      "name": "supino inclinado na barra fixa",
      "target": "peitoral"
  },
  {
      "id": "0758",
      "bodyPart": "peito",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/Ckdq5uXwrsCVkt",
      "name": "pressão inclinada reversa na barra fixa",
      "target": "peitoral"
  },
  {
      "id": "0759",
      "bodyPart": "peito",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/ymwDUXHD2-NdMW",
      "name": "elevação lateral inclinada na barra fixa",
      "target": "serrátil"
  },
  {
      "id": "0760",
      "bodyPart": "quadriceps/posterior",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/-CjcNvmRvp5r9f",
      "name": "prensa de perna na barra fixa",
      "target": "glúteos"
  },
  {
      "id": "1434",
      "bodyPart": "quadriceps/posterior",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/pR69FkBCSv1Trg",
      "name": "agachamento baixo na barra fixa",
      "target": "glúteos"
  },
  {
      "id": "1683",
      "bodyPart": "biceps/triceps",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/1LpKjNvCFSQQ8r",
      "name": "rosca de bíceps na barra fixa",
      "target": "bíceps"
  },
  {
      "id": "1625",
      "bodyPart": "biceps/triceps",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/QJgH5IKgYpjHbh",
      "name": "supino declinado com pegada fechada na barra fixa",
      "target": "tríceps"
  },
  {
      "id": "1752",
      "bodyPart": "biceps/triceps",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/mpgQv4mcKKkbSi",
      "name": "extensão de tríceps na barra fixa inclinada",
      "target": "tríceps"
  },
  {
      "id": "1626",
      "bodyPart": "peito",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/KJ1tW1o4X84hqL",
      "name": "supino reverso declinado com pegada fechada na barra fixa",
      "target": "peitoral"
  },
  {
      "id": "0761",
      "bodyPart": "costas",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/usGmI9u7X6cxy0",
      "name": "remada estreita na barra fixa",
      "target": "latíssimo"
  },
  {
      "id": "1360",
      "bodyPart": "costas",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/KoSlZJRf0X6RWi",
      "name": "remada unilateral na barra fixa",
      "target": "latíssimo"
  },
  {
      "id": "1393",
      "bodyPart": "panturrilha",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/cyCD33Od8dqn5V",
      "name": "elevação de panturrilha de um pé no chão na barra fixa",
      "target": "panturrilha"
  },
  {
      "id": "0762",
      "bodyPart": "ombro",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/SEmNd4E2TJ7Lt9",
      "name": "remada deltóide posterior na barra fixa",
      "target": "deltóides"
  },
  {
      "id": "0763",
      "bodyPart": "panturrilha",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/E9gVs9mY2qRHQ5",
      "name": "elevação de panturrilha reversa na barra fixa",
      "target": "panturrilha"
  },
  {
      "id": "1394",
      "bodyPart": "panturrilha",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/piTwj-l86aUDYS",
      "name": "elevação de panturrilha reversa na barra fixa",
      "target": "panturrilha"
  },
  {
      "id": "1361",
      "bodyPart": "costas",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/34iZK0mcrI9a0N",
      "name": "remada curvada com pegada reversa na barra fixa",
      "target": "latíssimo"
  },
  {
      "id": "0764",
      "bodyPart": "peito",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/cBI5MTNwFBRKK4",
      "name": "pressão reversa na barra fixa",
      "target": "peitoral"
  },
  {
      "id": "1395",
      "bodyPart": "panturrilha",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/1T4jdQqhOnwMo6",
      "name": "elevação de panturrilha sentado de um pé na barra fixa",
      "target": "panturrilha"
  },
  {
      "id": "0765",
      "bodyPart": "ombro",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/Vr2gDIP3XOmn7f",
      "name": "pressão de ombro sentado na barra fixa",
      "target": "deltóides"
  },
  {
      "id": "1426",
      "bodyPart": "antebraço",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/gw7q7X2j-IGBqI",
      "name": "rosca de pulso sentado na barra fixa",
      "target": "antebraços"
  },
  {
      "id": "0766",
      "bodyPart": "ombro",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/1yrlYnuIFgK1Zk",
      "name": "pressão de ombro na barra fixa",
      "target": "deltóides"
  },
  {
      "id": "0767",
      "bodyPart": "costas",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/6d7lyAwLqVrM0H",
      "name": "encolhimento de ombros na barra fixa",
      "target": "trapézio"
  },
  {
      "id": "0768",
      "bodyPart": "quadriceps/posterior",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/AJWoWmMtGJiVIV",
      "name": "agachamento unilateral na barra fixa",
      "target": "quadríceps"
  },
  {
      "id": "0769",
      "bodyPart": "quadriceps/posterior",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/Ifi7LQB-e-ipLg",
      "name": "afundo em corrida na barra fixa",
      "target": "glúteos"
  },
  {
      "id": "0770",
      "bodyPart": "quadriceps/posterior",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/bRToMpPbZB9m74",
      "name": "agachamento na barra fixa",
      "target": "glúteos"
  },
  {
      "id": "0771",
      "bodyPart": "antebraço",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/jiWvuop80qjGHs",
      "name": "elevação do pulso para trás em pé na barra fixa",
      "target": "antebraços"
  },
  {
      "id": "0772",
      "bodyPart": "ombro",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/T1ZC7BOuaaBXHU",
      "name": "pressão militar atrás da cabeça em pé na barra fixa",
      "target": "deltóides"
  },
  {
      "id": "0773",
      "bodyPart": "panturrilha",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/PSJX79td8TswQZ",
      "name": "elevação de panturrilha em pé na barra fixa",
      "target": "panturrilha"
  },
  {
      "id": "0774",
      "bodyPart": "ombro",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/fqsSn-5tg-eqEL",
      "name": "pressão militar em pé na barra fixa",
      "target": "deltóides"
  },
  {
      "id": "3142",
      "bodyPart": "quadriceps/posterior",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/qeF4bnaqbbIkqf",
      "name": "agachamento sumô na barra fixa",
      "target": "glúteos"
  },
  {
      "id": "1396",
      "bodyPart": "panturrilha",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/UwJWg1eAQscUjK",
      "name": "elevação de dedos na barra fixa",
      "target": "panturrilha"
  },
  {
      "id": "0775",
      "bodyPart": "ombro",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/hQUvXpkIBzSQcO",
      "name": "elevação frontal na barra fixa",
      "target": "deltóides"
  },
  {
      "id": "1308",
      "bodyPart": "peito",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/6LCAL8ydbeuKcV",
      "name": "supino com pegada larga na barra fixa",
      "target": "peitoral"
  },
  {
      "id": "1309",
      "bodyPart": "peito",
      "equipment": "maquina smith",
      "gifUrl": "https://v2.exercisedb.io/image/S-zrbDGNs7EaVA",
      "name": "supino declinado com pegada larga na barra fixa",
      "target": "peitoral"
  },
  {
      "id": "0776",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/GdnYlIupPSkGHu",
      "name": "puxada de arremesso",
      "target": "quadríceps"
  },
  {
      "id": "0777",
      "bodyPart": "core",
      "equipment": "halter",
      "gifUrl": "https://v2.exercisedb.io/image/azUBs-QuGSBOAV",
      "name": "lançador de feitiços",
      "target": "abdômen"
  },
  {
      "id": "1362",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/H27gMVNaM0fYaf",
      "name": "esfinge",
      "target": "coluna"
  },
  {
      "id": "0778",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/W7h3G3fPP5CGLS",
      "name": "flexão de aranha",
      "target": "glúteos"
  },
  {
      "id": "1363",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/97AHMV9UkG0yMI",
      "name": "alongamento da coluna",
      "target": "coluna"
  },
  {
      "id": "2329",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/z1mJlluVaGxFJX",
      "name": "torção da coluna",
      "target": "abdômen"
  },
  {
      "id": "2368",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/x9wPikvrpNyoWS",
      "name": "agachamento dividido",
      "target": "quadríceps"
  },
  {
      "id": "0786",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/ydUuo5LgQx7ovF",
      "name": "arranco em agachamento",
      "target": "quadríceps"
  },
  {
      "id": "1705",
      "bodyPart": "quadriceps/posterior",
      "equipment": "meia bola",
      "gifUrl": "https://v2.exercisedb.io/image/pKVCQZJF0osnVY",
      "name": "agachamento no bosu",
      "target": "quadríceps"
  },
  {
      "id": "1685",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/DteQvH7naaaAgQ",
      "name": "agachamento com alcance acima da cabeça",
      "target": "quadríceps"
  },
  {
      "id": "1686",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/BNp3lQEhjjV8D9",
      "name": "agachamento com alcance acima da cabeça com torção",
      "target": "quadríceps"
  },
  {
      "id": "2297",
      "bodyPart": "core",
      "equipment": "bola de estabiliade",
      "gifUrl": "https://v2.exercisedb.io/image/K0c6JdJw4tRg2I",
      "name": "abdominal na bola de estabilidade (amplitude total, mãos atrás da cabeça)",
      "target": "abdômen"
  },
  {
      "id": "3291",
      "bodyPart": "biceps/triceps",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/E5QOqiu0UIjuXO",
      "name": "prensa Stalder",
      "target": "tríceps"
  },
  {
      "id": "3669",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/-M4YP5ZVYBSN91",
      "name": "arqueiro em pé",
      "target": "latíssimo"
  },
  {
      "id": "0788",
      "bodyPart": "ombro",
      "equipment": "barra",
      "gifUrl": "https://v2.exercisedb.io/image/y3nvcH10LVHcox",
      "name": "pressão por trás do pescoço em pé",
      "target": "deltóides"
  },
  {
      "id": "1490",
      "bodyPart": "panturrilha",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/PJW21jvk-Rw9AQ",
      "name": "elevação de panturrilha em uma escadaria",
      "target": "panturrilha"
  },
  {
      "id": "1397",
      "bodyPart": "panturrilha",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/OFsBplZ5KOIoQs",
      "name": "elevações de panturrilha em pé",
      "target": "panturrilha"
  },
  {
      "id": "1398",
      "bodyPart": "panturrilha",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/e7NQdAudhbV-sC",
      "name": "alongamento de panturrilha em pé",
      "target": "panturrilha"
  },
  {
      "id": "1599",
      "bodyPart": "quadriceps/posterior",
      "equipment": "corda naval",
      "gifUrl": "https://v2.exercisedb.io/image/SpEnpx22FGwNfE",
      "name": "alongamento de isquiotibiais e panturrilha em pé com alça",
      "target": "isquiotibiais"
  },
  {
      "id": "0794",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/U84LsbcQER021T",
      "name": "alongamento lateral em pé",
      "target": "dorsal"
  },
  {
      "id": "1364",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/kBNAl2sjtKYeKr",
      "name": "inclinação pélvica em pé",
      "target": "coluna"
  },
  {
      "id": "0795",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/xMon-Ge-XS6mmR",
      "name": "curl de perna em pé",
      "target": "isquiotibiais"
  },
  {
      "id": "0796",
      "bodyPart": "core",
      "equipment": "roda",
      "gifUrl": "https://v2.exercisedb.io/image/Faf8wCnlcAVE94",
      "name": "extensão de roda em pé",
      "target": "abdômen"
  },
  {
      "id": "3223",
      "bodyPart": "cardio",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/TexKfRrcC5Tgav",
      "name": "salto estrela (masculino)",
      "target": "cardio"
  },
  {
      "id": "2138",
      "bodyPart": "cardio",
      "equipment": "bicicleta ergométrica",
      "gifUrl": "https://v2.exercisedb.io/image/x-AzzFF62tUslf",
      "name": "corrida em bicicleta ergométrica versão 3",
      "target": "cardio"
  },
  {
      "id": "0798",
      "bodyPart": "cardio",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/MGNVgTTNwj4CxP",
      "name": "caminhada em bicicleta ergométrica",
      "target": "cardio"
  },
  {
      "id": "3314",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/fcW4usY2ln977P",
      "name": "Maltese dividido",
      "target": "abdômen"
  },
  {
      "id": "3298",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/xC7cw6I5Tal3Na",
      "name": "planche dividido",
      "target": "abdômen"
  },
  {
      "id": "1427",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/iMDtytMdt3Pro2",
      "name": "abdutor do quadril externo com perna estendida",
      "target": "abdutores"
  },
  {
      "id": "0803",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/ceQxsDvalXEAos",
      "name": "flexão super-homem",
      "target": "peitoral"
  },
  {
      "id": "0805",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/QtTF5W5oTOX47B",
      "name": "queda abdominal suspensa",
      "target": "abdômen"
  },
  {
      "id": "0806",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/HrYtWy-BSZ2AzF",
      "name": "flexão suspensa",
      "target": "peitoral"
  },
  {
      "id": "0807",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/9jpWOjgzRIZNxa",
      "name": "crunch reverso suspenso",
      "target": "abdômen"
  },
  {
      "id": "0808",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/6FgAAg4QJZd-vz",
      "name": "remada suspensa",
      "target": "latíssimo"
  },
  {
      "id": "0809",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/2et5Yr0UeteqN0",
      "name": "agachamento suspenso",
      "target": "quadríceps"
  },
  {
      "id": "3433",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/UfTW8P4WIikMBP",
      "name": "chutes de nadador versão 2 (masculino)",
      "target": "glúteos"
  },
  {
      "id": "3318",
      "bodyPart": "cardio",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/9O7sOJm529rphg",
      "name": "giro 360",
      "target": "cardio"
  },
  {
      "id": "1753",
      "bodyPart": "biceps/triceps",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/oNzJDUeQf4vX9g",
      "name": "mergulho de três bancos",
      "target": "tríceps"
  },
  {
      "id": "2459",
      "bodyPart": "quadriceps/posterior",
      "equipment": "pneu",
      "gifUrl": "https://v2.exercisedb.io/image/IXqnAJNftBLNTy",
      "name": "virada de pneu",
      "target": "glúteos"
  },
  {
      "id": "0811",
      "bodyPart": "quadriceps/posterior",
      "equipment": "barra hexagonal",
      "gifUrl": "https://v2.exercisedb.io/image/U7vD7-uWT7v9Qn",
      "name": "levantamento terra com barra hexagonal",
      "target": "glúteos"
  },
  {
      "id": "0814",
      "bodyPart": "biceps/triceps",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/NGzmG-to4DB8yr",
      "name": "mergulho de tríceps",
      "target": "tríceps"
  },
  {
      "id": "0812",
      "bodyPart": "biceps/triceps",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/YchAGmu5xBi5qi",
      "name": "mergulho de tríceps (com pernas no banco)",
      "target": "tríceps"
  },
  {
      "id": "0813",
      "bodyPart": "biceps/triceps",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/fZO5FEJKwQRPUD",
      "name": "mergulho de tríceps (entre bancos)",
      "target": "tríceps"
  },
  {
      "id": "0815",
      "bodyPart": "biceps/triceps",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/Jp8gscDZ1c2OSY",
      "name": "mergulhos de tríceps no chão",
      "target": "tríceps"
  },
  {
      "id": "0816",
      "bodyPart": "biceps/triceps",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/7KJYdZCTPvN7ka",
      "name": "pressão de tríceps",
      "target": "tríceps"
  },
  {
      "id": "0817",
      "bodyPart": "biceps/triceps",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/dt2xqQmokKEIXo",
      "name": "alongamento de tríceps",
      "target": "tríceps"
  },
  {
      "id": "0871",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/DtgeGlrhSZ7tYk",
      "name": "crunch com encolhimento",
      "target": "abdômen"
  },
  {
      "id": "0818",
      "bodyPart": "costas",
      "equipment": "cabo",
      "gifUrl": "https://v2.exercisedb.io/image/eBR3PNbexptCyi",
      "name": "puxada na barra com pegada paralela dupla",
      "target": "dorsal"
  },
  {
      "id": "1466",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/UksdGe00E9D2x7",
      "name": "levantamento de quadril com torção",
      "target": "glúteos"
  },
  {
      "id": "2802",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/EJ860iTHaOZMlH",
      "name": "elevação de perna torcida",
      "target": "abdômen"
  },
  {
      "id": "2801",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/1olUpPIP-wAy2k",
      "name": "elevação de perna torcida (feminino)",
      "target": "abdômen"
  },
  {
      "id": "3231",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/eBqZMd8GX6TSJh",
      "name": "toque em dois dedos (masculino)",
      "target": "coluna"
  },
  {
      "id": "1365",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/5ByeEDLxmcekN7",
      "name": "alongamento do dorso superior",
      "target": "latíssimo"
  },
  {
      "id": "1366",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/4SsseDwMkzIBz-",
      "name": "cachorro olhando para cima",
      "target": "coluna"
  },
  {
      "id": "3420",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/63UVNWXFpQ00CC",
      "name": "v-sit no chão",
      "target": "abdômen"
  },
  {
      "id": "0826",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/knU7Lc6rmdEmrL",
      "name": "elevação de perna vertical (em barras paralelas)",
      "target": "abdômen"
  },
  {
      "id": "2141",
      "bodyPart": "cardio",
      "equipment": "",
      "gifUrl": "https://v2.exercisedb.io/image/qAzg0Pz1HTh0qQ",
      "name": "caminhada no elíptico",
      "target": "cardio"
  },
  {
      "id": "3655",
      "bodyPart": "cardio",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/nFoXRFvlJaCL3K",
      "name": "passo alto de corrida",
      "target": "cardio"
  },
  {
      "id": "1460",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/LSXsEh94XPkA45",
      "name": "caminhada de passos",
      "target": "glúteos"
  },
  {
      "id": "3666",
      "bodyPart": "cardio",
      "equipment": "graviton",
      "gifUrl": "https://v2.exercisedb.io/image/a9tGAnkLqHUoYe",
      "name": "caminhada na esteira inclinada",
      "target": "cardio"
  },
  {
      "id": "2311",
      "bodyPart": "cardio",
      "equipment": "escada",
      "gifUrl": "https://v2.exercisedb.io/image/k9NizgneUdnYPz",
      "name": "caminhada na escada",
      "target": "cardio"
  },
  {
      "id": "0830",
      "bodyPart": "biceps/triceps",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/AnGA5mDtdgP6X1",
      "name": "mergulho no banco com peso",
      "target": "tríceps"
  },
  {
      "id": "2987",
      "bodyPart": "costas",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/QOlQsYUFORtXQD",
      "name": "pull-up com pegada fechada com peso no suporte de mergulho",
      "target": "dorsal"
  },
  {
      "id": "3643",
      "bodyPart": "quadriceps/posterior",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/Zqbcm5-E6WAZm6",
      "name": "agachamentos cossacos com peso (masculino)",
      "target": "glúteos"
  },
  {
      "id": "0832",
      "bodyPart": "core",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/1xIj6EqaSHZaIR",
      "name": "crunch com peso",
      "target": "abdômen"
  },
  {
      "id": "3670",
      "bodyPart": "core",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/m4wh189QCeKRSZ",
      "name": "abdominal declinado com peso",
      "target": "abdômen"
  },
  {
      "id": "0833",
      "bodyPart": "panturrilha",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/9mzFJ9Rb9JpV9r",
      "name": "elevação de panturrilha de burro com peso",
      "target": "panturrilha"
  },
  {
      "id": "1310",
      "bodyPart": "peito",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/F9KxtCC5UWfRP2",
      "name": "flexão com queda de peso",
      "target": "peitoral"
  },
  {
      "id": "2135",
      "bodyPart": "core",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/3TnMv7zUo8z5GX",
      "name": "prancha frontal com peso",
      "target": "abdômen"
  },
  {
      "id": "0834",
      "bodyPart": "ombro",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/fjf1TViU0UyMhm",
      "name": "elevação frontal com peso",
      "target": "deltóides"
  },
  {
      "id": "0866",
      "bodyPart": "core",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/eMLPIMaSuS0SLM",
      "name": "elevação de perna quadril com peso",
      "target": "abdômen"
  },
  {
      "id": "0835",
      "bodyPart": "costas",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/q1JTqJVoAOd8nc",
      "name": "hiperextensão com peso (no stability ball)",
      "target": "coluna"
  },
  {
      "id": "3641",
      "bodyPart": "ombro",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/22Sdn1HR3JTn5o",
      "name": "passo de joelho com balanço com peso",
      "target": "deltóides"
  },
  {
      "id": "3644",
      "bodyPart": "quadriceps/posterior",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/sA2gFOhDSM24tu",
      "name": "passo com balanço com peso",
      "target": "glúteos"
  },
  {
      "id": "3286",
      "bodyPart": "costas",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/N-vehVRB6UTyVt",
      "name": "muscle up com peso",
      "target": "dorsal"
  },
  {
      "id": "3312",
      "bodyPart": "costas",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/c0NutvKHTuPlbA",
      "name": "muscle up com peso (na barra)",
      "target": "dorsal"
  },
  {
      "id": "3290",
      "bodyPart": "costas",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/xSlohJxYICuzBK",
      "name": "pull-up de um braço com peso",
      "target": "dorsal"
  },
  {
      "id": "0840",
      "bodyPart": "core",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/e6qlYdDiYQOdPN",
      "name": "crunch overhead com peso (no stability ball)",
      "target": "abdômen"
  },
  {
      "id": "0841",
      "bodyPart": "costas",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/doBIOkU6TNrft1",
      "name": "pull-up com peso",
      "target": "dorsal"
  },
  {
      "id": "0844",
      "bodyPart": "ombro",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/Lh-fpb3ytY-ljJ",
      "name": "round arm com peso",
      "target": "deltóides"
  },
  {
      "id": "0846",
      "bodyPart": "core",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/yZs0GuLRob9r5f",
      "name": "twist russo com peso",
      "target": "abdômen"
  },
  {
      "id": "0845",
      "bodyPart": "core",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/ZVu7-5WkxaSqV5",
      "name": "twist russo com peso (pernas levantadas)",
      "target": "abdômen"
  },
  {
      "id": "2371",
      "bodyPart": "core",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/QpZxyyjuv1xnlO",
      "name": "twist russo com peso versão 2",
      "target": "abdômen"
  },
  {
      "id": "0847",
      "bodyPart": "biceps/triceps",
      "equipment": "bola",
      "gifUrl": "https://v2.exercisedb.io/image/vX8W0MgJpb-3n9",
      "name": "rosca de bíceps sentado com peso (no stability ball)",
      "target": "bíceps"
  },
  {
      "id": "0849",
      "bodyPart": "core",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/xlPe4DlT16u6s5",
      "name": "torção sentada com peso (no stability ball)",
      "target": "abdômen"
  },
  {
      "id": "0850",
      "bodyPart": "core",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/9RkSRFxD11W0Ka",
      "name": "inclinação lateral com peso (no stability ball)",
      "target": "abdômen"
  },
  {
      "id": "0851",
      "bodyPart": "quadriceps/posterior",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/Z0OkWlihFCx3PX",
      "name": "agachamento sissy com peso",
      "target": "quadríceps"
  },
  {
      "id": "0852",
      "bodyPart": "quadriceps/posterior",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/DmsonXChtWGtWX",
      "name": "agachamento com peso",
      "target": "glúteos"
  },
  {
      "id": "0853",
      "bodyPart": "biceps/triceps",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/P7iqXL0K1dA7qX",
      "name": "curl em pé com peso",
      "target": "bíceps"
  },
  {
      "id": "0854",
      "bodyPart": "antebraço",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/zn7GdS6iCPGl84",
      "name": "aperto de mão em pé com peso",
      "target": "antebraços"
  },
  {
      "id": "3313",
      "bodyPart": "peito",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/9-NBvaHnT2U-Jb",
      "name": "mergulho em barra reta com peso",
      "target": "peitoral"
  },
  {
      "id": "3642",
      "bodyPart": "quadriceps/posterior",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/NEH0Gyi3mYZXA0",
      "name": "passo alongado com peso",
      "target": "glúteos"
  },
  {
      "id": "0856",
      "bodyPart": "peito",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/jrT07eh2G1zWvd",
      "name": "press de peito com peso",
      "target": "peitoral"
  },
  {
      "id": "1754",
      "bodyPart": "biceps/triceps",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/-WSkRzau5mwYaC",
      "name": "mergulho de tríceps com peso",
      "target": "tríceps"
  },
  {
      "id": "1755",
      "bodyPart": "biceps/triceps",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/fwwH904VnZ2vQo",
      "name": "mergulho de tríceps com peso",
      "target": "tríceps"
  },
  {
      "id": "1767",
      "bodyPart": "biceps/triceps",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/K3qVXpt0WSiC3h",
      "name": "mergulho de tríceps com peso em barras paralelas altas",
      "target": "tríceps"
  },
  {
      "id": "0857",
      "bodyPart": "core",
      "equipment": "roda",
      "gifUrl": "https://v2.exercisedb.io/image/nKFTt8uT0Z8CxH",
      "name": "rolo de pulso",
      "target": "abdômen"
  },
  {
      "id": "3637",
      "bodyPart": "cardio",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/DdRCO5OxTU4FNG",
      "name": "corrida de roda",
      "target": "cardio"
  },
  {
      "id": "1429",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/p-6Fp-riSBU-Nv",
      "name": "pull-up com pegada larga",
      "target": "dorsal"
  },
  {
      "id": "1367",
      "bodyPart": "costas",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/i6ST1iK8hURi-f",
      "name": "pull-up com pegada larga na parte traseira",
      "target": "dorsal"
  },
  {
      "id": "1311",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/MINdiM3DXtyZFr",
      "name": "flexão com as mãos largas",
      "target": "peitoral"
  },
  {
      "id": "2363",
      "bodyPart": "peito",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/-4ZF0b19r2dgHM",
      "name": "mergulho de peito com pegada larga em barras paralelas altas",
      "target": "peitoral"
  },
  {
      "id": "0858",
      "bodyPart": "core",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/AgUx9wS7wD1wci",
      "name": "sprints de vento",
      "target": "abdômen"
  },
  {
      "id": "1604",
      "bodyPart": "quadriceps/posterior",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/nd7aKcqCHKPQgt",
      "name": "alongamento do maior do mundo",
      "target": "isquiotibiais"
  },
  {
      "id": "1428",
      "bodyPart": "antebraço",
      "equipment": "peso do corpo",
      "gifUrl": "https://v2.exercisedb.io/image/aZHR-IP2SigxLm",
      "name": "círculos de pulso",
      "target": "antebraços"
  },
  {
      "id": "0859",
      "bodyPart": "antebraço",
      "equipment": "anilha",
      "gifUrl": "https://v2.exercisedb.io/image/axCFVe6V09eGQ5",
      "name": "rolo de pulso",
      "target": "antebraços"
  }
]