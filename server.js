const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');

app.use(cors());

const Characters = {
    'courage': {
        'name': 'Courage',
        'role': 'Main Character',
        'species': 'pink beagle',
        'description': 'Courage is the title character and protagonist of the series, who lives in Nowhere, Kansas, Courage was abandoned as a puppy after his parents were sent into outer space, but was adopted by Muriel Bagge. Her husband Eustace regularly mistreats him. Ironically, given his name, Courage is a genuine coward and he often expresses his distress with over-the-top, piercing shrieks. Regardless, he still goes to great lengths to protect his owners. To the end, he often gets injured, sometimes quite brutally, and only surviving through his determination and/or pure luck.',
        'voiceActors': 'Howard Hoffman (pilot), Marty Grabstein',
        'image': 'https://vignette.wikia.nocookie.net/courage/images/6/6b/Courage.png/revision/latest?cb=20170711183652',
    },
    'muriel bagge': {
        'name': 'Muriel Bagge',
        'role': 'Main Character',
        'species': 'human',
        'description': 'Muriel Bagge is the wife of Eustace Bagge and the mother of Muriel Bagge Jr. She is the owner of Courage, who she adopted after he was abandoned by his parents. She is a very kind and caring',
        'voiceActors': 'Howard Hoffman (pilot), Thea White',
        'image': 'https://static.wikia.nocookie.net/courage/images/d/d9/Muriel_Bagge.png/revision/latest?cb=20181025053335',
    },
    'eustace bagge': {
        'name': 'Eustace Bagge',
        'role': 'Main Character',
        'species': 'human',
        'description': 'Eustace Bagge is Muriel\'s husband. He is an elderly, skinny, smart, and cynical man who is obsessed with his vintage truck. Eustace wears glasses identical in appearance to Muriel\'s. His brown hat shields his glistening bald head. Eustace is the current owner of the farmhouse, which was previously owned by his now-deceased brother Horst. Eustace regularly yells at Courage and calls him a "stupid dog".',
        'voiceActors': ' Howard Hoffman (pilot), Lionel Wilson (Episodes 1–33),[1] Arthur Anderson (Episodes 34–52)',
        'image': 'https://static.wikia.nocookie.net/courage/images/a/ac/Eustace_Bagge.png/revision/latest?cb=20181025053335',
    },
    'computer': {
        'name': 'Computer',
        'role': 'supporting character',
        'species': 'computer',
        'description': 'Courage\'s computer that speaks with an English accent and gives him advice on how to deal with crazy situations. He is very cynical and sarcastic towards Courage and has a habit of regularly cracking jokes in any situation.',
        'voiceActors': 'Simon Prebble',
        'image': 'https://64.media.tumblr.com/a1a16802e6ae08185f895810be58d7d2/tumblr_inline_owk34l4llK1r9atfx_640.png',
    },
    'dr.vindaloo': {
        'name': 'Dr. Vindaloo',
        'role': 'supporting character',
        'species': 'human',
        'description': 'Dr. Vindaloo is an Indian doctor with a thick accent, whom Eustace and Muriel see when something is wrong. He is one of the few characters in the series who can perfectly understand what Courage is trying to say. He diagnoses his patients as not having serious problems or that there is nothing that he can do, but has, on occasion, been a great help, as in "Invisible Muriel", where he managed to discover how to return Muriel to normal.',
        'voiceActors': 'Paul Schoeffler',
        'image': 'https://i.imgur.com/vMXmSc6h.jpg',
    },
    'ma bagge': {
        'name': 'Ma Bagge',
        'role': 'supporting character',
        'species': 'human',
        'description': 'Ma Bagge is the mother of Eustace and Horst and Muriel\'s mother-in-law, who shares a love-hate relationship with the farmer. She also lives in a trailer. She is also the widow of Icket Bagge. Like Eustace she is actually bald but wears a wig and looks almost identical to her son, but much shorter. Like Eustace, Ma is insecure due to being bald, but she does have her teeth. It is learned that Ma and Horst\'s ill treatment was part of Eustace\'s negative personality.',
        'voiceActors': 'Billie Lou Watt',
        'image': 'https://static.tvtropes.org/pmwiki/pub/images/140472b.jpg',
    },
    'shirley the medium': {
        'name': 'Shirley the Medium',
        'role': 'supporting character',
        'species': 'green Chihuahua',
        'description': 'Shirley the Medium is a small green Chihuahua garbed as a stereotypical Gypsy fortune-teller with a Romanian accent who resides in a dilapidated caravan. She has a strong dislike of Eustace (whom she always refers to as "the stupid one") because he is greedy and selfish and she places Eustace under curses a lot to get him to be a better person. Shirley is one of Courage\'s three confidants, the others being the Computer and Dr. Vindaloo, and helps him occasionally by casting and reciting spells and playing the saxophone in-between verses.',
        'voiceActors': 'Mary Testa',
        'image': 'https://is3-ssl.mzstatic.com/image/thumb/I_VcXF4BQSk5lVVDK7REig/1200x675.jpg',
    },
    'katz': {
        'name': 'Katz',
        'role': 'major antagonist',
        'species': 'cat',
        'description': 'Katz is a red, lanky anthropomorphic cat with a posh English accent. He is Courage\'s nemesis and the show\'s most recurring antagonist, though Muriel and Eustace consistently fail to recognize him. He specializes in scam businesses and is extremely sadistic. Many of his businesses involve torturing or outright killing his customers; for example, in "Night at the Katz Motel," he fed his motel residents to flesh-eating spiders, and in "Klub Katz," he transformed the vacationers into anthropomorphic machines to fight for him gladiator-style.[6] All of his businesses enforce a strict "No Dogs Allowed" policy, forcing Courage to sneak in. He often challenges Courage to ironically banal games such as wall-ball and staring contests, which Courage invariably loses; nevertheless, he is always defeated in the end.',
        'voiceActors': 'Paul Schoeffler',
        'image': 'https://static.wikia.nocookie.net/warner-bros-entertainment/images/2/25/Arthur-zambaldi-courage-monsters-katz.jpg/revision/latest/top-crop/width/360/height/450?cb=20210207032413',
    },
    'le quack': {
        'name': 'Le Quack',
        'role': 'major antagonist',
        'species': 'duck',
        'description': 'Le Quack is a French con-artist duck, who first appears early in the show\'s first season, in which he has a fake amnesia-specialist license. He comes to the Bagges\'s house when Muriel suffers from amnesia. Since then, he frequently returns and manages to dupe Courage\'s owners into helping him commit crime sprees. Le Quack is also shown to be capable of escaping custody such as when he was first arrested and secondly cause a fire at prison.',
        'voiceActors': 'Paul Schoeffler',
        'image': 'https://static.wikia.nocookie.net/courage/images/b/b9/Le_Quack.png/revision/latest?cb=20120519203331',
    },
    'di lung': {
        'name': 'Di Lung',
        'role': 'major antagonist',
        'species': 'human',
        'description': 'Di Lung is a young Chinese American inventor. He also likes to verbally and physically abuse Courage whenever he sees him, and often does his experiments on him. He made his debut appearance in the episode "Hothead". He is very inconsiderate and rude and usually gets caught in the middle of the chaos happening in Nowhere, prompting him to shout his catchphrase of "Watch where you\'re going, ya foo!", which is a running gag in the series. He is the inventor of Mecha Courage. Di Lung also has two aunts: one good and one bad, who are both the Empresses of China; thus, this could make him royalty.',
        'voiceActors': 'Tim Chi Ly',
        'image': 'https://static.wikia.nocookie.net/courage/images/8/89/Dilung.png/revision/latest?cb=20130329152655',
    }
}


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api/:characterName', (req, res) => {
    const characterName = req.params.characterName.toLowerCase()
    if (Characters[characterName]) {
        res.json(Characters[characterName]);
    } else {
        res.json({ error: 'Character not found' });
    }
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});