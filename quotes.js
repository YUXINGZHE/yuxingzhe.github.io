﻿var dictaColor = ''; //文字颜色
function dowritedicta(num){
 var randid = Math.round(Math.random()*num);
 randid = randid >= num ? num-1 : randid;
 
 document.write('<font color="' + dictaColor + '">' + dictumin[randid] + '</font>');
}
var dictumin = new Array(
 '草在结它的种子/风在摇它的叶子/我们站着，不说话/就十分美好',
 '我达达的马蹄是美丽的错误，我不是归人，是个过客',
 '面朝大海，春暖花开',
 '春水初生，春林初盛，春风十里，不如你',
 '灵魂，你还年轻，为什么要流浪？',
 '微风吹动我头发，教我如何不想她',
 '你是一树一树的花开，是燕在梁间呢喃；你是爱，是暖，是希望，你是人间四月天',
 '最是那一低头的温柔，恰似一朵水莲花不胜凉风的娇羞',
 '少年不识愁滋味，爱上层楼，爱上层楼，为赋新词强说愁。而今识尽愁滋味，欲说还修休，欲说还休，却道天凉好个秋。',
 '人生如寄，多忧何为？',
 '休对故人思故国,且将新火试新茶。诗酒趁年华。',
 '绿蚁新焙酒，红泥小火炉。晚来天欲雪，能饮一杯无？',
 '记得窗前槐树吗？几回树下过家家。泥巴盘子泥巴碗，塑料摇车塑料娃。儿时梦，散如沙，谁知转瞬即天涯。老房拆去树还在，一到夏天开白花。',
 '静卧仓房岁月堆，深蓝封面满尘灰。一只纸鹤页中夹，忘是当年折给谁。',
 '怏怏风无力，昏昏人半醒。辛勤小黄狗，打转扑苍蝇。',
 '向之所欣，俯仰之间，已为陈迹，犹不能不以之兴怀。',
 '庭有枇杷树，吾妻死之年所手植也，今已亭亭如盖矣。',
 '弃捐勿复道，努力加餐饭！',
 '此去经年，应是良辰美景虚设。便纵有千种风情，更与何人说',
 '东边日出西边雨，道是无晴却有晴。',
 '兴，百姓苦，亡，百姓苦。',
 '悟已往之不谏,知来者之可追; 实迷途其未远,觉今是而昨非。',
 '对酒当歌，人生几何？譬如朝露，去日苦多。',
 '昨夜敲棋寻子路，今早对镜见颜回',
 '吾心似明月，碧潭清皎洁。无物堪比伦，更与何人说！',
 '过去之心不可得，未来之心不可得，万法皆如，俱入目前',
 '青青陵上柏，磊磊涧中石。人生天地间，忽如远行客。',
 '寒塘渡鹤影，冷月葬花魂。',
 '夫天地者，万物之逆旅；光阴者，百代之过客。而浮生若梦，为欢几何？',
 '可怜无定河边骨，犹是深闺梦里人。',
 '莫听穿林打叶声，何妨吟啸且徐行。竹杖芒鞋轻胜马，谁怕，一蓑烟雨任平生。料峭春风吹酒醒，微冷，山头斜照却相迎。回首向来萧瑟处，归去，也无风雨也无晴。',
 '前不见古人，后不见来者，念天地之悠悠，独怆然而涕下。',
 '惟草木之零落兮，恐美人之迟暮',
 '人生不相见，动如参与商',
 '众里寻他千百度，蓦然回首，那人却在灯火阑珊处',
 '昨夜西风凋碧树，独上高楼，望尽天涯路',
 '衣带渐宽终不悔，为伊消得人憔悴',
 '原来姹紫嫣红开遍，似这般都付与断井颓垣。良辰美景奈何天，赏心乐事谁家院?朝飞暮卷，云霞翠轩，雨丝风片，烟波画船。锦屏人忒看的这韶光溅!',
 '我见青山多妩媚，料青山见我应如是',
 '白发渔樵江楮上，惯看秋月春风。一壶浊酒喜相逢，古今多少事，都付笑谈中！',
 '蜗牛角上争何事，石火光中寄此身',
 '哀吾生之须臾，羡长江之无穷，挟飞仙以遨游，抱明月而长终。知不可乎骤得，托遗响于悲风。',
 '眼看他起朱楼，眼看他宴宾客，眼看他楼塌了。',
 '欲渡黄河冰塞川，将登太行雪满山。',
 '子曰：“学而时习之，不亦悦乎？有朋自远方来，不亦乐乎？人不知而不愠，不亦君子乎？”',
 '子曰：巧言令色，鲜矣仁。',
 '曾子曰：吾日三省吾身，为人谋而不忠乎？与朋友交而不信乎？传不习乎？ ',
 '子曰：君子食无求饱，居无求安，敏于事而慎于言，就有道而正焉，可谓好学也已。',
 '子曰：“吾十有五而志于学，三十而立，四十而不惑，五十而知天命，六十而耳顺，七十而从心所欲，不逾矩。”',
 '子曰：“君子周而不比，小人比而不周。”',
 '子曰：“知之为知之，不知为不知，是知也。”',
 '子曰：“成事不说，遂事不谏，既往不咎。”',
 '子曰：“质胜文则野，文胜质则史。文质彬彬，然后君子。”',
 '子曰：“知之者不如好之者，好之者不如乐之者。”',
 '子曰：“默而识之，学而不厌，诲人不倦，何有于我哉？”',
 '子在齐闻《韶》，三月不知肉味。曰：“不图为乐之至于斯也。”',
 '子曰：“三人行，必有我师焉。择其善者而从之，其不善者而改之。”',
 '子曰：“后生可畏，焉知来者之不如今也？”',
 '子曰：“巧言乱德。小不忍则乱大谋。”',
 '道可道，非常道。名可名，非常名。无名天地之始。有名万物之母。故常无欲，以观其妙。常有欲以观其徼。此两者同出而异名，同谓之玄。玄之又玄，众妙之门。',
 '天长地久。天地所以能长且久者，以其不自生，故能长生。是以圣人後其身而身先，外其身而身存。非以其无私邪！故能成其私。',
 '反者道之动。弱者道之用。天下万物生於有，有生於无。',
 '不得贪胜，入界宜缓，攻彼顾我，弃子争先，舍小就大，逢危需弃，慎勿轻速，动须相应，彼强自保，试孤取和。',
 '大知闲闲，小知间间；大言炎炎，小言詹詹。',
 '山木自寇也，膏火自煎也，桂可食，故伐之；漆可用，故割之。人皆知有用之用，而莫知无用之用也。',
 '夫哀莫大于心死，而人死亦次之。',
 '大寒既至，霜雪既降，吾是以知松柏之茂也。',
 '不知周之梦为胡蝶与，胡蝶之梦为周与？',
 '人生天地之间，若白驹过隙，忽然而已。',
 '故绝圣弃知，大盗乃止。',
 '圣人不死，大盗不止。',
 '名也者，相轧也；知也者，争之器。二者凶器，非所以尽行也。',
 '子非我，安知我不知鱼之乐？',
 '夫大块载我以形，劳我以生，佚我以老，息我以死。故善生者，乃所以善死也。',
 '日出而作，日入而息，逍遥于天地之间。'
 );
dowritedicta(dictumin.length);
