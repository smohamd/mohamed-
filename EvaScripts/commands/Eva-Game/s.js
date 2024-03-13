const C = [
  {
    QS: "لقد وصلت لمنزل السيد والسيدة ادامز ماذا تفعل ؟",
    A: { action: "تطرق الباب قبل الدخول.", result: "فرحو من تصرفك وادخلوك😊☑️", ratio: 100 },
    B: { action: "تدخل مباشرة", result: "قتلوك❌ عليك الاستئذان", ratio: 0 },
    C: { action: "تنضر لداخل المنزل من النافذة", result: "انزعجو من تصرفك لكنك نجوت🙂☑️", ratio: 50 }
  },
  {
    QS: "بعد دخولك المنزل وجدت طاولة مليئة بالطعام ماذا تفعل؟",
    A: { action: "تنظر للطعام بتقزز وترفض الجلوس", result: "غضبت😠 السيدة وقتلتك😱 لانك رفضت الجلوس لقد خسرت ❌", ratio: 0 },
    B: { action: "تستأذن قبل الجلوس😘", result: "😊☑️فرحت السيدة وزوجها من تصرفك", ratio: 100 },
    C: { action: "تسخر من طعام السيدة🙂", result: "غضب زوجها😠 وقام بطعنك خسرت❌", ratio: 0 }
  },
  {
    QS: "بعد جلوسك للأكل ماذا ستفعل🤔",
    A: { action: "تتكلم عن رحلتك اثناء الأكل..", result: "غضبو😠 منك وقتلوك❌ ممنوع الحديث على الطاولة", ratio: 0 },
    B: { action: "تأكل بصمت🤫", result: "تصرف جيد لقد نجوت☑️", ratio: 100 },
    C: { action: "تقول للسيد والسيدة ادامز انهم مخيفين..", result: "غضبت السيدة وقامت بخنقك لقد خسرت ❌", ratio: 0 }
  },
  {
    QS: "بعد انهاء الأكل طلبو منك اختيار فلم للسهرة..ماذا تختار؟",
    A: { action: "فلم كوميدي", result: "خسرت هم يكرهون الضحك❌", ratio: 0 },
    B: { action: "فلم رعب", result: "اعجبهم اختيارك لقد نجوت☑️", ratio: 100 },
    C: { action: "خيال علمي", result: "لم يعجبهم اختيارك لكنهم لم يفعلو شيء نجوت", ratio: 50 }
  },
  {
    QS: "أثناء مشاهدة الفلم شعرت بالنعاس 😴 ماذا تفعل؟ ",
    A: { action: "تذهب مباشرة للغرفة", result: "خسرت❌ غضب السيد وقام بقتلك عليك الاستئذان😠", ratio: 0 },
    B: { action: "تستأذن للذهاب للغرفة", result: "لقد سمحو لك نجوت😊☑️", ratio: 100 },
    C: { action: "تنام على الأريكة", result: "انزعجت ‼️ السيدة وأيقضتك-اذهب للغرفة", ratio: 50 }
  },
  {
    QS: "المرحلة الثانية🔥\nعندما ذهبت للغرفة تفاجأت بوجود باب ثاني في الغرفة..عندما ذهبت لفتحه سعرت بيد تمسك كتفك بقوة ماذا تفعل؟",
    A: { action: "تخاف وتلتفت بسرعة😱", result: "كانت السيدة ادامز وهي منزعجة واخبرتك الا تفتح الباب نجوت..", ratio: 50 },
    B: { action: "ترصخ 😱", result: "لقد خسرت❌ قامت السيدة بكسر رقبتك ", ratio: 0 },
    C: { action: "تلتفت بهدوء😱", result: "ناضرتك السيدة بلطف واخبرتك ان تخلد للنوم ولا تفتح الباب😁", ratio: 100 }
  },
  {
    QS: "فعلت ماقالته لك السيدة وذهبت للسرير رغم فضولك وتسائلك على الباب.. اثناء نومك سمعت صوت موسيقى بالأسفل...\nعند نزولك للاسفل وجدت السيدة والسيد يرقصون بغرابة ماذا تفعل؟",
    A: { action: "تناضرهم ثم تعود لغرفتك", result: "لم يلاحضوك واكملو الرقص☑️نجوت", ratio: 100 },
    B: { action: "تخبرهم ان الموسيقى مزعة", result: "ناضرتك السيدة بغضب وطلبت منك العودة للغرفة وعدم ازعاجهم.. نجوت", ratio: 50 },
    C: { action: "تغلق الموسيقى فورا", result: "لقد خسرت ❌ قام السيد بضربك حتى الموت", ratio: 0 }
  },
  {
    QS: "عندما ذهبت للنوم 😪سمعت صوت غريب😥 قادم من باب الغرفة الغريب وكان احدهم يصرخ😱...كنت ستذهب لرؤية مايحدث لكنك سمعت خطوات مسرعة قادم نحو الغرفة فماذا ستفعل🧐؟",
    A: { action: "تتصنع النوم", result: "كانت السيدة ادامز هي من اتت وخرجت عندما راتك نائم لقد نجوت☑️", ratio: 100 },
    B: { action: "تناظر باب الغرفة حتى ترى من سياتي..", result: "كشفتك السيدة وقامت بقتلك لقد خسرت❌", ratio: 0 },
    C: { action: "تضع الغطاء على وجهك", result: "دخلت السيدة وكشفت عن وجهك.. انت لست نائم,امت بقتلك لقد خسرت❌", ratio: 0 }
  },
  {
    QS: "أثناء تصنعك النوم نمت بالفعل..في اليوم التالي اثناء نزولك من الطابق العلوي كان السيد ادامز يناضرك بغرابة واخبرك ان والدتك اتصلت لتسأل عنك.. ماذا تقول لها؟",
    A: { action: "تطلب منها ان تاتي وتاخذك لانك لست مرتاح معهم", result: "يغضب السيد ادامز ويكسر عنقك لقد خسرت❌", ratio: 0 },
    B: { action: "تخبرها انك سعيد جدا مع الزوجين ادامز", result: "يفرح السيد ادامز لقد نجوت☑️", ratio: 100 },
    C: { action: "تخبرها انهما لطيفان معك وتضحك", result: "ممنوع الضحك لقد خسرت❌ قتلك السيد", ratio: 0 }
  },
{
    QS: "بعد انتهاء المكالمة اخبرتك السيدة ادامز انهم سيذهبون للسوق وطلبو منك عدم الخروج ماذا تفعل؟",
    A: { action: "تقول حسنا باحترام", result: "تبتسم لك السيدة لقد نجوت", ratio: 100 },
    B: { action: "تخبرها انه لا شان لها", result: "طعنتك حتى الموت لقد خسرت❌", ratio: 0 },
    C: { action: "تتجاهلها", result: "غضبت لكنها مستعجلة لقد نجوت☑️", ratio: 50 }
  },  
  {
    QS: "عندما خرجو اخذت هاتفك📱 وذهبت نحو ذلك الباب🚪 الغريب حيث سمعت الصراخ..بعد دخولك رايت مشهدا مروعا😱 من دماء😨 ولحوم ورائحة قذرة 🤢واصلت التقدم حتى وجدت خنزير يقف على قدميه 😱يقطع اللحم ماذا تفعل؟",
    A: { action: "تختبأ بسرعة كي لا يراك", result: "لم يلاحضك الخنزير وذهببعيظا عنك لقد نجوت☑️", ratio: 100 },
    B: { action: "تقول له مرحبا", result: "تسلم عليه لماذا يا احمق قتلك لقد خسرت❌", ratio: 0 },
    C: { action: "تنضر اليه بصدمة", result: "قتلك لقد خسرت❌", ratio: 0 }
  },
  {
    QS: "المرحلة الثالثة والاخيرة🔥\nبعد ذهاب الخنزير سمعت صراخ فتاة تستغيث لكنك كنت خائف ان تدخل ويمسكك الخنزيل انتضرت حتى ذهابه وتسللت للغرفة...عند دخولك وجدت فتاة تبكي ومليئة بالاصابات اخبرتك ان السيدة ادامز وزوجها احتجزوها هنا والخنزير يقوم بتعذيبها وسوف يقتلها..\n نضرت لها ماذا ستفعل؟",
    A: { action: "تتجاهلها وتخرج", result: "بدات في الصراخ كشفك الخنزير وقتلك لقد خسرت❌", ratio: 0 },
    B: { action: "توافق على مساعدتها", result: "فرحت جدا وشكرتك☑️", ratio: 100 },
    C: { action: "تعتذر لها وتذهب", result: "سمعك الخنزير وقتلك لقد خسرت❌", ratio: 0 }
  },
  {
    QS: "بعد خروجكم من الغرفة وانت تحملها ظهر الخنزير امامكم وفي يده مطرقة مذا ستفعل؟",
    A: { action: "تصرخ", result: "امسك بك وقتلك لقد خسرت❌", ratio: 0 },
    B: { action: "تبقى هادءا", result: "امسك بك وقتلك لقد خسرت❌", ratio: 0 },
    C: { action: "ترمي عليه قطعة من اللحم وتهرب", result: "كانت القطعة كبيرة لقد وقع وتمكنت من الهرب☑️", ratio: 100 }
  },
  {
    QS: "نزلت للطابق السفلي وجدت السيدة ادامز وزوجها يناضرنوك بغرابة وفي يد السيد ادامز راس طفل ماذا تفعل؟",
    A: { action: "تصرخ بفزع", result: "اقترب السيد ادامز منك وقتلك لقد خسرت❌", ratio: 0 },
    B: { action: "تناظر الرأس وتحاول تمالك اعصابك", result: "تركك الزوجين وذهبو للمطبخ لقد نجوت☑️", ratio: 100 },
    C: { action: "تناظر الرأس بصدمة", result: "ناضرتك السيدة بغضب ادامز وقالت لما الصدمة انه مجرد راس لقد نجوت كن حذرا", ratio: 50 }
  },
  {
    QS: "جلست تفكر قليلاً ثم طلب من السيدة ادامز وزوجها الذهاب للقبو لانك سمعت ضجيج هناك وذهب السيدان ماذا ستفعل؟",
    A: { action: "تغلق عليهم الباب بالمفتاح", result: "نجحت وخدعتهم☑️", ratio: 100 },
    B: { action: "تنزل معهم", result: "وجدك الخنزير وقام بقتلك لقد خسرت❌", ratio: },
    C: { action: "تضل واقف عند الباب", result: "شكو فك وقتلوك لقد خسرت❌", ratio: }
  },
]

module.exports = C;