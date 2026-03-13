var useState = React.useState;
var useEffect = React.useEffect;
var useCallback = React.useCallback;

const TEAMS=[{id:"worship",name:"Worship Team",color:"#2563EB",icon:"🎵",lead:"Joel",members:["Joel","Sneha","Jasper","Likitha","Johnson"]},{id:"media",name:"Media Team",color:"#7C3AED",icon:"📷",lead:"Joshua",members:["Joshua","Rutex","Small Pavithra","Pavithra Big"]},{id:"social",name:"Social Media",color:"#EA580C",icon:"📱",lead:"Isaac",members:["Isaac","Joel","Rutex","Pavithra Big"]},{id:"outreach",name:"Outreach & Welcome",color:"#DC2626",icon:"🤝",lead:"Arpana",members:["Arpana","Sony","Pavithra Big"]},{id:"prayer",name:"Prayer Team",color:"#059669",icon:"🙏",lead:"Samson",members:["Samson","Johnson"]}];
const ALL_MEMBERS=[{name:"Rutex",role:"Lead Photographer",teams:["media","social"]},{name:"Sneha",role:"Vocalist / Backup Worship Leader",teams:["worship"]},{name:"Small Pavithra",role:"Lyrics & Slides Operator",teams:["media"]},{name:"Likitha",role:"Piano Trainee",teams:["worship"]},{name:"Arpana",role:"Welcome & Follow-Up Coordinator",teams:["outreach"]},{name:"Sony",role:"Attendance & Call-Back Lead",teams:["outreach"]},{name:"Isaac",role:"Social Media Lead + Kids Ministry",teams:["social"]},{name:"Joshua",role:"Camera & Technical Support",teams:["media"]},{name:"Samson",role:"Prayer Team Lead",teams:["prayer"]},{name:"Pavithra Big",role:"Fellowship & Evangelism + Backup Photo",teams:["outreach","social","media"]},{name:"Joel",role:"Worship + Social Media Content",teams:["worship","social"]},{name:"Johnson",role:"Worship Intercessor",teams:["worship","prayer"]},{name:"Jasper",role:"Guitarist",teams:["worship"]},{name:"Sharon",role:"To Be Assigned",teams:[]},{name:"Rosy",role:"To Be Assigned",teams:[]},{name:"Deva",role:"To Be Assigned",teams:[]},{name:"Kanuj",role:"To Be Assigned",teams:[]}];
const WEEKLY_SCHEDULE=[{month:1,weeks:[{wk:1,theme:"Team Launch",events:["Team dedication meeting","First rehearsal","Equipment audit","Set up social accounts","Launch Wednesday prayer"]},{wk:2,theme:"Roles Solidified",events:["Rehearsal #2","Test camera + projector","First 3 social posts","Discovery meetings: Sharon, Rosy, Deva, Kanuj"]},{wk:3,theme:"Content Push",events:["Rehearsal #3","Content Challenge","Fellowship event planning","Pre-worship night prayer fast"]},{wk:4,theme:"Worship Night #1",events:["WORSHIP NIGHT","Full livestream attempt","Highlight reel within 24hrs","Visitor follow-up by Monday"]}]},{month:2,weeks:[{wk:5,theme:"Debrief & Systems",events:["Month 1 review","Build song library","Analytics review","Launch Newcomers Connect"]},{wk:6,theme:"Cross-Training",events:["Joint Media + Worship meeting","Testimony video series","Gospel sharing training","Sneha leads rehearsal"]},{wk:7,theme:"Creative Week",events:["Worship mashup","CapCut/Canva workshop","Plan community outreach","Brotherhood fellowship"]},{wk:8,theme:"Youth-Led Night #2",events:["WORSHIP NIGHT #2","Community outreach event","Daily social posts","Invite competition"]}]},{month:3,weeks:[{wk:9,theme:"Evaluate & Mentor",events:["Quarterly evaluation","One-on-one feedback","Social media report","Retention check"]},{wk:10,theme:"Evangelism Training",events:["60-Sec Testimony practice","Collab content","Evangelism training night","Breakthrough prayer"]},{wk:11,theme:"Final Push",events:["Highlight reel editing","Share Challenge","Invite blitz (5 each)","Prayer and fasting day"]},{wk:12,theme:"Celebrate & Commission",events:["CELEBRATION NIGHT","Multi-camera production","Commission new leaders","Cast Q2 vision"]}]}];
const PHOTO_CHECKLIST=[{id:1,shot:"Wide Establishing Shot",desc:"Whole room from the back",tip:"Shoot from slightly above"},{id:2,shot:"Worship Leader Close-Up",desc:"Singing with emotion",tip:"Use Portrait mode"},{id:3,shot:"Band / Musicians",desc:"Hands on strings, drummer",tip:"Side angles"},{id:4,shot:"Congregation Worshipping",desc:"Raised hands, singing",tip:"Front AND back"},{id:5,shot:"Altar / Prayer Moments",desc:"People at the altar",tip:"Respect the moment"},{id:6,shot:"Speaker / Pastor",desc:"Preaching with energy",tip:"Burst mode"},{id:7,shot:"Fellowship / Candid",desc:"Laughing, hugging, chatting",tip:"Don't stage it"},{id:8,shot:"Details / Atmosphere",desc:"Bible, lights, lyrics",tip:"Shoot 5-10"},{id:9,shot:"Before & After",desc:"Empty room vs packed",tip:"Contrast tells a story"},{id:10,shot:"Group / Team Photo",desc:"Whole team together",tip:"Take multiple shots"}];
const CONTENT_CALENDAR=[{day:"Monday",type:"Scripture Graphic",platform:"IG + FB",who:"Designer",color:"#7C3AED"},{day:"Tuesday",type:"Behind the Scenes",platform:"IG Stories",who:"Joel",color:"#EA580C"},{day:"Wednesday",type:"Sermon Clip / Reel",platform:"IG + YT Shorts",who:"Joel + Isaac",color:"#DC2626"},{day:"Thursday",type:"Team Appreciation",platform:"IG Stories",who:"Isaac",color:"#059669"},{day:"Friday",type:"Hype Reel",platform:"IG + TikTok",who:"Joel + Isaac",color:"#2563EB"},{day:"Saturday",type:"Sunday Reminder",platform:"IG Stories",who:"Isaac",color:"#7C3AED"},{day:"Sunday",type:"Live / Best Photo",platform:"All",who:"Isaac + Rutex",color:"#EA580C"}];
const PRAYER_FOCUS=[{day:"Mon",focus:"Pray for each team member by name",icon:"👥"},{day:"Tue",focus:"Pray for unity among the teams",icon:"🤝"},{day:"Wed",focus:"Wednesday prayer (Samson leads)",icon:"📞"},{day:"Thu",focus:"Pray for church growth & new youth",icon:"🌱"},{day:"Fri",focus:"Pray for wisdom & anointing",icon:"👑"},{day:"Sat",focus:"Pray for Sunday's service",icon:"\u26EA"},{day:"Sun",focus:"Pray for the harvest",icon:"🌾"}];

const SK={attendance:"fgclc-att",photoChecks:"fgclc-pho",prayerLog:"fgclc-pra",contentDone:"fgclc-con",tasks:"fgclc-tsk",notes:"fgclc-not",weekProgress:"fgclc-wp",activities:"fgclc-act",user:"fgclc-user",users:"fgclc-users",bbbs:"fgclc-bbbs",customWeeks:"fgclc-cw",customTeams:"fgclc-ct",teens:"fgclc-teens",followups:"fgclc-fu",pubWeeks:"fgclc-pub",teamData:"fgclc-td",practice:"fgclc-prc",messages:"fgclc-msg",customPlan:"fgclc-cp",chat:"fgclc-chat",weeklyRhythm:"fgclc-wr",savedSongs:"fgclc-songs"};

var VERSES=[
  {ref:"Psalm 23:1",text:"The Lord is my shepherd; I shall not want.",reflection:"When life feels uncertain, remember that your Shepherd walks ahead of you. He knows your college stress, your career worries, and your family struggles. Rest in His provision today."},
  {ref:"Jeremiah 29:11",text:"For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you.",reflection:"God's plans for your life are bigger than your current situation. That exam result, that job rejection, that broken friendship - none of it has derailed His purpose for you."},
  {ref:"Philippians 4:13",text:"I can do all things through Christ who strengthens me.",reflection:"This isn't about superhuman ability - it's about supernatural dependence. Whether you're leading worship or facing a tough Monday, His strength is made perfect in your weakness."},
  {ref:"Romans 8:28",text:"And we know that in all things God works for the good of those who love Him.",reflection:"Even the difficult seasons have purpose. God is weaving every experience into something beautiful. Trust the process and keep serving faithfully."},
  {ref:"Isaiah 41:10",text:"Fear not, for I am with you; be not dismayed, for I am your God.",reflection:"Fear is real, but God's presence is more real. He is with you in that crowded bus, in that lonely hostel room, in that intimidating meeting. You are never alone."},
  {ref:"Proverbs 3:5-6",text:"Trust in the Lord with all your heart and lean not on your own understanding.",reflection:"Sometimes the smartest thing you can do is surrender your logic to God's wisdom. He sees the full picture. Let Him direct your steps today."},
  {ref:"Matthew 11:28",text:"Come to me, all you who are weary and burdened, and I will give you rest.",reflection:"You don't need to carry everything alone. Bring your burdens to Jesus today - the pressure of expectations, the weight of responsibilities. He offers real rest."},
  {ref:"Psalm 46:10",text:"Be still, and know that I am God.",reflection:"In a world of constant notifications and deadlines, stillness is an act of faith. Take a moment today to simply be present with God. He is still on the throne."},
  {ref:"Joshua 1:9",text:"Be strong and courageous. Do not be afraid; do not be discouraged.",reflection:"Courage isn't the absence of fear - it's trusting God in spite of it. Step boldly into what He's called you to do today, whether big or small."},
  {ref:"Ephesians 2:10",text:"For we are God's handiwork, created in Christ Jesus to do good works.",reflection:"You are not an accident. God crafted you with specific gifts for specific purposes. Your role in church, your talents, your personality - all intentionally designed."},
  {ref:"1 Peter 4:10",text:"Each of you should use whatever gift you have received to serve others.",reflection:"Your gift of singing, photography, encouragement, or hospitality isn't just for you. It's meant to build up the body of Christ. How can you serve someone today?"},
  {ref:"Colossians 3:23",text:"Whatever you do, work at it with all your heart, as working for the Lord.",reflection:"Whether you're studying, working, or serving in church - do it excellently. Your effort is an offering to God, not just a task to complete."},
  {ref:"Psalm 127:1",text:"Unless the Lord builds the house, the builders labor in vain.",reflection:"All our ministry plans and strategies mean nothing without God's blessing. Before we work for Him, let's make sure we're working with Him."},
  {ref:"Hebrews 10:25",text:"Let us not give up meeting together, but let us encourage one another.",reflection:"Church isn't optional - it's essential. Your presence on Sunday, at prayer meetings, at practice - it matters more than you know. Show up and encourage someone today."},
  {ref:"2 Timothy 1:7",text:"For God has not given us a spirit of fear, but of power and of love and of a sound mind.",reflection:"That anxiety you feel? It's not from God. He gave you power to overcome, love to share, and a sound mind to make wise decisions. Walk in that identity today."},
  {ref:"Psalm 119:105",text:"Your word is a lamp to my feet and a light to my path.",reflection:"When you're confused about the next step, open the Word. God's guidance comes through Scripture. Make time for it daily, even just 10 minutes."},
  {ref:"Romans 12:2",text:"Be transformed by the renewing of your mind, that you may prove what is the good and perfect will of God.",reflection:"What you feed your mind shapes who you become. Choose worship over worry, Scripture over scrolling, prayer over panic. Transformation starts in your thought life."},
  {ref:"Galatians 6:9",text:"Let us not become weary in doing good, for at the proper time we will reap a harvest.",reflection:"Ministry can feel thankless sometimes. Keep serving, keep showing up, keep loving. The harvest is coming - you just can't see it yet."},
  {ref:"Psalm 37:4",text:"Delight yourself in the Lord, and He will give you the desires of your heart.",reflection:"This isn't a vending machine promise. When you truly delight in God, your desires begin to align with His. And those desires? He loves to fulfill them."},
  {ref:"Isaiah 40:31",text:"Those who hope in the Lord will renew their strength. They will soar on wings like eagles.",reflection:"Feeling drained from the week? Hope in God isn't wishful thinking - it's active waiting. Let Him renew your strength today so you can soar again tomorrow."},
  {ref:"John 3:16",text:"For God so loved the world that He gave His one and only Son, that whoever believes in Him shall not perish.",reflection:"This verse never gets old because His love never gets old. You are deeply, personally, and eternally loved. Let that truth anchor you today."},
  {ref:"Psalm 91:1-2",text:"Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty.",reflection:"God's protection isn't a distant promise - it's a present reality. Dwell close to Him today. In His shadow, you find safety and peace."},
  {ref:"Matthew 6:33",text:"Seek first His kingdom and His righteousness, and all these things will be given to you.",reflection:"Priorities matter. When God comes first - before career ambitions, before relationships, before comfort - everything else falls into its rightful place."},
  {ref:"Lamentations 3:22-23",text:"His mercies are new every morning; great is Your faithfulness.",reflection:"Yesterday's failures don't define today. God's mercy has a fresh supply waiting for you every single morning. Start today with a clean slate and a grateful heart."},
  {ref:"Psalm 34:8",text:"Taste and see that the Lord is good; blessed is the one who takes refuge in Him.",reflection:"Knowing about God and knowing God are different things. Experience His goodness personally today - in worship, in prayer, in the beauty around you."},
  {ref:"2 Corinthians 12:9",text:"My grace is sufficient for you, for my power is made perfect in weakness.",reflection:"You don't need to pretend to have it all together. Your weakness is actually where God does His best work. Be honest about your struggles and watch Him move."},
  {ref:"Deuteronomy 31:6",text:"Be strong and courageous. The Lord your God goes with you; He will never leave you nor forsake you.",reflection:"Whether you're stepping into a new role in church or facing an uncertain future, God goes before you, beside you, and behind you. You're completely surrounded."},
  {ref:"Psalm 100:4",text:"Enter His gates with thanksgiving and His courts with praise; give thanks to Him and praise His name.",reflection:"Start your day with gratitude, not complaints. Thank God for your health, your church family, your purpose. Worship changes your perspective on everything."},
  {ref:"Romans 15:13",text:"May the God of hope fill you with all joy and peace as you trust in Him.",reflection:"Joy and peace aren't circumstances - they're gifts from the God of hope. Trust Him today, even when things look uncertain. He is faithful."},
  {ref:"Psalm 27:1",text:"The Lord is my light and my salvation - whom shall I fear?",reflection:"When God is your light, no darkness can overwhelm you. When God is your salvation, no enemy can defeat you. Walk boldly today - you belong to the King."},
  {ref:"Micah 6:8",text:"Act justly, love mercy, and walk humbly with your God.",reflection:"Three simple instructions for today: be fair in your dealings, be kind in your interactions, and be humble in your walk with God. That's the Christian life in one verse."}
];
function getTodayVerse(){var dayOfYear=Math.floor((new Date()-new Date(new Date().getFullYear(),0,0))/(1000*60*60*24));return VERSES[dayOfYear%VERSES.length]}
const PASTOR_PHONE="0000000000";
var LOGO_SRC="data:image/png;base64,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";

// Supabase config
const SUPA_URL="https://hcjsltqdzihpgthnhlno.supabase.co";
const SUPA_KEY="sb_publishable_3cICyqcvxDKWQ0r7CHIJ3w_m87qH1pz";
var _supaHeaders={"apikey":SUPA_KEY,"Authorization":"Bearer "+SUPA_KEY,"Content-Type":"application/json","Prefer":"return=minimal"};

async function ld(k,f){
  try{
    var res=await fetch(SUPA_URL+"/rest/v1/app_data?key=eq."+encodeURIComponent(k)+"&select=value",{headers:{"apikey":SUPA_KEY,"Authorization":"Bearer "+SUPA_KEY}});
    if(!res.ok)throw new Error("fetch fail");
    var rows=await res.json();
    if(rows&&rows.length>0&&rows[0].value!==null)return rows[0].value;
    return f;
  }catch(e){
    // Fallback to window.storage if Supabase fails
    try{var r=await window.storage.get(k);return r?JSON.parse(r.value):f}catch(e2){return f}
  }
}

async function sv(k,d){
  try{
    // Upsert to Supabase
    var body=JSON.stringify({key:k,value:d});
    var res=await fetch(SUPA_URL+"/rest/v1/app_data",{
      method:"POST",
      headers:Object.assign({},_supaHeaders,{"Prefer":"resolution=merge-duplicates,return=minimal"}),
      body:body
    });
    if(!res.ok){var txt=await res.text();console.error("Supabase save error:",txt)}
  }catch(e){
    console.error("Supabase error, falling back:",e);
    // Fallback to window.storage
    try{await window.storage.set(k,JSON.stringify(d))}catch(e2){console.error(e2)}
  }
}

// Week date range helper - starts from the nearest past Monday
const _now=new Date();
const _day=_now.getDay();
const _diff=_now.getDate()-_day+(_day===0?-6:1);
const PLAN_START=new Date(_now.getFullYear(),_now.getMonth(),_diff);
function weekRange(wkNum){
  const s=new Date(PLAN_START);s.setDate(s.getDate()+(wkNum-1)*7);
  const e=new Date(s);e.setDate(e.getDate()+6);
  const fm=(d)=>d.toLocaleDateString("en-IN",{day:"numeric",month:"short"});
  return fm(s)+" - "+fm(e);
}
function weekLabel(wkNum){return "Week "+wkNum+" \u00b7 "+weekRange(wkNum)}
function monthName(moNum){const ms=new Date(PLAN_START);ms.setMonth(ms.getMonth()+(moNum-1));return"Month "+moNum+" \u00b7 "+ms.toLocaleDateString("en-IN",{month:"long",year:"numeric"})}

const Ic={
  check:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>,
  chev:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>,
  x:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  plus:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
  out:<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>,
};

function useWindowSize(){
  var s=useState({w:typeof window!=="undefined"?window.innerWidth:480,h:typeof window!=="undefined"?window.innerHeight:800});
  useEffect(function(){
    function handle(){s[1]({w:window.innerWidth,h:window.innerHeight})}
    window.addEventListener("resize",handle);
    return function(){window.removeEventListener("resize",handle)};
  },[]);
  return s[0];
}

var CSS_INJECTED=false;
function injectCSS(){
  if(CSS_INJECTED)return;
  CSS_INJECTED=true;
  var style=document.createElement("style");
  style.textContent=[
    "@keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}",
    "@keyframes slideIn{from{opacity:0;transform:translateX(-12px)}to{opacity:1;transform:translateX(0)}}",
    "@keyframes scaleIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}",
    "@keyframes popIn{0%{opacity:0;transform:scale(0.8)}60%{transform:scale(1.02)}100%{opacity:1;transform:scale(1)}}",
    ".kb-fade{animation:fadeIn 0.3s ease-out both}",
    ".kb-slide{animation:slideIn 0.3s ease-out both}",
    ".kb-scale{animation:scaleIn 0.25s ease-out both}",
    ".kb-pop{animation:popIn 0.35s ease-out both}",
    ".kb-card{transition:transform 0.15s ease,box-shadow 0.15s ease}",
    ".kb-card:hover{transform:translateY(-1px);box-shadow:0 4px 12px rgba(0,0,0,0.08)}",
    ".kb-card:active{transform:scale(0.98)}",
    ".kb-btn{transition:all 0.15s ease}",
    ".kb-btn:hover{filter:brightness(1.05);transform:translateY(-1px)}",
    ".kb-btn:active{transform:scale(0.97)}",
    ".kb-nav-item{transition:all 0.2s ease}",
    ".kb-nav-item:hover{background:rgba(37,99,235,0.06);border-radius:8px}",
    "*::-webkit-scrollbar{width:6px;height:6px}",
    "*::-webkit-scrollbar-track{background:transparent}",
    "*::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:3px}",
    "*::-webkit-scrollbar-thumb:hover{background:#94a3b8}",
    "@media(max-width:480px){.kb-desktop-only{display:none!important}}",
    "@media(min-width:769px){.kb-mobile-only{display:none!important}}",
  ].join("\n");
  document.head.appendChild(style);
}

var S={
  pg:{padding:"16px 20px"},ti:{fontSize:20,fontWeight:700,color:"#0f172a",margin:"0 0 14px",fontFamily:"'Playfair Display',serif"},
  sec:{fontSize:12,fontWeight:700,color:"#334155",margin:"18px 0 8px",textTransform:"uppercase",letterSpacing:0.5},
  cb:function(on,col){col=col||"#059669";return{width:20,height:20,borderRadius:5,border:"2px solid "+(on?col:"#cbd5e1"),background:on?col:"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}},
  pill:function(on,col){col=col||"#1e293b";return{padding:"5px 12px",borderRadius:20,border:"1px solid #e2e8f0",fontSize:11,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans',sans-serif",background:on?col:"#f8fafc",color:on?"#fff":"#64748b"}},
  prog:{height:5,background:"#e2e8f0",borderRadius:3,overflow:"hidden",marginBottom:4},
  pf:function(p,c){c=c||"#059669";return{height:"100%",background:c,borderRadius:3,width:p+"%",transition:"width 0.4s"}},
  cd:{background:"#fff",borderRadius:12,border:"1px solid #e2e8f0",padding:14,marginBottom:8},
  row:function(on,cl){return{display:"flex",alignItems:"flex-start",gap:10,padding:"10px 12px",borderRadius:10,border:"1px solid #e2e8f0",marginBottom:5,width:"100%",textAlign:"left",cursor:"pointer",fontFamily:"'DM Sans',sans-serif",background:on?"#f0fdf4":"#fff",borderLeft:cl?"4px solid "+cl:"1px solid #e2e8f0"}},
  inp:{flex:1,padding:"9px 14px",border:"1px solid #e2e8f0",borderRadius:10,fontSize:13,fontFamily:"'DM Sans',sans-serif",outline:"none",background:"#fff",boxSizing:"border-box"},
  abtn:{width:38,height:38,background:"#2563EB",color:"#fff",border:"none",borderRadius:10,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},
  rst:{background:"none",border:"1px solid #e2e8f0",color:"#94a3b8",fontSize:11,padding:"7px 14px",borderRadius:8,cursor:"pointer",fontFamily:"'DM Sans',sans-serif",marginTop:12},
  rm:{background:"none",border:"none",color:"#cbd5e1",cursor:"pointer",padding:3},
};

function App(){
  const [user,setUser]=useState(null);
  const [pg,setPg]=useState("home");
  const [d,setD]=useState({attendance:{},photoChecks:{},prayerLog:[],contentDone:{},tasks:[],notes:"",weekProgress:{},activities:[],users:[],bbbs:[],customWeeks:{},customTeams:null,teens:[],followups:[],pubWeeks:{},teamData:{},practice:{},messages:[],customPlan:null,chat:[],weeklyRhythm:null,savedSongs:[]});
  const [ok,setOk]=useState(false);
  const [wk,setWk]=useState(1);

  useEffect(()=>{(async()=>{
    const[a,p,pr,c,t,n,w,act,u,us,bb,cw,ct,tn,fu,pw,td,prc,msg,cp,ch,wr,ss]=await Promise.all([ld(SK.attendance,{}),ld(SK.photoChecks,{}),ld(SK.prayerLog,[]),ld(SK.contentDone,{}),ld(SK.tasks,[]),ld(SK.notes,""),ld(SK.weekProgress,{}),ld(SK.activities,[]),ld(SK.user,null),ld(SK.users,[]),ld(SK.bbbs,[]),ld(SK.customWeeks,{}),ld(SK.customTeams,null),ld(SK.teens,[]),ld(SK.followups,[]),ld(SK.pubWeeks,{}),ld(SK.teamData,{}),ld(SK.practice,{}),ld(SK.messages,[]),ld(SK.customPlan,null),ld(SK.chat,[]),ld(SK.weeklyRhythm,null),ld(SK.savedSongs,[])]);
    setD({attendance:a,photoChecks:p,prayerLog:pr,contentDone:c,tasks:t,notes:n,weekProgress:w,activities:act,users:us,bbbs:bb,customWeeks:cw,customTeams:ct,teens:tn,followups:fu,pubWeeks:pw,teamData:td,practice:prc,messages:msg,customPlan:cp,chat:ch,weeklyRhythm:wr,savedSongs:ss});
    // Only restore session if user has phone (new login format). Clear old sessions.
    if(u && u.phone) setUser(u); else sv(SK.user,null);
    setOk(true);
  })()},[]);

  const up=useCallback((k,v)=>{setD(prev=>{const next={...prev,[k]:v};sv(SK[k],v);return next})},[]);
  const login=(userObj)=>{setUser(userObj);sv(SK.user,userObj);setPg("home")};
  const logout=()=>{setUser(null);sv(SK.user,null);setPg("home")};
  const [lastReadChat,setLastReadChat]=useState(0);

  // Mark chat as read when user opens chat tab
  useEffect(function(){
    if(pg==="chat"&&d.chat&&d.chat.length>0){
      setLastReadChat(d.chat.length);
    }
  },[pg,d.chat]);
  const [dismissed,setDismissed]=useState([]);
  const [popupMsg,setPopupMsg]=useState(null);

  // Auto-show popup for unread messages (members only)
  useEffect(()=>{
    if(!user||user.role==="pastor"||!ok)return;
    const msgs=d.messages||[];
    const unread=msgs.filter(m=>!dismissed.includes(m.id));
    if(unread.length>0&&!popupMsg){
      // Small delay so the UI renders first
      const t=setTimeout(()=>setPopupMsg(unread[unread.length-1]),500);
      return()=>clearTimeout(t);
    }
  },[d.messages,user,dismissed,popupMsg,ok]);

  const dismissPopup=(msgId)=>{setDismissed(prev=>[...prev,msgId]);setPopupMsg(null)};
  const openPopup=(msg)=>setPopupMsg(msg);

  var sz=useWindowSize();
  var isDesk=sz.w>=768;

  useEffect(function(){injectCSS()},[]);

  if(!ok)return(<div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",background:"#0a0f1a"}}><div className="kb-pop" style={{fontSize:36,fontWeight:700,color:"#fff",fontFamily:"'Playfair Display',serif",letterSpacing:1}}>FGCLC</div><p className="kb-fade" style={{color:"#64748b",marginTop:8,fontFamily:"'DM Sans',sans-serif",fontSize:12}}>English Church</p></div>);
  if(!user)return <Login login={login} users={d.users||[]} up={up}/>;

  const ip=user.role==="pastor";
  const pPages={home:<PHome d={d} go={setPg} wk={wk} setWk={setWk} up={up}/>,teams:<Tms d={d} up={up} isPastor={true}/>,schedule:<Sched d={d} up={up} wk={wk} setWk={setWk}/>,photo:<Pho d={d} up={up}/>,content:<Cnt d={d} up={up}/>,prayer:<Pray d={d} up={up} wk={wk}/>,attend:<Att d={d} up={up} isPastor={true}/>,notes:<Nts d={d} up={up}/>,activities:<Acts d={d} up={up}/>,bbbs:<BBBS d={d} up={up} isPastor={true}/>,practice:<PracticePage d={d} up={up} isPastor={true}/>,messages:<MsgPage d={d} up={up}/>,chat:<ChatPage d={d} up={up} user={user}/>,music:<MusicPage d={d} up={up}/>};
  const mPages={home:<MHome d={d} go={setPg} wk={wk} user={user} onOpenMsg={openPopup}/>,myTasks:<MyTasks d={d} up={up} user={user}/>,prayer:<Pray d={d} up={up} wk={wk}/>,teams:<Tms d={d} up={up} isPastor={false}/>,photo:<Pho d={d} up={up}/>,content:<Cnt d={d} up={up}/>,bbbs:<BBBS d={d} up={up} isPastor={false} user={user}/>,practice:<PracticePage d={d} up={up} isPastor={false} user={user}/>,chat:<ChatPage d={d} up={up} user={user}/>,music:<MusicPage d={d} up={up}/>};
  const pages=ip?pPages:mPages;
  const pNav=[{id:"home",em:"\uD83C\uDFE0",l:"Home"},{id:"chat",em:"\uD83D\uDCAC",l:"Chat"},{id:"music",em:"\uD83C\uDFB5",l:"Music"},{id:"activities",em:"\uD83D\uDCCB",l:"Activities"},{id:"practice",em:"\uD83C\uDFAF",l:"Practice"},{id:"messages",em:"\uD83D\uDCE9",l:"Messages"},{id:"attend",em:"\uD83D\uDCDD",l:"Roll Call"},{id:"bbbs",em:"\uD83D\uDC6B",l:"Bro/Sis"},{id:"teams",em:"\uD83D\uDC65",l:"Teams"},{id:"notes",em:"\u270D\uFE0F",l:"Notes"}];
  const mNav=[{id:"home",em:"\uD83C\uDFE0",l:"Home"},{id:"chat",em:"\uD83D\uDCAC",l:"Chat"},{id:"music",em:"\uD83C\uDFB5",l:"Music"},{id:"myTasks",em:"\u2705",l:"Tasks"},{id:"practice",em:"\uD83C\uDFAF",l:"Practice"},{id:"bbbs",em:"\uD83D\uDC6B",l:"Bro/Sis"},{id:"prayer",em:"\uD83D\uDE4F",l:"Prayer"},{id:"teams",em:"\uD83D\uDC65",l:"Teams"}];
  const nav=ip?pNav:mNav;

  // DESKTOP LAYOUT
  if(isDesk){
    return(
      <div style={{display:"flex",minHeight:"100vh",background:"#f1f5f9",fontFamily:"'DM Sans',sans-serif"}}>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet"/>
        {/* SIDEBAR */}
        <div style={{width:220,background:"linear-gradient(180deg,#0a0f1a,#162033,#1a2744)",display:"flex",flexDirection:"column",position:"fixed",top:0,left:0,bottom:0,zIndex:50}}>
          <div style={{padding:"24px 20px 16px"}}>
            <h1 style={{margin:0,fontSize:22,fontWeight:700,color:"#fff",fontFamily:"'Playfair Display',serif",letterSpacing:1.5}}>FGCLC</h1>
            <p style={{margin:"2px 0 0",fontSize:11,color:"#94a3b8"}}>English Church</p>
          </div>
          <div style={{padding:"0 10px",flex:1,overflowY:"auto"}}>
            {nav.map(function(n,idx){var active=pg===n.id;var chatUnread=n.id==="chat"&&d.chat&&d.chat.length>lastReadChat&&pg!=="chat"?d.chat.length-lastReadChat:0;return(
              <button key={n.id} className="kb-nav-item" onClick={function(){setPg(n.id)}} style={{display:"flex",alignItems:"center",gap:12,width:"100%",padding:"10px 14px",marginBottom:2,background:active?"rgba(37,99,235,0.15)":"transparent",border:"none",borderRadius:10,cursor:"pointer",fontFamily:"'DM Sans',sans-serif",textAlign:"left",animationDelay:idx*40+"ms",position:"relative"}}>
                <span style={{fontSize:18,opacity:active?1:0.5,position:"relative"}}>{n.em}{chatUnread>0&&<span style={{position:"absolute",top:-4,right:-6,width:16,height:16,borderRadius:"50%",background:"#dc2626",color:"#fff",fontSize:9,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center"}}>{chatUnread>9?"9+":chatUnread}</span>}</span>
                <span style={{fontSize:13,fontWeight:active?700:500,color:active?"#93c5fd":"#94a3b8"}}>{n.l}</span>
              </button>
            )})}
          </div>
          <div style={{padding:"12px 14px",borderTop:"1px solid rgba(255,255,255,0.08)",display:"flex",alignItems:"center",gap:10}}>
            <div style={{width:32,height:32,borderRadius:"50%",background:ip?"#2563EB":"#059669",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:13,fontWeight:700}}>{user.name[0]}</div>
            <div style={{flex:1}}><div style={{fontSize:12,color:"#e2e8f0",fontWeight:600}}>{user.name}</div><div style={{fontSize:10,color:ip?"#93c5fd":"#a7f3d0"}}>{ip?"Pastor":"Member"}</div></div>
            <button onClick={logout} style={{background:"rgba(255,255,255,0.08)",border:"none",borderRadius:8,padding:6,cursor:"pointer",color:"#94a3b8",display:"flex"}}>{Ic.out}</button>
          </div>
        </div>
        {/* MAIN CONTENT */}
        <div style={{marginLeft:220,flex:1,minHeight:"100vh"}}>
          <div style={{maxWidth:680,margin:"0 auto",padding:"20px 24px 40px"}}>
            <div key={pg} className="kb-fade">{pages[pg]||pages.home}</div>
          </div>
        </div>
        {/* POPUP */}
        {popupMsg&&(
          <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.6)",zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",padding:20}} onClick={function(){dismissPopup(popupMsg.id)}}>
            <div className="kb-pop" onClick={function(e){e.stopPropagation()}} style={{background:"#fff",borderRadius:20,maxWidth:440,width:"100%",overflow:"hidden",boxShadow:"0 20px 60px rgba(0,0,0,0.3)"}}>
              <div style={{background:"linear-gradient(135deg,#059669,#065f46)",padding:"24px 24px 20px",textAlign:"center"}}>
                <span style={{fontSize:44,display:"block",marginBottom:10}}>{"\uD83D\uDCE9"}</span>
                <div style={{fontSize:18,fontWeight:700,color:"#fff",fontFamily:"'Playfair Display',serif"}}>{popupMsg.subject||"Message from Pastor"}</div>
                <div style={{fontSize:12,color:"#a7f3d0",marginTop:4}}>{popupMsg.date}</div>
              </div>
              <div style={{padding:"24px",maxHeight:300,overflowY:"auto"}}>
                <p style={{fontSize:14,color:"#334155",lineHeight:1.7,margin:0,whiteSpace:"pre-wrap"}}>{popupMsg.text}</p>
              </div>
              <div style={{padding:"16px 24px 24px",display:"flex",gap:8}}>
                <button className="kb-btn" onClick={function(){dismissPopup(popupMsg.id)}} style={{flex:1,padding:"14px",background:"#059669",color:"#fff",border:"none",borderRadius:12,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Got it!</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // MOBILE LAYOUT
  return(
    <div style={{maxWidth:480,margin:"0 auto",minHeight:"100vh",background:"#f8fafc",fontFamily:"'DM Sans',sans-serif"}}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet"/>
      <div style={{background:"linear-gradient(135deg,#0a0f1a,#162033,#1a2744)",padding:"14px 20px 12px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div><h1 style={{margin:0,fontSize:18,fontWeight:700,color:"#fff",fontFamily:"'Playfair Display',serif",letterSpacing:1}}>FGCLC</h1><p style={{margin:"1px 0 0",fontSize:10,color:"#94a3b8"}}>English Church</p></div>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{textAlign:"right"}}><div style={{fontSize:11,color:"#e2e8f0",fontWeight:600}}>{user.name}</div><div style={{fontSize:9,color:ip?"#93c5fd":"#a7f3d0"}}>{ip?"Pastor":"Member"}</div></div>
          <button onClick={logout} style={{background:"rgba(255,255,255,0.08)",border:"none",borderRadius:8,padding:6,cursor:"pointer",color:"#94a3b8",display:"flex"}}>{Ic.out}</button>
        </div>
      </div>
      <div style={{flex:1,paddingBottom:76,overflowY:"auto"}}><div key={pg} className="kb-fade">{pages[pg]||pages.home}</div></div>
      <nav style={{position:"fixed",bottom:0,left:"50%",transform:"translateX(-50%)",width:"100%",maxWidth:480,display:"flex",justifyContent:"space-around",background:"#fff",borderTop:"1px solid #e2e8f0",padding:"5px 0",paddingBottom:"max(10px, env(safe-area-inset-bottom))",zIndex:100}}>
        {nav.map(function(n){var chatUnread=n.id==="chat"&&d.chat&&d.chat.length>lastReadChat&&pg!=="chat"?d.chat.length-lastReadChat:0;return(
          <button key={n.id} className="kb-nav-item" onClick={function(){setPg(n.id)}} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:1,background:"none",border:"none",padding:"3px 4px",cursor:"pointer",fontFamily:"'DM Sans',sans-serif",color:pg===n.id?"#2563EB":"#94a3b8",position:"relative"}}>
            <span style={{fontSize:16,opacity:pg===n.id?1:0.5,position:"relative"}}>{n.em}{chatUnread>0&&<span style={{position:"absolute",top:-4,right:-8,width:14,height:14,borderRadius:"50%",background:"#dc2626",color:"#fff",fontSize:8,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center"}}>{chatUnread>9?"9+":chatUnread}</span>}</span>
            <span style={{fontSize:8,fontWeight:pg===n.id?700:500}}>{n.l}</span>
          </button>
        )})}
      </nav>
      {/* POPUP */}
      {popupMsg&&(
        <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.6)",zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",padding:20}} onClick={function(){dismissPopup(popupMsg.id)}}>
          <div className="kb-pop" onClick={function(e){e.stopPropagation()}} style={{background:"#fff",borderRadius:20,maxWidth:380,width:"100%",overflow:"hidden",boxShadow:"0 20px 60px rgba(0,0,0,0.3)"}}>
            <div style={{background:"linear-gradient(135deg,#059669,#065f46)",padding:"20px 20px 16px",textAlign:"center"}}>
              <span style={{fontSize:40,display:"block",marginBottom:8}}>{"\uD83D\uDCE9"}</span>
              <div style={{fontSize:16,fontWeight:700,color:"#fff",fontFamily:"'Playfair Display',serif"}}>{popupMsg.subject||"Message from Pastor"}</div>
              <div style={{fontSize:11,color:"#a7f3d0",marginTop:4}}>{popupMsg.date}</div>
            </div>
            <div style={{padding:"20px",maxHeight:250,overflowY:"auto"}}>
              <p style={{fontSize:13,color:"#334155",lineHeight:1.7,margin:0,whiteSpace:"pre-wrap"}}>{popupMsg.text}</p>
            </div>
            <div style={{padding:"12px 20px 20px",display:"flex",gap:8}}>
              <button className="kb-btn" onClick={function(){dismissPopup(popupMsg.id)}} style={{flex:1,padding:"12px",background:"#059669",color:"#fff",border:"none",borderRadius:12,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Got it!</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// === LOGIN ===
function Login({login,users,up}){
  const [step,setStep]=useState("phone"); // phone, otp, register
  const [phone,setPhone]=useState("");
  const [otp,setOtp]=useState("");
  const [name,setName]=useState("");
  const [sentOtp,setSentOtp]=useState("");
  const [err,setErr]=useState("");
  const [countdown,setCountdown]=useState(0);

  useEffect(()=>{if(countdown>0){const t=setTimeout(()=>setCountdown(countdown-1),1000);return()=>clearTimeout(t)}},[countdown]);

  const formatPhone=(v)=>{return v.replace(/[^0-9]/g,"").slice(0,10)};

  const sendOtp=()=>{
    if(phone.length<10){setErr("Enter a valid 10-digit phone number");return}
    setErr("");
    // Simulated OTP - always 1234
    const code="1234";
    setSentOtp(code);
    setStep("otp");
    setCountdown(30);
    // In production, this would call an SMS API
  };

  const verifyOtp=()=>{
    if(otp!==sentOtp){setErr("Invalid OTP. Try 1234");return}
    setErr("");
    // Check if phone is pastor
    if(phone===PASTOR_PHONE){
      login({name:"Pastor",role:"pastor",phone});
      return;
    }
    // Check if user exists
    const existing=users.find(u=>u.phone===phone);
    if(existing){
      login({name:existing.name,role:existing.role||"member",phone:existing.phone});
    } else {
      setStep("register");
    }
  };

  const register=()=>{
    if(!name.trim()){setErr("Please enter your name");return}
    setErr("");
    const newUser={name:name.trim(),phone,role:"member",joined:new Date().toLocaleDateString()};
    const updated=[...users,newUser];
    up("users",updated);
    login({name:newUser.name,role:"member",phone});
  };

  const inputStyle={width:"100%",maxWidth:300,padding:"14px 16px",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:12,color:"#fff",fontSize:18,fontWeight:600,fontFamily:"'DM Sans',sans-serif",outline:"none",textAlign:"center",letterSpacing:phone.length>0?2:0,boxSizing:"border-box"};
  const btnStyle=(active)=>({width:"100%",maxWidth:300,padding:"14px 20px",background:active?"linear-gradient(135deg,#1e3a5f,#2563EB)":"rgba(255,255,255,0.05)",border:"none",borderRadius:12,color:active?"#fff":"#475569",fontSize:15,fontWeight:700,cursor:active?"pointer":"default",fontFamily:"'DM Sans',sans-serif",marginTop:12});
  const backBtn=<button onClick={()=>{setStep("phone");setOtp("");setErr("");setName("")}} style={{background:"none",border:"none",color:"#64748b",fontSize:12,marginTop:16,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Back</button>;

  return(
    <div style={{maxWidth:480,margin:"0 auto",minHeight:"100vh",background:"#0a0f1a",fontFamily:"'DM Sans',sans-serif",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:24}}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet"/>
      <img src={LOGO_SRC} alt="FGCLC" className="kb-pop" style={{width:120,height:120,marginBottom:4,objectFit:"contain"}}/>
      <p style={{color:"#64748b",fontSize:13,marginTop:2,marginBottom:32}}>English Church</p>

      {step==="phone"&&<>
        <p style={{color:"#e2e8f0",fontSize:16,fontWeight:600,marginBottom:4}}>Enter your phone number</p>
        <p style={{color:"#64748b",fontSize:12,marginBottom:20}}>We'll send you a verification code</p>
        <div style={{position:"relative",width:"100%",maxWidth:300}}>
          <span style={{position:"absolute",left:16,top:"50%",transform:"translateY(-50%)",color:"#64748b",fontSize:16,fontWeight:600}}>+91</span>
          <input value={phone} onChange={e=>setPhone(formatPhone(e.target.value))} placeholder="9876543210" maxLength={10}
            style={{...inputStyle,paddingLeft:52,textAlign:"left"}} onKeyDown={e=>e.key==="Enter"&&sendOtp()}/>
        </div>
        {err&&<p style={{color:"#f87171",fontSize:12,marginTop:8}}>{err}</p>}
        <button onClick={sendOtp} style={btnStyle(phone.length===10)}>Send OTP</button>
        <div style={{width:"100%",maxWidth:300,marginTop:28,borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:16,display:"flex",flexDirection:"column",alignItems:"center",gap:8}}>
          <p style={{color:"#475569",fontSize:10,margin:0}}>Quick access for testing</p>
          <button onClick={()=>login({name:"Pastor",role:"pastor",phone:"0000000000"})} style={{width:"100%",padding:"10px 16px",background:"rgba(37,99,235,0.12)",border:"1px solid rgba(37,99,235,0.25)",borderRadius:10,color:"#93c5fd",fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Enter as Admin / Pastor</button>
          <button onClick={()=>login({name:"TestMember",role:"member",phone:"1111111111"})} style={{width:"100%",padding:"10px 16px",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:10,color:"#94a3b8",fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Enter as Test Member</button>
        </div>
      </>}

      {step==="otp"&&<>
        <div style={{width:48,height:48,borderRadius:14,background:"rgba(5,150,105,0.15)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a7f3d0" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        </div>
        <p style={{color:"#e2e8f0",fontSize:16,fontWeight:600,marginBottom:4}}>Verify OTP</p>
        <p style={{color:"#64748b",fontSize:12,marginBottom:4}}>Code sent to +91 {phone}</p>
        <p style={{color:"#059669",fontSize:11,marginBottom:16,background:"rgba(5,150,105,0.1)",padding:"4px 12px",borderRadius:8}}>Demo: Use code 1234</p>
        <input value={otp} onChange={e=>setOtp(e.target.value.replace(/[^0-9]/g,"").slice(0,4))} placeholder="Enter 4-digit OTP" maxLength={4}
          style={{...inputStyle,letterSpacing:12,fontSize:28}} onKeyDown={e=>e.key==="Enter"&&verifyOtp()}/>
        {err&&<p style={{color:"#f87171",fontSize:12,marginTop:8}}>{err}</p>}
        <button onClick={verifyOtp} style={btnStyle(otp.length===4)}>Verify</button>
        <div style={{marginTop:16,display:"flex",alignItems:"center",gap:8}}>
          {countdown>0?<p style={{color:"#64748b",fontSize:12}}>Resend in {countdown}s</p>
            :<button onClick={()=>{setSentOtp("1234");setCountdown(30);setOtp("")}} style={{background:"none",border:"none",color:"#93c5fd",fontSize:12,cursor:"pointer",fontFamily:"'DM Sans',sans-serif",fontWeight:600}}>Resend OTP</button>}
        </div>
        {backBtn}
      </>}

      {step==="register"&&<>
        <div style={{width:48,height:48,borderRadius:14,background:"rgba(124,58,237,0.15)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16}}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c4b5fd" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>
        </div>
        <p style={{color:"#e2e8f0",fontSize:16,fontWeight:600,marginBottom:4}}>Welcome! You're new here</p>
        <p style={{color:"#64748b",fontSize:12,marginBottom:20}}>Enter your name to join FGCLC</p>
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your full name"
          style={{...inputStyle,fontSize:16,letterSpacing:0,textAlign:"left",paddingLeft:16}} onKeyDown={e=>e.key==="Enter"&&register()}/>
        {err&&<p style={{color:"#f87171",fontSize:12,marginTop:8}}>{err}</p>}
        <button onClick={register} style={btnStyle(name.trim().length>0)}>Join FGCLC</button>
        <p style={{color:"#475569",fontSize:10,marginTop:16}}>Phone: +91 {phone}</p>
        {backBtn}
      </>}
    </div>
  );
}

// === PASTOR HOME ===
// Events are now objects: {text, date, time} - old strings are auto-normalized
function norm(ev){return typeof ev==="string"?{text:ev,date:"",time:""}:ev}

function PHome({d,go,wk,setWk,up}){
  var plan=d.customPlan||WEEKLY_SCHEDULE;
  var allWeeks=[];
  for(var mi=0;mi<plan.length;mi++){for(var wi=0;wi<plan[mi].weeks.length;wi++){allWeeks.push(plan[mi].weeks[wi])}}
  var wd=null;
  for(var fi=0;fi<allWeeks.length;fi++){if(allWeeks[fi].wk===wk){wd=allWeeks[fi];break}}
  var sk="sun-"+wk;
  var attObj=d.attendance[sk]||{};
  var pr=Object.values(attObj).filter(Boolean).length;
  var rawEvts=wd?wd.events:[];
  var planEvents=rawEvts.map(norm);

  var wkStart=new Date(PLAN_START);
  wkStart.setDate(wkStart.getDate()+(wk-1)*7);
  var wkEnd=new Date(wkStart);
  wkEnd.setDate(wkEnd.getDate()+6);
  wkEnd.setHours(23,59,59);
  var prac=d.practice||{};
  var allSess=prac.sessions||[];
  var pracSess=allSess.filter(function(s){
    if(!s.date)return false;
    var sd=new Date(s.date+"T00:00:00");
    return sd>=wkStart&&sd<=wkEnd;
  });
  var pracEvents=pracSess.map(function(s){
    var lbl="\uD83C\uDFAF PRACTICE: "+s.name;
    if(s.linkedEvent)lbl+=" (for "+s.linkedEvent+")";
    return{text:lbl,date:s.date,time:s.time||"",isPractice:true};
  });
  var weekEvents=planEvents.concat(pracEvents);
  var te=weekEvents.length;
  var wp=d.weekProgress[wk]||{};
  var ce=Object.values(wp).filter(Boolean).length;
  var aa=d.activities.filter(function(a){return!a.done}).length;
  var dayIdx=(new Date().getDay()||7)-1;
  var pf=PRAYER_FOCUS[dayIdx]||PRAYER_FOCUS[0];
  var pubWeeks=d.pubWeeks||{};
  var isPublished=!!pubWeeks[wk];
  var wdTheme=wd?wd.theme:"Plan";

  function doPublish(){
    var pw=Object.assign({},pubWeeks);
    pw[wk]={events:weekEvents,progress:wp,theme:wdTheme,weekLabel:weekLabel(wk),publishedAt:new Date().toLocaleString()};
    up("pubWeeks",pw);
  }
  function doUnpublish(){
    var pw=Object.assign({},pubWeeks);
    delete pw[wk];
    up("pubWeeks",pw);
  }
  function togTask(i){
    var newWp=Object.assign({},wp);
    newWp[i]=!newWp[i];
    var newWps=Object.assign({},d.weekProgress);
    newWps[wk]=newWp;
    up("weekProgress",newWps);
    if(pubWeeks[wk]){
      var pw=Object.assign({},pubWeeks);
      pw[wk]=Object.assign({},pubWeeks[wk],{progress:newWp,publishedAt:new Date().toLocaleString()});
      up("pubWeeks",pw);
    }
  }
  function fmtDate(ds){
    if(!ds)return"";
    try{var d2=new Date(ds+"T00:00:00");return d2.toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short"})}
    catch(e){return ds}
  }
  function fmtTime(ts){
    if(!ts)return"";
    try{var p=ts.split(":");var hr=parseInt(p[0]);return(hr>12?hr-12:hr||12)+":"+p[1]+(hr>=12?" PM":" AM")}
    catch(e){return ts}
  }

  var stats=[
    {l:"Attendance",v:pr+"/"+ALL_MEMBERS.length,em:"\uD83D\uDC65",c:"#2563EB",p:"attend"},
    {l:"Activities",v:aa+" active",em:"\uD83D\uDCCB",c:"#7C3AED",p:"activities"},
    {l:"Tasks Done",v:ce+"/"+te,em:"\u2705",c:"#059669",p:"schedule"},
    {l:"Prayer",v:d.prayerLog.filter(function(p){return p.week===wk}).length,em:"\uD83D\uDE4F",c:"#EA580C",p:"prayer"}
  ];

  var quickActs=[
    {l:"Activities",em:"\uD83D\uDCCB",p:"activities"},{l:"Roll Call",em:"\uD83D\uDCDD",p:"attend"},
    {l:"Prayer",em:"\uD83D\uDE4F",p:"prayer"},{l:"Content",em:"\uD83D\uDCF1",p:"content"},
    {l:"Teams",em:"\uD83D\uDC65",p:"teams"},{l:"Notes",em:"\u270D\uFE0F",p:"notes"}
  ];

  return(
    <div style={S.pg}>
      <div style={{background:"linear-gradient(135deg,#0a0f1a,#1a2744)",borderRadius:16,padding:20,marginBottom:14}}>
        <h2 style={{margin:0,color:"#fff",fontSize:18,fontFamily:"'Playfair Display',serif"}}>Welcome, Pastor</h2>
        <p style={{color:"#93c5fd",fontSize:13,margin:"4px 0 0"}}>{weekLabel(wk)}</p>
        <p style={{color:"#e2e8f0",fontSize:12,margin:"2px 0 0"}}><strong>{wdTheme}</strong></p>
        <div style={{display:"flex",gap:6,marginTop:10}}>
          <button onClick={function(){setWk(Math.max(1,wk-1))}} style={{background:"rgba(255,255,255,0.1)",border:"none",color:"#93c5fd",fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:6,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Prev</button>
          <button onClick={function(){setWk(Math.min(12,wk+1))}} style={{background:"rgba(255,255,255,0.1)",border:"none",color:"#93c5fd",fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:6,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Next</button>
        </div>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:14}}>
        {stats.map(function(s){return(
          <button key={s.l} onClick={function(){go(s.p)}} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:3,padding:"12px 8px",background:"#fff",borderRadius:12,border:"none",cursor:"pointer",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",borderTop:"3px solid "+s.c,fontFamily:"'DM Sans',sans-serif"}}>
            <span style={{fontSize:18}}>{s.em}</span>
            <span style={{fontSize:18,fontWeight:700,color:"#0f172a"}}>{s.v}</span>
            <span style={{fontSize:10,color:"#64748b"}}>{s.l}</span>
          </button>
        )})}
      </div>

      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <h3 style={{fontSize:12,fontWeight:700,color:"#334155",margin:"0 0 4px",textTransform:"uppercase",letterSpacing:0.5}}>
          {"This Week "}
          {isPublished && <span style={{fontSize:9,color:"#059669",background:"#f0fdf4",padding:"1px 6px",borderRadius:6,marginLeft:4,fontWeight:600,textTransform:"none"}}>Live</span>}
          {!isPublished && weekEvents.length>0 && <span style={{fontSize:9,color:"#d97706",background:"#fffbeb",padding:"1px 6px",borderRadius:6,marginLeft:4,fontWeight:600,textTransform:"none"}}>Draft</span>}
        </h3>
        <button onClick={function(){go("schedule")}} style={{fontSize:10,color:"#2563EB",background:"#eff6ff",border:"none",borderRadius:6,padding:"4px 10px",cursor:"pointer",fontFamily:"'DM Sans',sans-serif",fontWeight:600}}>Edit in Plan</button>
      </div>

      {weekEvents.length>0 && <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:10,flexWrap:"wrap"}}>
        {!isPublished && <button onClick={doPublish} style={{padding:"6px 14px",background:"#059669",color:"#fff",border:"none",borderRadius:8,fontSize:11,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Publish to Team</button>}
        {isPublished && <button onClick={doUnpublish} style={{padding:"6px 12px",background:"#fef2f2",color:"#dc2626",border:"1px solid #fecaca",borderRadius:8,fontSize:10,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Unpublish</button>}
        {isPublished && <button onClick={doPublish} style={{padding:"6px 12px",background:"#eff6ff",color:"#2563EB",border:"1px solid #bfdbfe",borderRadius:8,fontSize:10,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Republish</button>}
        {isPublished && pubWeeks[wk] && <span style={{fontSize:9,color:"#64748b"}}>{pubWeeks[wk].publishedAt}</span>}
      </div>}

      {weekEvents.map(function(ev,i){
        var done=wp[i];
        var isHL=ev.text.toUpperCase().indexOf("WORSHIP")>=0||ev.text.toUpperCase().indexOf("CELEBRATION")>=0;
        var isPrac=ev.isPractice;
        var bCol=isPrac?"#d97706":isHL?"#DC2626":"#e2e8f0";
        return(
          <button key={i} onClick={function(){togTask(i)}} style={{display:"flex",alignItems:"flex-start",gap:10,padding:"10px 12px",background:done?"#f0fdf4":isPrac?"#fffbeb":"#fff",borderRadius:10,marginBottom:5,width:"100%",border:"1px solid "+(done?"#bbf7d0":"#e2e8f0"),borderLeftWidth:3,borderLeftStyle:"solid",borderLeftColor:bCol,cursor:"pointer",fontFamily:"'DM Sans',sans-serif",textAlign:"left",opacity:done?0.6:1}}>
            <div style={S.cb(done,isPrac?"#d97706":"#059669")}>{done && <span style={{color:"#fff"}}>{Ic.check}</span>}</div>
            <div style={{flex:1}}>
              <div style={{fontSize:12,color:isPrac?"#92400e":"#0f172a",fontWeight:600,textDecoration:done?"line-through":"none"}}>{ev.text}</div>
              {(ev.date||ev.time) && <div style={{display:"flex",gap:6,marginTop:3}}>
                {ev.date && <span style={{fontSize:10,color:"#2563EB",background:"#eff6ff",padding:"1px 8px",borderRadius:6}}>{fmtDate(ev.date)}</span>}
                {ev.time && <span style={{fontSize:10,color:"#7C3AED",background:"#f4ecf7",padding:"1px 8px",borderRadius:6}}>{fmtTime(ev.time)}</span>}
              </div>}
              {isPrac && <span style={{fontSize:9,color:"#d97706",fontWeight:600,marginTop:2,display:"block"}}>Mandatory attendance</span>}
            </div>
            {done && <span style={{fontSize:10,color:"#059669",fontWeight:700,flexShrink:0}}>Done</span>}
          </button>
        );
      })}

      {weekEvents.length===0 && <div style={{background:"#fff",borderRadius:12,border:"1px solid #e2e8f0",padding:16,textAlign:"center"}}>
        <p style={{fontSize:12,color:"#94a3b8",margin:0}}>No tasks for this week. <button onClick={function(){go("schedule")}} style={{color:"#2563EB",background:"none",border:"none",cursor:"pointer",fontFamily:"'DM Sans',sans-serif",fontWeight:600,fontSize:12}}>Go to Plan</button></p>
      </div>}

      <h3 style={S.sec}>Quick Actions</h3>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}>
        {quickActs.map(function(q){return(
          <button key={q.p} onClick={function(){go(q.p)}} style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:5,padding:14,background:"#fff",border:"1px solid #e2e8f0",borderRadius:12,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>
            <span style={{fontSize:20}}>{q.em}</span>
            <span style={{fontSize:10,fontWeight:600,color:"#334155"}}>{q.l}</span>
          </button>
        )})}
      </div>

      <h3 style={S.sec}>{"Today's Prayer"}</h3>
      <div style={{display:"flex",alignItems:"center",gap:12,padding:14,background:"#f0fdf4",borderRadius:12,border:"1px solid #bbf7d0"}}>
        <span style={{fontSize:24}}>{pf.icon}</span>
        <div>
          <strong style={{color:"#065f46",fontSize:11}}>{pf.day}</strong>
          <p style={{margin:"2px 0 0",fontSize:12,color:"#334155"}}>{pf.focus}</p>
        </div>
      </div>
    </div>
  );
}

// === MEMBER HOME ===
function MHome({d,go,wk,user,onOpenMsg}){
  const me=ALL_MEMBERS.find(m=>m.name===user.name);
  const myTeams=TEAMS.filter(t=>me?.teams.includes(t.id));
  const myActs=d.activities.filter(a=>a.assigned.includes(user.name)&&!a.done);
  const wd=WEEKLY_SCHEDULE.flatMap(m=>m.weeks).find(w=>w.wk===wk);
  const pf=PRAYER_FOCUS[(new Date().getDay()||7)-1]||PRAYER_FOCUS[0];
  const pubWeeks=d.pubWeeks||{};
  const published=pubWeeks[wk];
  const weekEvents=published?published.events.map(norm):[];
  const fmtDate=ds=>{if(!ds)return"";try{const d2=new Date(ds+"T00:00:00");return d2.toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short"})}catch(e){return ds}};
  const fmtTime=ts=>{if(!ts)return"";try{const[h,m]=ts.split(":");const hr=parseInt(h);return(hr>12?hr-12:hr||12)+":"+m+(hr>=12?" PM":" AM")}catch(e){return ts}};

  // Practice eligibility check
  const prac=d.practice||{};
  const sessions=prac.sessions||[];
  const myRequired=sessions.filter(s=>s.required.includes(user.name)&&!s.eventDone);
  const myMissed=myRequired.filter(s=>{const att=s.attendance||{};return !att[user.name]&&new Date(s.date+"T23:59:59")<new Date()});
  const blocked=myMissed.length>0;

  // Messages/notifications
  const msgs=d.messages||[];
  const myMsgs=msgs.slice().reverse();

  return(<div style={S.pg}>
    {/* BLOCKED WARNING */}
    {blocked&&<div style={{background:"#fef2f2",border:"2px solid #dc2626",borderRadius:14,padding:14,marginBottom:12,display:"flex",alignItems:"flex-start",gap:10}}>
      <span style={{fontSize:22}}>{"🚫"}</span>
      <div><div style={{fontSize:13,fontWeight:700,color:"#dc2626"}}>Practice Attendance Required</div>
        <p style={{fontSize:11,color:"#7f1d1d",margin:"4px 0 0"}}>You missed {myMissed.length} required practice session{myMissed.length>1?"s":""}. You are not eligible to perform until you attend. Please speak to your team lead or Pastor.</p>
        {myMissed.map(s=>(<div key={s.id} style={{fontSize:10,color:"#991b1b",marginTop:3}}>{"• "}{s.name} ({s.date})</div>))}
      </div>
    </div>}

    {/* NOTIFICATION BANNER - tap to open */}
    {myMsgs.length>0&&<div style={{marginBottom:12}}>
      {myMsgs.map(m=>(<button key={m.id} onClick={()=>onOpenMsg&&onOpenMsg(m)} style={{width:"100%",background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:10,padding:"10px 12px",marginBottom:4,display:"flex",alignItems:"flex-start",gap:8,cursor:"pointer",fontFamily:"'DM Sans',sans-serif",textAlign:"left"}}>
        <span style={{fontSize:16}}>{"📩"}</span>
        <div style={{flex:1}}><div style={{fontSize:11,fontWeight:700,color:"#1e40af"}}>{m.subject||"Message from Pastor"}</div><p style={{fontSize:11,color:"#334155",margin:"2px 0 0"}}>{m.text.slice(0,80)}{m.text.length>80?"... tap to read":""}</p><div style={{fontSize:9,color:"#94a3b8",marginTop:2}}>{m.date} {"• tap to open"}</div></div>
      </button>))}
    </div>}

    {/* UPCOMING PRACTICE */}
    {myRequired.filter(s=>new Date(s.date+"T23:59:59")>=new Date()).length>0&&<div style={{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:12,padding:12,marginBottom:12}}>
      <div style={{fontSize:12,fontWeight:700,color:"#92400e",marginBottom:4}}>{"🎯"} Upcoming Practice (Mandatory)</div>
      {myRequired.filter(s=>new Date(s.date+"T23:59:59")>=new Date()).map(s=>(<div key={s.id} style={{fontSize:11,color:"#78350f",marginTop:2}}>{"• "}{s.name} - {s.date}{s.time?" at "+s.time:""}</div>))}
    </div>}

    <div style={{background:"linear-gradient(135deg,#065f46,#059669)",borderRadius:16,padding:20,marginBottom:14}}>
      <h2 style={{margin:0,color:"#fff",fontSize:18,fontFamily:"'Playfair Display',serif"}}>Hey, {user.name}!</h2>
      <p style={{color:"#a7f3d0",fontSize:11,margin:"3px 0 0"}}>{me?.role}</p>
      <p style={{color:"#d1fae5",fontSize:12,margin:"6px 0 0"}}>{weekLabel(wk)}</p>
      <p style={{color:"#e2e8f0",fontSize:11,margin:"2px 0 0"}}><strong>{wd?.theme}</strong></p>
    </div>

    <VerseOfDay />
    {myTeams.length>0&&<><h3 style={S.sec}>My Teams</h3><div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:10}}>{myTeams.map(t=>(<span key={t.id} style={{padding:"4px 11px",borderRadius:14,fontSize:10,fontWeight:600,color:"#fff",background:t.color}}>{t.icon} {t.name}</span>))}</div></>}

    {/* THIS WEEK - from published plan with live completion status */}
    {weekEvents.length>0&&<>
      <h3 style={S.sec}>{published?.weekLabel||weekLabel(wk)} <span style={{fontSize:9,color:"#059669",background:"#f0fdf4",padding:"1px 6px",borderRadius:6,marginLeft:4,fontWeight:600,textTransform:"none"}}>Live</span></h3>
      <div style={{...S.prog,marginBottom:2}}><div style={S.pf((Object.values(published?.progress||{}).filter(Boolean).length/Math.max(weekEvents.length,1))*100,"#059669")}/></div>
      <p style={{fontSize:10,color:"#64748b",marginBottom:8}}>{Object.values(published?.progress||{}).filter(Boolean).length}/{weekEvents.length} tasks completed by Pastor</p>
      {weekEvents.map((ev,i)=>{
        const prog=published?.progress||{};
        const done=prog[i];
        const hl=ev.text.toUpperCase().includes("WORSHIP")||ev.text.toUpperCase().includes("CELEBRATION");
        const isPrac=ev.isPractice||ev.text.includes("PRACTICE:");
        const borderCol=isPrac?"#d97706":hl?"#DC2626":done?"#059669":"#e2e8f0";
        return(
        <div key={i} style={{display:"flex",alignItems:"flex-start",gap:10,padding:"10px 12px",background:done?"#f0fdf4":isPrac?"#fffbeb":"#fff",borderRadius:10,marginBottom:5,borderLeft:"3px solid "+borderCol,opacity:done?0.7:1}}>
          <div style={{...S.cb(done,isPrac?"#d97706":"#059669"),marginTop:2,cursor:"default"}}>{done&&<span style={{color:"#fff"}}>{Ic.check}</span>}</div>
          <div style={{flex:1}}>
            <div style={{fontSize:12,color:done?"#065f46":isPrac?"#92400e":"#0f172a",fontWeight:600,textDecoration:done?"line-through":"none"}}>{ev.text}</div>
            {(ev.date||ev.time)&&<div style={{display:"flex",gap:6,marginTop:3}}>
              {ev.date&&<span style={{fontSize:10,color:"#2563EB",background:"#eff6ff",padding:"1px 8px",borderRadius:6}}>{fmtDate(ev.date)}</span>}
              {ev.time&&<span style={{fontSize:10,color:"#7C3AED",background:"#f4ecf7",padding:"1px 8px",borderRadius:6}}>{fmtTime(ev.time)}</span>}
            </div>}
            {isPrac&&<span style={{fontSize:9,color:"#d97706",fontWeight:600,marginTop:2,display:"block"}}>Mandatory attendance</span>}
          </div>
          {done&&<span style={{fontSize:9,color:"#059669",fontWeight:700,flexShrink:0}}>Done</span>}
          {!done&&<span style={{fontSize:9,color:"#d97706",fontWeight:600,flexShrink:0}}>Pending</span>}
        </div>
      );})}
      {published?.publishedAt&&<p style={{fontSize:9,color:"#94a3b8",marginTop:2}}>Last updated: {published.publishedAt}</p>}
    </>}
    {!published&&<div style={{...S.cd,textAlign:"center",padding:16,marginBottom:8}}><span style={{fontSize:20}}>{"📅"}</span><p style={{fontSize:12,color:"#94a3b8",margin:"6px 0 0"}}>This week's schedule hasn't been published yet. Check back soon!</p></div>}
    <h3 style={S.sec}>My Activities ({myActs.length})</h3>
    {myActs.length===0&&<div style={{...S.cd,textAlign:"center",padding:20}}><span style={{fontSize:24}}>{"\u2705"}</span><p style={{fontSize:12,color:"#64748b",margin:"6px 0 0"}}>No pending tasks!</p></div>}
    {myActs.map(a=>(<div key={a.id} style={{...S.cd,borderLeft:"4px solid #2563EB"}}><div style={{fontWeight:700,fontSize:13,color:"#0f172a"}}>{a.title}</div>{a.description&&<p style={{fontSize:11,color:"#64748b",margin:"3px 0 0"}}>{a.description}</p>}<div style={{display:"flex",gap:6,marginTop:5,flexWrap:"wrap"}}>{a.date&&<span style={{fontSize:10,color:"#2563EB",background:"#eff6ff",padding:"2px 7px",borderRadius:8}}>{a.date}</span>}{a.time&&<span style={{fontSize:10,color:"#7C3AED",background:"#f4ecf7",padding:"2px 7px",borderRadius:8}}>{a.time}</span>}</div><div style={{fontSize:10,color:"#94a3b8",marginTop:4}}>Also: {a.assigned.filter(n=>n!==user.name).join(", ")||"Just you"}</div></div>))}
    <h3 style={S.sec}>Quick Links</h3>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}>
      {[{l:"My Tasks",em:"\u2705",p:"myTasks"},{l:"Prayer",em:"🙏",p:"prayer"},{l:"Photo",em:"📷",p:"photo"},{l:"Content",em:"📱",p:"content"},{l:"Teams",em:"👥",p:"teams"}].map(q=>(<button key={q.p} onClick={()=>go(q.p)} style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:5,padding:14,background:"#fff",border:"1px solid #e2e8f0",borderRadius:12,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}><span style={{fontSize:20}}>{q.em}</span><span style={{fontSize:10,fontWeight:600,color:"#334155"}}>{q.l}</span></button>))}
    </div>
    <h3 style={S.sec}>Today's Prayer</h3>
    <div style={{display:"flex",alignItems:"center",gap:12,padding:14,background:"#f0fdf4",borderRadius:12,border:"1px solid #bbf7d0"}}><span style={{fontSize:24}}>{pf.icon}</span><div><strong style={{color:"#065f46",fontSize:11}}>{pf.day}</strong><p style={{margin:"2px 0 0",fontSize:12,color:"#334155"}}>{pf.focus}</p></div></div>
  </div>);
}

// === MY TASKS (MEMBER) ===
function MyTasks({d,up,user}){
  const myA=d.activities.filter(a=>a.assigned.includes(user.name));
  const pend=myA.filter(a=>!a.done);const comp=myA.filter(a=>a.done);
  const markDone=id=>{up("activities",d.activities.map(a=>a.id===id?{...a,done:true,doneBy:user.name,doneDate:new Date().toLocaleDateString()}:a))};
  return(<div style={S.pg}>
    <h2 style={S.ti}>My Tasks</h2>
    {pend.length===0&&<div style={{...S.cd,textAlign:"center",padding:20}}><p style={{fontSize:12,color:"#64748b"}}>All clear! No pending tasks.</p></div>}
    {pend.map(a=>(<div key={a.id} style={{...S.cd,borderLeft:"4px solid #2563EB"}}><div style={{fontWeight:700,fontSize:13,color:"#0f172a"}}>{a.title}</div>{a.description&&<p style={{fontSize:11,color:"#64748b",margin:"3px 0 0"}}>{a.description}</p>}<div style={{display:"flex",gap:6,marginTop:5,flexWrap:"wrap"}}>{a.date&&<span style={{fontSize:10,color:"#2563EB",background:"#eff6ff",padding:"2px 7px",borderRadius:8}}>{a.date}</span>}{a.time&&<span style={{fontSize:10,color:"#7C3AED",background:"#f4ecf7",padding:"2px 7px",borderRadius:8}}>{a.time}</span>}</div><div style={{fontSize:10,color:"#94a3b8",marginTop:4}}>Assigned: {a.assigned.join(", ")}</div><button onClick={()=>markDone(a.id)} style={{marginTop:8,padding:"6px 14px",background:"#059669",color:"#fff",border:"none",borderRadius:8,fontSize:11,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Mark Complete</button></div>))}
    {comp.length>0&&<><h3 style={S.sec}>Completed</h3>{comp.map(a=>(<div key={a.id} style={{...S.cd,opacity:0.5}}><div style={{fontWeight:600,fontSize:12,textDecoration:"line-through",color:"#0f172a"}}>{a.title}</div><div style={{fontSize:10,color:"#059669",marginTop:2}}>Done {a.doneDate||""}</div></div>))}</>}
  </div>);
}

// === ACTIVITIES (PASTOR) ===
function Acts({d,up}){
  const [show,setShow]=useState(false);
  const [ti,setTi]=useState("");const [desc,setDesc]=useState("");const [dt,setDt]=useState("");const [tm,setTm]=useState("");const [asgn,setAsgn]=useState([]);
  const togA=n=>setAsgn(p=>p.includes(n)?p.filter(x=>x!==n):[...p,n]);
  const asgTeam=id=>{const t=TEAMS.find(x=>x.id===id);if(t)setAsgn(p=>[...new Set([...p,...t.members])])};
  const create=()=>{if(!ti.trim()||asgn.length===0)return;up("activities",[...d.activities,{id:Date.now(),title:ti.trim(),description:desc.trim(),date:dt,time:tm,assigned:asgn,done:false,created:new Date().toLocaleDateString()}]);setTi("");setDesc("");setDt("");setTm("");setAsgn([]);setShow(false)};
  const rm=id=>up("activities",d.activities.filter(a=>a.id!==id));
  const togDone=id=>up("activities",d.activities.map(a=>a.id===id?{...a,done:!a.done}:a));
  const pend=d.activities.filter(a=>!a.done);const comp=d.activities.filter(a=>a.done);
  return(<div style={S.pg}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
      <h2 style={{...S.ti,margin:0}}>Activities</h2>
      <button onClick={()=>setShow(!show)} style={{padding:"7px 14px",background:show?"#dc2626":"#2563EB",color:"#fff",border:"none",borderRadius:10,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>{show?"Cancel":"+ Create"}</button>
    </div>
    {show&&<div style={{background:"#fff",borderRadius:14,border:"2px solid #2563EB",padding:16,marginBottom:16}}>
      <h3 style={{fontSize:14,fontWeight:700,color:"#0f172a",margin:"0 0 10px"}}>New Activity</h3>
      <input value={ti} onChange={e=>setTi(e.target.value)} placeholder="Activity title *" style={{...S.inp,width:"100%",marginBottom:8,boxSizing:"border-box",flex:"none"}}/>
      <textarea value={desc} onChange={e=>setDesc(e.target.value)} placeholder="Description (optional)" style={{width:"100%",padding:"9px 14px",border:"1px solid #e2e8f0",borderRadius:10,fontSize:13,fontFamily:"'DM Sans',sans-serif",outline:"none",resize:"vertical",minHeight:50,boxSizing:"border-box",marginBottom:8}}/>
      <div style={{display:"flex",gap:8,marginBottom:10}}>
        <input type="date" value={dt} onChange={e=>setDt(e.target.value)} style={{...S.inp,flex:1}}/>
        <input type="time" value={tm} onChange={e=>setTm(e.target.value)} style={{...S.inp,flex:1}}/>
      </div>
      <h4 style={{fontSize:11,fontWeight:700,color:"#0f172a",margin:"0 0 6px"}}>Assign to team:</h4>
      <div style={{display:"flex",gap:4,flexWrap:"wrap",marginBottom:8}}>
        {TEAMS.map(t=>(<button key={t.id} onClick={()=>asgTeam(t.id)} style={{padding:"3px 9px",borderRadius:14,fontSize:10,fontWeight:600,border:"1px solid "+t.color,color:t.color,background:"#fff",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>{t.icon} {t.name}</button>))}
        <button onClick={()=>setAsgn(ALL_MEMBERS.map(m=>m.name))} style={{padding:"3px 9px",borderRadius:14,fontSize:10,fontWeight:600,border:"1px solid #0f172a",color:"#0f172a",background:"#fff",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>All</button>
      </div>
      <h4 style={{fontSize:11,fontWeight:700,color:"#0f172a",margin:"0 0 6px"}}>Or pick individuals ({asgn.length}):</h4>
      <div style={{display:"flex",gap:3,flexWrap:"wrap",marginBottom:10}}>
        {ALL_MEMBERS.map(m=>{const on=asgn.includes(m.name);return(<button key={m.name} onClick={()=>togA(m.name)} style={{padding:"3px 9px",borderRadius:14,fontSize:10,fontWeight:600,border:on?"1px solid #2563EB":"1px solid #e2e8f0",color:on?"#fff":"#64748b",background:on?"#2563EB":"#f8fafc",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>{m.name}</button>)})}
      </div>
      <button onClick={create} disabled={!ti.trim()||asgn.length===0} style={{width:"100%",padding:"10px",background:(!ti.trim()||asgn.length===0)?"#cbd5e1":"#2563EB",color:"#fff",border:"none",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Create ({asgn.length} people)</button>
    </div>}
    {pend.length===0&&!show&&<div style={{...S.cd,textAlign:"center",padding:20}}><p style={{color:"#64748b",fontSize:12}}>No activities. Tap "+ Create" to add one.</p></div>}
    {pend.map(a=>(<div key={a.id} style={{...S.cd,borderLeft:"4px solid #2563EB"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}><div style={{flex:1}}><div style={{fontWeight:700,fontSize:13,color:"#0f172a"}}>{a.title}</div>{a.description&&<p style={{fontSize:11,color:"#64748b",margin:"3px 0 0"}}>{a.description}</p>}</div><button onClick={()=>rm(a.id)} style={S.rm}>{Ic.x}</button></div>
      <div style={{display:"flex",gap:5,marginTop:5,flexWrap:"wrap"}}>{a.date&&<span style={{fontSize:10,color:"#2563EB",background:"#eff6ff",padding:"2px 7px",borderRadius:8}}>{a.date}</span>}{a.time&&<span style={{fontSize:10,color:"#7C3AED",background:"#f4ecf7",padding:"2px 7px",borderRadius:8}}>{a.time}</span>}<span style={{fontSize:10,color:"#059669",background:"#f0fdf4",padding:"2px 7px",borderRadius:8}}>{a.assigned.length} assigned</span></div>
      <div style={{display:"flex",gap:3,flexWrap:"wrap",marginTop:5}}>{a.assigned.map(n=>(<span key={n} style={{fontSize:9,padding:"2px 6px",borderRadius:10,background:"#f1f5f9",color:"#475569"}}>{n}</span>))}</div>
      <button onClick={()=>togDone(a.id)} style={{marginTop:8,padding:"5px 12px",background:"#059669",color:"#fff",border:"none",borderRadius:8,fontSize:11,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Mark Complete</button>
    </div>))}
    {comp.length>0&&<><h3 style={S.sec}>Completed ({comp.length})</h3>{comp.map(a=>(<div key={a.id} style={{...S.cd,opacity:0.5}}><div style={{display:"flex",justifyContent:"space-between"}}><span style={{fontWeight:600,fontSize:12,textDecoration:"line-through",color:"#0f172a"}}>{a.title}</span><button onClick={()=>togDone(a.id)} style={{fontSize:10,color:"#2563EB",background:"none",border:"none",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Reopen</button></div></div>))}</>}
  </div>);
}

// === TEAMS ===
const DEFAULT_TEAM_CHECKLISTS={
  worship:[{text:"Tune all instruments",done:false},{text:"Test microphones and monitors",done:false},{text:"Print/load song lyrics",done:false},{text:"Run through setlist once",done:false},{text:"Pray as a team before service",done:false}],
  media:[{text:"Test projector and slides",done:false},{text:"Check camera battery and storage",done:false},{text:"Test livestream connection",done:false},{text:"Prepare lower thirds / graphics",done:false},{text:"Backup all files from last week",done:false}],
  social:[{text:"Schedule this week's posts",done:false},{text:"Edit and upload Sunday reel",done:false},{text:"Reply to all comments and DMs",done:false},{text:"Check analytics and note top post",done:false},{text:"Prepare Friday hype content",done:false}],
  outreach:[{text:"Welcome cards / QR codes ready",done:false},{text:"Greeters assigned for Sunday",done:false},{text:"Follow up with last week's visitors",done:false},{text:"Update visitor contact list",done:false},{text:"Plan next fellowship event",done:false}],
  prayer:[{text:"Prepare Wednesday prayer topics",done:false},{text:"Send prayer reminders to team",done:false},{text:"Update prayer request list",done:false},{text:"Pray for each team member by name",done:false},{text:"Arrive 30min early for pre-service prayer",done:false}],
};

function Tms({d,up,isPastor}){
  const [sel,setSel]=useState(null);
  const [showAdd,setShowAdd]=useState(false);
  const [tName,setTName]=useState("");const [tColor,setTColor]=useState("#2563EB");const [tIcon,setTIcon]=useState("👥");const [tLead,setTLead]=useState("");const [tMembers,setTMembers]=useState([]);
  const [addingMember,setAddingMember]=useState(null);const [newMemberName,setNewMemberName]=useState("");
  const [teamTab,setTeamTab]=useState("members"); // members, checklist, sops, inventory
  const [newCheckItem,setNewCheckItem]=useState("");
  const [newSop,setNewSop]=useState({title:"",content:""});
  const [newInvItem,setNewInvItem]=useState({name:"",qty:"",status:"good"});
  const [editingSop,setEditingSop]=useState(null);
  const [showDirectory,setShowDirectory]=useState(false);
  const [newPersonName,setNewPersonName]=useState("");
  const [newPersonRole,setNewPersonRole]=useState("");
  const [newPersonPhone,setNewPersonPhone]=useState("");
  const [inviteSent,setInviteSent]=useState("");

  const teams=d.customTeams||TEAMS;
  const td=d.teamData||{};
  const allNames=[...new Set([...ALL_MEMBERS.map(m=>m.name),...(d.users||[]).map(u=>u.name)])];
  const colors=["#2563EB","#7C3AED","#EA580C","#DC2626","#059669","#d97706","#0891b2","#be185d"];
  const icons=["\uD83C\uDFB5","\uD83D\uDCF7","\uD83D\uDCF1","\uD83E\uDD1D","\uD83D\uDE4F","\uD83D\uDC65","\uD83C\uDFA4","\u26EA","\uD83D\uDCDA","\uD83C\uDF1F"];

  // Add person to church directory with phone
  const addPerson=function(){
    if(!newPersonName.trim())return;
    var exists=allNames.includes(newPersonName.trim());
    if(exists)return;
    var newUser={name:newPersonName.trim(),role:newPersonRole.trim()||"Member",phone:newPersonPhone.trim(),joined:new Date().toLocaleDateString()};
    var users=(d.users||[]).concat([newUser]);
    up("users",users);
    // Generate invite message
    if(newPersonPhone.trim()){
      var inviteMsg="Hi "+newPersonName.trim()+"! You are invited to join FGCLC English Church app. Open www.fgclc.co.in on your phone and sign in with this number: +91"+newPersonPhone.trim()+". Use OTP code: 1234. God bless! - Pastor, FGCLC";
      if(navigator.clipboard)navigator.clipboard.writeText(inviteMsg);
      setInviteSent(newPersonName.trim());
      setTimeout(function(){setInviteSent("")},3000);
    }
    setNewPersonName("");setNewPersonRole("");setNewPersonPhone("");
  };
  const removePersonFromDirectory=function(name){up("users",(d.users||[]).filter(function(u){return u.name!==name}))};
  const sendInvite=function(person){
    var inviteMsg="Hi "+person.name+"! You are invited to join FGCLC English Church app. Open www.fgclc.co.in and sign in with: +91"+(person.phone||"")+". Use OTP: 1234. God bless! - Pastor, FGCLC";
    var encoded=encodeURIComponent(inviteMsg);
    window.open("https://wa.me/"+(person.phone?"91"+person.phone:"")+"?text="+encoded,"_blank");
  };

  const getTeamData=(teamId)=>td[teamId]||{checklist:DEFAULT_TEAM_CHECKLISTS[teamId]||[],sops:[],inventory:[]};
  const updateTeamData=(teamId,field,val)=>{const cur=getTeamData(teamId);const updated={...td,[teamId]:{...cur,[field]:val}};up("teamData",updated)};

  // Checklist
  const toggleCheck=(teamId,idx)=>{const cl=[...getTeamData(teamId).checklist];cl[idx]={...cl[idx],done:!cl[idx].done};updateTeamData(teamId,"checklist",cl)};
  const addCheck=(teamId)=>{if(!newCheckItem.trim())return;const cl=[...getTeamData(teamId).checklist,{text:newCheckItem.trim(),done:false}];updateTeamData(teamId,"checklist",cl);setNewCheckItem("")};
  const removeCheck=(teamId,idx)=>{const cl=getTeamData(teamId).checklist.filter((_,i)=>i!==idx);updateTeamData(teamId,"checklist",cl)};
  const resetChecklist=(teamId)=>{const cl=getTeamData(teamId).checklist.map(c=>({...c,done:false}));updateTeamData(teamId,"checklist",cl)};

  // SOPs
  const addSop=(teamId)=>{if(!newSop.title.trim())return;const sops=[...getTeamData(teamId).sops,{id:Date.now(),title:newSop.title.trim(),content:newSop.content.trim(),updated:new Date().toLocaleDateString()}];updateTeamData(teamId,"sops",sops);setNewSop({title:"",content:""})};
  const removeSop=(teamId,id)=>{updateTeamData(teamId,"sops",getTeamData(teamId).sops.filter(s=>s.id!==id))};
  const updateSop=(teamId,id,field,val)=>{const sops=getTeamData(teamId).sops.map(s=>s.id===id?{...s,[field]:val,updated:new Date().toLocaleDateString()}:s);updateTeamData(teamId,"sops",sops)};

  // Inventory
  const addInv=(teamId)=>{if(!newInvItem.name.trim())return;const inv=[...getTeamData(teamId).inventory,{id:Date.now(),name:newInvItem.name.trim(),qty:newInvItem.qty.trim(),status:newInvItem.status,updated:new Date().toLocaleDateString()}];updateTeamData(teamId,"inventory",inv);setNewInvItem({name:"",qty:"",status:"good"})};
  const removeInv=(teamId,id)=>{updateTeamData(teamId,"inventory",getTeamData(teamId).inventory.filter(i=>i.id!==id))};
  const updateInv=(teamId,id,field,val)=>{const inv=getTeamData(teamId).inventory.map(i=>i.id===id?{...i,[field]:val,updated:new Date().toLocaleDateString()}:i);updateTeamData(teamId,"inventory",inv)};

  // Team CRUD
  const createTeam=()=>{if(!tName.trim()||!tLead)return;const nt={id:"t-"+Date.now(),name:tName.trim(),color:tColor,icon:tIcon,lead:tLead,members:[...new Set([tLead,...tMembers])]};up("customTeams",[...teams,nt]);setTName("");setTLead("");setTMembers([]);setShowAdd(false)};
  const removeTeam=id=>up("customTeams",teams.filter(t=>t.id!==id));
  const addMemberToTeam=(teamId)=>{if(!newMemberName.trim())return;const updated=teams.map(t=>t.id===teamId?{...t,members:[...new Set([...t.members,newMemberName.trim()])]}:t);up("customTeams",updated);setNewMemberName("");setAddingMember(null)};
  const removeMemberFromTeam=(teamId,name)=>{const updated=teams.map(t=>t.id===teamId?{...t,members:t.members.filter(m=>m!==name),lead:t.lead===name?"":t.lead}:t);up("customTeams",updated)};
  const setLead=(teamId,name)=>{up("customTeams",teams.map(t=>t.id===teamId?{...t,lead:name}:t))};

  const ttab=(active,color)=>({flex:1,padding:"7px 2px",background:active?color:"transparent",border:"none",borderRadius:8,fontSize:10,fontWeight:700,color:active?"#fff":"#64748b",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"});

  return(<div style={S.pg}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
      <h2 style={{...S.ti,margin:0}}>Teams</h2>
      {isPastor&&<div style={{display:"flex",gap:4}}>
        <button onClick={()=>{setShowDirectory(!showDirectory);setShowAdd(false)}} style={{padding:"7px 10px",background:showDirectory?"#d97706":"#059669",color:"#fff",border:"none",borderRadius:10,fontSize:11,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>{showDirectory?"Close":"+ Person"}</button>
        <button onClick={()=>{setShowAdd(!showAdd);setShowDirectory(false)}} style={{padding:"7px 10px",background:showAdd?"#dc2626":"#2563EB",color:"#fff",border:"none",borderRadius:10,fontSize:11,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>{showAdd?"Cancel":"+ Team"}</button>
      </div>}
    </div>

    {/* ADD PERSON / DIRECTORY */}
    {showDirectory&&isPastor&&<div style={{background:"#fff",borderRadius:14,border:"2px solid #059669",padding:16,marginBottom:14}}>
      <h3 style={{fontSize:14,fontWeight:700,color:"#0f172a",margin:"0 0 10px"}}>Church Directory</h3>
      <p style={{fontSize:11,color:"#64748b",margin:"0 0 10px"}}>Add members with their phone number. Send them an invitation to join via WhatsApp.</p>
      <div style={{display:"flex",flexDirection:"column",gap:6,marginBottom:10}}>
        <div style={{display:"flex",gap:6}}>
          <input value={newPersonName} onChange={function(e){setNewPersonName(e.target.value)}} placeholder="Full name" style={{...S.inp,fontSize:12,flex:1}}/>
          <input value={newPersonRole} onChange={function(e){setNewPersonRole(e.target.value)}} placeholder="Role" style={{...S.inp,fontSize:12,flex:1}}/>
        </div>
        <div style={{display:"flex",gap:6}}>
          <div style={{position:"relative",flex:1}}>
            <span style={{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",color:"#94a3b8",fontSize:11}}>+91</span>
            <input value={newPersonPhone} onChange={function(e){setNewPersonPhone(e.target.value.replace(/[^0-9]/g,"").slice(0,10))}} placeholder="Phone number" style={{...S.inp,fontSize:12,paddingLeft:36,width:"100%"}}/>
          </div>
          <button onClick={addPerson} className="kb-btn" style={{...S.abtn,width:"auto",paddingLeft:14,paddingRight:14,background:"#059669",fontSize:11,fontWeight:700,fontFamily:"'DM Sans',sans-serif",color:"#fff",gap:4,whiteSpace:"nowrap"}}>Add & Invite</button>
        </div>
      </div>
      {inviteSent&&<div className="kb-fade" style={{padding:"8px 12px",background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:8,marginBottom:10,fontSize:11,color:"#059669",fontWeight:600}}>{"Invitation copied for "+inviteSent+"! Paste in WhatsApp."}</div>}

      <h4 style={{fontSize:11,fontWeight:700,color:"#334155",margin:"0 0 6px"}}>All Members ({allNames.length})</h4>
      <div style={{maxHeight:250,overflowY:"auto"}}>
        {allNames.map(function(name){
          var isOriginal=ALL_MEMBERS.find(function(m){return m.name===name});
          var userObj=(d.users||[]).find(function(u){return u.name===name});
          var ph=userObj?userObj.phone:"";
          return(<div key={name} style={{display:"flex",alignItems:"center",gap:8,padding:"6px 8px",borderRadius:8,marginBottom:2,background:"#f8fafc"}}>
            <div style={{width:24,height:24,borderRadius:"50%",background:"#64748b",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:11,fontWeight:700}}>{name[0]}</div>
            <div style={{flex:1}}>
              <div style={{fontSize:11,fontWeight:600,color:"#0f172a"}}>{name}</div>
              <div style={{fontSize:9,color:"#94a3b8"}}>{isOriginal?isOriginal.role:userObj?userObj.role:"Member"}{ph?" \u00b7 +91"+ph:""}</div>
            </div>
            {userObj&&userObj.phone&&<button onClick={function(){sendInvite(userObj)}} style={{fontSize:9,color:"#059669",background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:6,padding:"3px 8px",cursor:"pointer",fontFamily:"'DM Sans',sans-serif",fontWeight:600}}>Invite</button>}
            {!isOriginal&&<button onClick={function(){removePersonFromDirectory(name)}} style={S.rm}>{Ic.x}</button>}
          </div>);
        })}
      </div>
    </div>}

    {/* CREATE TEAM */}
    {showAdd&&isPastor&&<div style={{background:"#fff",borderRadius:14,border:"2px solid #2563EB",padding:16,marginBottom:14}}>
      <h3 style={{fontSize:14,fontWeight:700,color:"#0f172a",margin:"0 0 10px"}}>Create Team</h3>
      <input value={tName} onChange={e=>setTName(e.target.value)} placeholder="Team name" style={{...S.inp,width:"100%",marginBottom:8,boxSizing:"border-box",flex:"none"}}/>
      <div style={{display:"flex",gap:4,marginBottom:8,flexWrap:"wrap"}}><span style={{fontSize:11,color:"#64748b",lineHeight:"24px"}}>Color:</span>{colors.map(c=>(<button key={c} onClick={()=>setTColor(c)} style={{width:24,height:24,borderRadius:"50%",background:c,border:tColor===c?"3px solid #0f172a":"2px solid #e2e8f0",cursor:"pointer"}}/>))}</div>
      <div style={{display:"flex",gap:4,marginBottom:8,flexWrap:"wrap"}}><span style={{fontSize:11,color:"#64748b",lineHeight:"28px"}}>Icon:</span>{icons.map(ic=>(<button key={ic} onClick={()=>setTIcon(ic)} style={{width:28,height:28,borderRadius:6,background:tIcon===ic?"#eff6ff":"#f8fafc",border:tIcon===ic?"2px solid #2563EB":"1px solid #e2e8f0",cursor:"pointer",fontSize:16,display:"flex",alignItems:"center",justifyContent:"center"}}>{ic}</button>))}</div>
      <p style={{fontSize:11,fontWeight:700,color:"#334155",margin:"0 0 4px"}}>Lead:</p>
      <div style={{display:"flex",gap:3,flexWrap:"wrap",marginBottom:8}}>{allNames.map(n=>(<button key={n} onClick={()=>setTLead(n)} style={{padding:"3px 9px",borderRadius:14,fontSize:10,fontWeight:600,border:tLead===n?"1px solid #2563EB":"1px solid #e2e8f0",color:tLead===n?"#fff":"#64748b",background:tLead===n?"#2563EB":"#f8fafc",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>{n}</button>))}</div>
      <p style={{fontSize:11,fontWeight:700,color:"#334155",margin:"0 0 4px"}}>Members:</p>
      <div style={{display:"flex",gap:3,flexWrap:"wrap",marginBottom:10}}>{allNames.map(n=>{const on=tMembers.includes(n);return(<button key={n} onClick={()=>setTMembers(on?tMembers.filter(x=>x!==n):[...tMembers,n])} style={{padding:"3px 9px",borderRadius:14,fontSize:10,fontWeight:600,border:on?"1px solid #059669":"1px solid #e2e8f0",color:on?"#fff":"#64748b",background:on?"#059669":"#f8fafc",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>{n}</button>)})}</div>
      <button onClick={createTeam} disabled={!tName.trim()||!tLead} style={{width:"100%",padding:"10px",background:(!tName.trim()||!tLead)?"#cbd5e1":"#2563EB",color:"#fff",border:"none",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Create</button>
    </div>}

    {/* TEAM LIST */}
    {teams.map(t=>{
      const isOpen=sel===t.id;
      const tData=getTeamData(t.id);
      const checkDone=tData.checklist.filter(c=>c.done).length;
      return(<div key={t.id} style={{marginBottom:8}}>
        <button onClick={()=>{setSel(isOpen?null:t.id);setTeamTab("members")}} style={{display:"flex",alignItems:"center",width:"100%",padding:"12px 14px",background:"#fff",border:"1px solid #e2e8f0",borderLeft:"4px solid "+t.color,borderRadius:isOpen?"10px 10px 0 0":"10px",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>
          <div style={{display:"flex",alignItems:"center",gap:10,flex:1}}>
            <span style={{fontSize:18}}>{t.icon}</span>
            <div style={{textAlign:"left"}}>
              <div style={{fontWeight:700,color:"#0f172a",fontSize:13}}>{t.name}</div>
              <div style={{fontSize:10,color:"#64748b"}}>{t.lead?"Lead: "+t.lead+" \u00b7 ":""}{t.members.length} members \u00b7 {checkDone}/{tData.checklist.length} tasks</div>
            </div>
          </div>
          <span style={{transform:isOpen?"rotate(90deg)":"none",transition:"0.2s"}}>{Ic.chev}</span>
        </button>

        {isOpen&&<div style={{background:"#fff",border:"1px solid #e2e8f0",borderTop:"none",borderRadius:"0 0 10px 10px",overflow:"hidden"}}>
          {/* TABS */}
          <div style={{display:"flex",gap:3,padding:"8px 10px",background:"#f8fafc",borderBottom:"1px solid #f1f5f9"}}>
            <button onClick={()=>setTeamTab("members")} style={ttab(teamTab==="members",t.color)}>Members</button>
            <button onClick={()=>setTeamTab("checklist")} style={ttab(teamTab==="checklist",t.color)}>Checklist</button>
            <button onClick={()=>setTeamTab("sops")} style={ttab(teamTab==="sops",t.color)}>SOPs</button>
            <button onClick={()=>setTeamTab("inventory")} style={ttab(teamTab==="inventory",t.color)}>Inventory</button>
          </div>

          {/* MEMBERS TAB */}
          {teamTab==="members"&&<div style={{padding:"10px 14px"}}>
            {t.members.map(n=>(<div key={n} style={{display:"flex",alignItems:"center",gap:10,padding:"5px 0"}}>
              <div style={{width:28,height:28,borderRadius:"50%",background:t.color,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:12,fontWeight:700}}>{n[0]}</div>
              <div style={{flex:1}}><div style={{fontWeight:600,fontSize:11,color:"#0f172a"}}>{n}{n===t.lead&&<span style={{fontSize:9,fontWeight:700,background:"#dbeafe",color:"#2563EB",padding:"1px 5px",borderRadius:4,marginLeft:4}}>LEAD</span>}</div></div>
              {isPastor&&n!==t.lead&&<button onClick={()=>setLead(t.id,n)} style={{fontSize:9,color:"#2563EB",background:"#eff6ff",border:"none",borderRadius:4,padding:"2px 6px",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Lead</button>}
              {isPastor&&<button onClick={()=>removeMemberFromTeam(t.id,n)} style={S.rm}>{Ic.x}</button>}
            </div>))}
            {isPastor&&addingMember===t.id&&<div style={{display:"flex",gap:4,marginTop:6,flexWrap:"wrap"}}>
              {allNames.filter(n=>!t.members.includes(n)).map(n=>(<button key={n} onClick={()=>setNewMemberName(n)} style={{padding:"3px 8px",borderRadius:12,fontSize:10,fontWeight:600,border:newMemberName===n?"1px solid #059669":"1px solid #e2e8f0",color:newMemberName===n?"#fff":"#64748b",background:newMemberName===n?"#059669":"#fff",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>{n}</button>))}
              {newMemberName&&<button onClick={()=>addMemberToTeam(t.id)} style={{padding:"3px 10px",borderRadius:12,fontSize:10,fontWeight:700,background:"#2563EB",color:"#fff",border:"none",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Add</button>}
            </div>}
            {isPastor&&<div style={{display:"flex",gap:6,marginTop:8}}>
              <button onClick={()=>setAddingMember(addingMember===t.id?null:t.id)} style={{fontSize:10,color:"#2563EB",background:"#eff6ff",border:"none",borderRadius:6,padding:"4px 10px",cursor:"pointer",fontFamily:"'DM Sans',sans-serif",fontWeight:600}}>{addingMember===t.id?"Done":"+ Member"}</button>
              {!TEAMS.find(dt=>dt.id===t.id)&&<button onClick={()=>removeTeam(t.id)} style={{fontSize:10,color:"#dc2626",background:"#fef2f2",border:"none",borderRadius:6,padding:"4px 10px",cursor:"pointer",fontFamily:"'DM Sans',sans-serif",fontWeight:600}}>Delete Team</button>}
            </div>}
          </div>}

          {/* CHECKLIST TAB */}
          {teamTab==="checklist"&&<div style={{padding:"10px 14px"}}>
            <div style={S.prog}><div style={S.pf((checkDone/Math.max(tData.checklist.length,1))*100,t.color)}/></div>
            <p style={{fontSize:10,color:"#64748b",marginBottom:8}}>{checkDone}/{tData.checklist.length} done</p>
            {tData.checklist.map((item,idx)=>(<button key={idx} onClick={()=>toggleCheck(t.id,idx)} style={{display:"flex",alignItems:"center",gap:8,padding:"7px 8px",borderRadius:8,border:"1px solid #e2e8f0",marginBottom:3,width:"100%",textAlign:"left",cursor:"pointer",fontFamily:"'DM Sans',sans-serif",background:item.done?"#f0fdf4":"#fff"}}>
              <div style={S.cb(item.done,t.color)}>{item.done&&<span style={{color:"#fff"}}>{Ic.check}</span>}</div>
              <span style={{flex:1,fontSize:12,color:item.done?"#059669":"#334155",textDecoration:item.done?"line-through":"none"}}>{item.text}</span>
              {isPastor&&<button onClick={e=>{e.stopPropagation();removeCheck(t.id,idx)}} style={S.rm}>{Ic.x}</button>}
            </button>))}
            <div style={{display:"flex",gap:6,marginTop:8}}>
              <input value={newCheckItem} onChange={e=>setNewCheckItem(e.target.value)} placeholder="Add checklist item..." style={{...S.inp,fontSize:11}} onKeyDown={e=>e.key==="Enter"&&addCheck(t.id)}/>
              <button onClick={()=>addCheck(t.id)} style={{...S.abtn,width:32,height:32}}>{Ic.plus}</button>
            </div>
            <button onClick={()=>resetChecklist(t.id)} style={{...S.rst,fontSize:10}}>Reset All</button>
          </div>}

          {/* SOPS TAB */}
          {teamTab==="sops"&&<div style={{padding:"10px 14px"}}>
            <p style={{fontSize:11,color:"#64748b",margin:"0 0 8px"}}>Standard procedures, guides, and references for {t.name}.</p>
            {tData.sops.length===0&&<p style={{fontSize:11,color:"#94a3b8",textAlign:"center",padding:12}}>No SOPs yet. Add your first one below.</p>}
            {tData.sops.map(sop=>(
              <div key={sop.id} style={{background:"#f8fafc",borderRadius:10,border:"1px solid #e2e8f0",marginBottom:6,overflow:"hidden"}}>
                <button onClick={()=>setEditingSop(editingSop===sop.id?null:sop.id)} style={{width:"100%",padding:"10px 12px",background:"transparent",border:"none",cursor:"pointer",fontFamily:"'DM Sans',sans-serif",textAlign:"left",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <div><div style={{fontWeight:700,fontSize:12,color:"#0f172a"}}>{sop.title}</div><div style={{fontSize:9,color:"#94a3b8"}}>Updated {sop.updated}</div></div>
                  <span style={{transform:editingSop===sop.id?"rotate(90deg)":"none",transition:"0.2s",color:"#94a3b8"}}>{Ic.chev}</span>
                </button>
                {editingSop===sop.id&&<div style={{padding:"8px 12px",borderTop:"1px solid #e2e8f0"}}>
                  {isPastor?<>
                    <input value={sop.title} onChange={e=>updateSop(t.id,sop.id,"title",e.target.value)} style={{...S.inp,width:"100%",fontSize:12,marginBottom:6,boxSizing:"border-box",flex:"none",fontWeight:700}}/>
                    <textarea value={sop.content} onChange={e=>updateSop(t.id,sop.id,"content",e.target.value)} style={{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:8,fontSize:11,fontFamily:"'DM Sans',sans-serif",outline:"none",resize:"vertical",minHeight:80,boxSizing:"border-box"}}/>
                    <button onClick={()=>removeSop(t.id,sop.id)} style={{fontSize:10,color:"#dc2626",background:"none",border:"none",cursor:"pointer",fontFamily:"'DM Sans',sans-serif",marginTop:6}}>Delete SOP</button>
                  </>:<div style={{fontSize:12,color:"#334155",whiteSpace:"pre-wrap",lineHeight:1.5}}>{sop.content||"No content yet."}</div>}
                </div>}
              </div>
            ))}
            {isPastor&&<div style={{marginTop:8,padding:10,background:"#f0f9ff",borderRadius:10,border:"1px dashed #93c5fd"}}>
              <input value={newSop.title} onChange={e=>setNewSop({...newSop,title:e.target.value})} placeholder="SOP title (e.g. Sunday Setup Procedure)" style={{...S.inp,width:"100%",fontSize:12,marginBottom:6,boxSizing:"border-box",flex:"none"}}/>
              <textarea value={newSop.content} onChange={e=>setNewSop({...newSop,content:e.target.value})} placeholder="Write the procedure step by step..." style={{width:"100%",padding:"8px 12px",border:"1px solid #e2e8f0",borderRadius:8,fontSize:11,fontFamily:"'DM Sans',sans-serif",outline:"none",resize:"vertical",minHeight:60,boxSizing:"border-box",marginBottom:6}}/>
              <button onClick={()=>addSop(t.id)} disabled={!newSop.title.trim()} style={{padding:"6px 14px",background:newSop.title.trim()?"#2563EB":"#cbd5e1",color:"#fff",border:"none",borderRadius:8,fontSize:11,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Add SOP</button>
            </div>}
          </div>}

          {/* INVENTORY TAB */}
          {teamTab==="inventory"&&<div style={{padding:"10px 14px"}}>
            <p style={{fontSize:11,color:"#64748b",margin:"0 0 8px"}}>Equipment, supplies, and maintenance tracking.</p>
            {tData.inventory.length===0&&<p style={{fontSize:11,color:"#94a3b8",textAlign:"center",padding:12}}>No inventory items. Add equipment below.</p>}
            {tData.inventory.map(item=>{
              const sc=item.status==="good"?"#059669":item.status==="needs-repair"?"#d97706":"#dc2626";
              return(<div key={item.id} style={{display:"flex",alignItems:"center",gap:8,padding:"8px 10px",background:"#fff",borderRadius:8,border:"1px solid #e2e8f0",marginBottom:4}}>
                <div style={{width:8,height:8,borderRadius:"50%",background:sc,flexShrink:0}}/>
                <div style={{flex:1}}>
                  <div style={{fontSize:12,fontWeight:600,color:"#0f172a"}}>{item.name}{item.qty&&<span style={{fontSize:10,color:"#64748b",fontWeight:400}}> (Qty: {item.qty})</span>}</div>
                  <div style={{fontSize:9,color:"#94a3b8"}}>Updated {item.updated}</div>
                </div>
                <select value={item.status} onChange={e=>updateInv(t.id,item.id,"status",e.target.value)} style={{fontSize:10,border:"1px solid #e2e8f0",borderRadius:6,padding:"2px 4px",fontFamily:"'DM Sans',sans-serif",color:sc,background:"#fff"}}>
                  <option value="good">Good</option>
                  <option value="needs-repair">Needs Repair</option>
                  <option value="missing">Missing</option>
                </select>
                {isPastor&&<button onClick={()=>removeInv(t.id,item.id)} style={S.rm}>{Ic.x}</button>}
              </div>);
            })}
            <div style={{marginTop:8,padding:10,background:"#f0fdf4",borderRadius:10,border:"1px dashed #bbf7d0"}}>
              <div style={{display:"flex",gap:6,marginBottom:6}}>
                <input value={newInvItem.name} onChange={e=>setNewInvItem({...newInvItem,name:e.target.value})} placeholder="Item name (e.g. Projector)" style={{...S.inp,fontSize:11,flex:2}}/>
                <input value={newInvItem.qty} onChange={e=>setNewInvItem({...newInvItem,qty:e.target.value})} placeholder="Qty" style={{...S.inp,fontSize:11,flex:1}}/>
              </div>
              <div style={{display:"flex",gap:6}}>
                <select value={newInvItem.status} onChange={e=>setNewInvItem({...newInvItem,status:e.target.value})} style={{...S.inp,fontSize:11,flex:1}}>
                  <option value="good">Good</option>
                  <option value="needs-repair">Needs Repair</option>
                  <option value="missing">Missing</option>
                </select>
                <button onClick={()=>addInv(t.id)} disabled={!newInvItem.name.trim()} style={{padding:"6px 14px",background:newInvItem.name.trim()?"#059669":"#cbd5e1",color:"#fff",border:"none",borderRadius:8,fontSize:11,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Add</button>
              </div>
            </div>
          </div>}
        </div>}
      </div>);
    })}
  </div>);
}

// === SCHEDULE ===
function Sched({d,up,wk,setWk}){
  const plan=d.customPlan||WEEKLY_SCHEDULE;
  const [editing,setEditing]=useState(null); // week number being edited
  const [editTheme,setEditTheme]=useState("");
  const [editEvents,setEditEvents]=useState([]);
  const [newEv,setNewEv]=useState("");
  const [showAI,setShowAI]=useState(false);
  const [aiDesc,setAiDesc]=useState("");
  const [aiLoading,setAiLoading]=useState(false);

  const tog=(w,i)=>{const wp={...d.weekProgress};if(!wp[w])wp[w]={};wp[w][i]=!wp[w][i];up("weekProgress",wp)};

  const startEdit=(week)=>{setEditing(week.wk);setEditTheme(week.theme);setEditEvents([...week.events])};
  const saveEdit=()=>{
    const np=plan.map(mo=>({...mo,weeks:mo.weeks.map(w=>w.wk===editing?{...w,theme:editTheme,events:editEvents}:w)}));
    up("customPlan",np);setEditing(null);
  };
  const addEv=()=>{if(!newEv.trim())return;setEditEvents([...editEvents,newEv.trim()]);setNewEv("")};
  const rmEv=i=>setEditEvents(editEvents.filter((_,idx)=>idx!==i));
  const moveEv=(i,dir)=>{const arr=[...editEvents];const ni=i+dir;if(ni<0||ni>=arr.length)return;[arr[i],arr[ni]]=[arr[ni],arr[i]];setEditEvents(arr)};

  const generateFullPlan=async()=>{
    if(!aiDesc.trim())return;setAiLoading(true);
    try{
      const res=await fetch(SUPA_URL+"/functions/v1/ai-proxy",{method:"POST",headers:{"Content-Type":"application/json","Authorization":"Bearer "+SUPA_KEY},body:JSON.stringify({prompt:"You are a youth ministry planning assistant for FGCLC English Church. The pastor wants a 12-week (3-month) plan. Their description: \""+aiDesc.trim()+"\"\n\nGenerate a JSON array of 3 months. Each month: {\"month\":1, \"weeks\":[{\"wk\":1,\"theme\":\"...\",\"events\":[\"item1\",\"item2\",...]},...]}. Each week has 4-5 events. Month 1 = weeks 1-4, Month 2 = weeks 5-8, Month 3 = weeks 9-12. Themes should be short (2-4 words). Events should be actionable tasks. Respond with ONLY the JSON array.",max_tokens:2000})});
      const data=await res.json();
      var text=data.text||"";
      var cleanText=text;while(cleanText.indexOf(String.fromCharCode(96))>=0)cleanText=cleanText.replace(String.fromCharCode(96),"");cleanText=cleanText.replace(/^json\s*/,"").trim();const parsed=JSON.parse(cleanText);
      if(Array.isArray(parsed)&&parsed.length===3){up("customPlan",parsed);setShowAI(false);setAiDesc("")}
    }catch(e){console.error("AI Plan error:",e)}
    setAiLoading(false);
  };

  const resetPlan=()=>{up("customPlan",null)};
  const isCustom=d.customPlan!==null&&d.customPlan!==undefined;

  return(<div style={S.pg}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
      <h2 style={{...S.ti,margin:0}}>12-Week Plan {isCustom&&<span style={{fontSize:9,color:"#7C3AED",background:"#f4ecf7",padding:"1px 6px",borderRadius:6,marginLeft:6,fontWeight:600}}>Custom</span>}</h2>
      <div style={{display:"flex",gap:4}}>
        {!showAI&&<button onClick={()=>setShowAI(true)} style={{padding:"5px 10px",background:"linear-gradient(135deg,#7C3AED,#2563EB)",border:"none",color:"#fff",fontSize:10,fontWeight:700,borderRadius:6,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>AI Generate</button>}
        {isCustom&&!showAI&&<button onClick={resetPlan} style={{padding:"5px 10px",background:"#f1f5f9",border:"none",color:"#64748b",fontSize:10,fontWeight:600,borderRadius:6,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Reset</button>}
      </div>
    </div>

    {/* AI FULL PLAN GENERATOR */}
    {showAI&&<div style={{background:"#fff",borderRadius:14,border:"2px solid #7C3AED",padding:16,marginBottom:14}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
        <h3 style={{margin:0,fontSize:13,fontWeight:700,color:"#0f172a"}}>{"✨"} AI Plan Generator</h3>
        <button onClick={()=>{setShowAI(false);setAiDesc("")}} style={{background:"none",border:"none",color:"#94a3b8",cursor:"pointer",fontSize:10,fontFamily:"'DM Sans',sans-serif"}}>Cancel</button>
      </div>
      <p style={{fontSize:11,color:"#64748b",margin:"0 0 10px"}}>Describe your 3-month vision and AI will create the full 12-week plan.</p>
      <textarea value={aiDesc} onChange={e=>setAiDesc(e.target.value)} placeholder={"e.g. Month 1 focus on team building and unity, Month 2 on worship training and media setup, Month 3 on outreach and community service. We have worship nights every 4 weeks. We want to grow from 17 to 30 members..."} style={{width:"100%",padding:"10px 14px",border:"1px solid #e2e8f0",borderRadius:10,fontSize:12,fontFamily:"'DM Sans',sans-serif",outline:"none",resize:"vertical",minHeight:80,boxSizing:"border-box",marginBottom:10}}/>
      <button onClick={generateFullPlan} disabled={aiLoading||!aiDesc.trim()} style={{width:"100%",padding:"10px",background:(aiLoading||!aiDesc.trim())?"#cbd5e1":"linear-gradient(135deg,#7C3AED,#2563EB)",color:"#fff",border:"none",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>
        {aiLoading?"Generating 12-week plan...":"Generate Full Plan"}
      </button>
    </div>}

    {/* WEEK PILLS */}
    <div style={{display:"flex",gap:5,flexWrap:"wrap",marginBottom:14}}>
      {Array.from({length:12},(_,i)=>i+1).map(w=>(<button key={w} onClick={()=>setWk(w)} style={{width:28,height:28,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif",background:w===wk?"#1e293b":"#f1f5f9",color:w===wk?"#fff":"#475569",border:w===wk?"none":"1px solid #e2e8f0"}}>{w}</button>))}
    </div>

    {/* MONTHS */}
    {plan.map(mo=>(<div key={mo.month}>
      <h3 style={{fontSize:10,fontWeight:700,color:"#94a3b8",textTransform:"uppercase",letterSpacing:1,margin:"10px 0 5px"}}>{monthName(mo.month)}</h3>
      {mo.weeks.map(week=>{
        const dn=Object.values(d.weekProgress[week.wk]||{}).filter(Boolean).length;
        const isEditing=editing===week.wk;

        return(<div key={week.wk} style={{...S.cd,border:week.wk===wk?"2px solid #2563EB":"1px solid #e2e8f0"}}>
          {/* HEADER */}
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:5}}>
            <div>
              <span style={{fontSize:10,fontWeight:700,color:"#2563EB"}}>{weekLabel(week.wk)}</span>
              {!isEditing&&<h4 style={{margin:"1px 0 0",fontSize:13,fontWeight:700,color:"#0f172a"}}>{week.theme}</h4>}
              {isEditing&&<input value={editTheme} onChange={e=>setEditTheme(e.target.value)} style={{...S.inp,fontSize:13,fontWeight:700,padding:"4px 8px",marginTop:2}}/>}
            </div>
            <div style={{display:"flex",alignItems:"center",gap:4}}>
              {!isEditing&&<span style={{fontSize:10,color:"#64748b",background:"#f1f5f9",padding:"2px 7px",borderRadius:10}}>{dn}/{week.events.length}</span>}
              {!isEditing&&<button onClick={()=>startEdit(week)} style={{fontSize:9,color:"#2563EB",background:"#eff6ff",border:"none",borderRadius:4,padding:"3px 7px",cursor:"pointer",fontFamily:"'DM Sans',sans-serif",fontWeight:600}}>Edit</button>}
              {isEditing&&<button onClick={()=>setEditing(null)} style={{fontSize:9,color:"#64748b",background:"none",border:"none",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Cancel</button>}
              {isEditing&&<button onClick={saveEdit} style={{fontSize:9,color:"#fff",background:"#2563EB",border:"none",borderRadius:4,padding:"3px 8px",cursor:"pointer",fontFamily:"'DM Sans',sans-serif",fontWeight:700}}>Save</button>}
            </div>
          </div>

          {/* VIEW MODE */}
          {!isEditing&&week.events.map((ev,i)=>{const done=d.weekProgress[week.wk]?.[i];return(
            <button key={i} onClick={()=>tog(week.wk,i)} style={{display:"flex",alignItems:"center",gap:8,padding:"4px 0",background:"none",border:"none",width:"100%",cursor:"pointer",textAlign:"left",fontFamily:"'DM Sans',sans-serif",opacity:done?0.4:1}}>
              <div style={S.cb(done)}>{done&&<span style={{color:"#fff"}}>{Ic.check}</span>}</div>
              <span style={{fontSize:11,textDecoration:done?"line-through":"none",color:"#334155"}}>{ev}</span>
            </button>
          )})}

          {/* EDIT MODE */}
          {isEditing&&<div>
            {editEvents.map((ev,i)=>(<div key={i} style={{display:"flex",alignItems:"center",gap:4,padding:"4px 6px",background:"#f8fafc",borderRadius:6,marginBottom:3,border:"1px solid #e2e8f0"}}>
              <div style={{display:"flex",flexDirection:"column",gap:1}}>
                <button onClick={()=>moveEv(i,-1)} style={{background:"none",border:"none",cursor:"pointer",padding:0,fontSize:9,color:i===0?"#e2e8f0":"#64748b"}}>{"\u25B2"}</button>
                <button onClick={()=>moveEv(i,1)} style={{background:"none",border:"none",cursor:"pointer",padding:0,fontSize:9,color:i===editEvents.length-1?"#e2e8f0":"#64748b"}}>{"\u25BC"}</button>
              </div>
              <input value={ev} onChange={e=>{const arr=[...editEvents];arr[i]=e.target.value;setEditEvents(arr)}} style={{...S.inp,fontSize:11,padding:"4px 8px",flex:1}}/>
              <button onClick={()=>rmEv(i)} style={S.rm}>{Ic.x}</button>
            </div>))}
            <div style={{display:"flex",gap:4,marginTop:6}}>
              <input value={newEv} onChange={e=>setNewEv(e.target.value)} placeholder="Add event..." style={{...S.inp,fontSize:11}} onKeyDown={e=>e.key==="Enter"&&addEv()}/>
              <button onClick={addEv} style={{...S.abtn,width:30,height:30}}>{Ic.plus}</button>
            </div>
          </div>}
        </div>);
      })}
    </div>))}
  </div>);
}

// === PHOTO ===
function Pho({d,up}){const [ev,setEv]=useState("sunday");const key=ev+"-cur";const ch=d.photoChecks[key]||{};const tog=id=>{const p={...d.photoChecks};if(!p[key])p[key]={};p[key][id]=!p[key][id];up("photoChecks",p)};const dn=Object.values(ch).filter(Boolean).length;return(<div style={S.pg}><h2 style={S.ti}>Photo Checklist</h2><div style={{display:"flex",gap:6,marginBottom:10}}>{["sunday","worship-night","event"].map(e=>(<button key={e} onClick={()=>setEv(e)} style={S.pill(ev===e)}>{e==="sunday"?"Sunday":e==="worship-night"?"Worship Night":"Event"}</button>))}</div><div style={S.prog}><div style={S.pf((dn/10)*100)}/></div><p style={{fontSize:11,color:"#64748b",marginBottom:8}}>{dn}/10 shots</p>{PHOTO_CHECKLIST.map(s=>{const on=ch[s.id];return(<button key={s.id} onClick={()=>tog(s.id)} style={S.row(on)}><div style={S.cb(on)}>{on&&<span style={{color:"#fff"}}>{Ic.check}</span>}</div><div style={{flex:1}}><div style={{fontWeight:600,fontSize:11,color:"#0f172a"}}>{s.id}. {s.shot}</div><div style={{fontSize:10,color:"#64748b"}}>{s.desc}</div><div style={{fontSize:9,color:"#2563EB"}}>{"💡"} {s.tip}</div></div></button>)})}<button onClick={()=>{const p={...d.photoChecks};p[key]={};up("photoChecks",p)}} style={S.rst}>Reset</button></div>)}

// === CONTENT ===
function Cnt({d,up}){const key="con-this";const dn=d.contentDone[key]||{};const tog=day=>{const c={...d.contentDone};if(!c[key])c[key]={};c[key][day]=!c[key][day];up("contentDone",c)};return(<div style={S.pg}><h2 style={S.ti}>Content Calendar</h2>{CONTENT_CALENDAR.map(item=>{const on=dn[item.day];return(<button key={item.day} onClick={()=>tog(item.day)} style={S.row(on,item.color)}><div style={S.cb(on)}>{on&&<span style={{color:"#fff"}}>{Ic.check}</span>}</div><div style={{flex:1}}><div style={{display:"flex",justifyContent:"space-between"}}><span style={{fontWeight:700,fontSize:11,color:"#0f172a"}}>{item.day}</span><span style={{fontSize:9,color:"#64748b",background:"#f1f5f9",padding:"1px 6px",borderRadius:8}}>{item.platform}</span></div><div style={{fontSize:11,color:"#334155",marginTop:1}}>{item.type}</div><div style={{fontSize:10,color:"#64748b"}}>{item.who}</div></div></button>)})}<button onClick={()=>{const c={...d.contentDone};c[key]={};up("contentDone",c)}} style={S.rst}>Reset</button></div>)}

// === PRAYER ===
function Pray({d,up,wk}){const [txt,setTxt]=useState("");const [typ,setTyp]=useState("personal");const pf=PRAYER_FOCUS[(new Date().getDay()||7)-1]||PRAYER_FOCUS[0];const add=()=>{if(!txt.trim())return;up("prayerLog",[...d.prayerLog,{text:txt.trim(),type:typ,date:new Date().toLocaleDateString(),week:wk,id:Date.now()}]);setTxt("")};const rm=id=>up("prayerLog",d.prayerLog.filter(p=>p.id!==id));return(<div style={S.pg}><h2 style={S.ti}>Prayer & Devotion</h2><div style={{background:"linear-gradient(135deg,#065f46,#059669)",borderRadius:14,padding:14,display:"flex",alignItems:"center",gap:12,marginBottom:14}}><span style={{fontSize:28}}>{pf.icon}</span><div><div style={{fontSize:10,color:"#a7f3d0",fontWeight:600}}>TODAY ({pf.day.toUpperCase()})</div><div style={{fontSize:13,color:"#fff",fontWeight:600,marginTop:2}}>{pf.focus}</div></div></div><h3 style={S.sec}>Daily Guide</h3>{PRAYER_FOCUS.map(p=>(<div key={p.day} style={{display:"flex",alignItems:"center",gap:8,padding:"7px 10px",borderRadius:8,marginBottom:3,background:p.day===pf.day?"#f0fdf4":"#fff",border:p.day===pf.day?"1px solid #bbf7d0":"1px solid #f1f5f9"}}><span style={{fontSize:14}}>{p.icon}</span><div style={{flex:1}}><span style={{fontWeight:700,fontSize:10,color:p.day===pf.day?"#059669":"#94a3b8"}}>{p.day}</span><p style={{margin:0,fontSize:11,color:"#334155"}}>{p.focus}</p></div></div>))}<h3 style={{...S.sec,marginTop:16}}>Log a Prayer</h3><div style={{display:"flex",gap:5,marginBottom:8,flexWrap:"wrap"}}>{["personal","team","church","answered"].map(t=>(<button key={t} onClick={()=>setTyp(t)} style={S.pill(typ===t,"#065f46")}>{t==="answered"?"🎉 Answered":t[0].toUpperCase()+t.slice(1)}</button>))}</div><div style={{display:"flex",gap:6}}><input value={txt} onChange={e=>setTxt(e.target.value)} placeholder="Prayer request..." style={S.inp} onKeyDown={e=>e.key==="Enter"&&add()}/><button onClick={add} style={S.abtn}>{Ic.plus}</button></div><div style={{marginTop:10}}>{d.prayerLog.slice().reverse().slice(0,15).map(p=>(<div key={p.id} style={{display:"flex",alignItems:"flex-start",gap:8,padding:"7px 10px",background:"#fff",borderRadius:8,border:"1px solid #e2e8f0",marginBottom:3,borderLeft:p.type==="answered"?"3px solid #059669":p.type==="team"?"3px solid #2563EB":"3px solid #e2e8f0"}}><div style={{flex:1}}><span style={{fontSize:9,color:"#94a3b8"}}>{p.date} {"\u00b7"} {p.type}</span><p style={{margin:"1px 0 0",fontSize:11,color:"#334155"}}>{p.text}</p></div><button onClick={()=>rm(p.id)} style={S.rm}>{Ic.x}</button></div>))}</div></div>)}

// === ATTENDANCE ===
function Att({d,up,isPastor}){
  var view=useState("mark");
  var selEvent=useState(null);
  var customName=useState("");
  var customDate=useState(new Date().toISOString().split("T")[0]);
  var search=useState("");

  var nameSet={};
  ALL_MEMBERS.forEach(function(m){nameSet[m.name]=true});
  (d.users||[]).forEach(function(u){nameSet[u.name]=true});
  var allNames=Object.keys(nameSet);

  var followups=d.followups||[];
  var attData=d.attendance||{};

  // Build event list: common events + activities
  var commonEvents=[
    {id:"sunday",name:"Sunday Service",icon:"\u26EA",color:"#2563EB",recurring:true},
    {id:"worship-night",name:"Worship Night",icon:"\uD83C\uDFB5",color:"#7C3AED",recurring:true},
    {id:"wednesday-prayer",name:"Wednesday Prayer",icon:"\uD83D\uDE4F",color:"#059669",recurring:true}
  ];
  var activityEvents=(d.activities||[]).filter(function(a){return!a.done}).map(function(a){
    return{id:"act-"+a.id,name:a.title,icon:"\uD83D\uDCCB",color:"#EA580C",recurring:false,activityId:a.id};
  });
  var allEvents=commonEvents.concat(activityEvents);

  // Current event key for attendance
  var evKey=selEvent[0]?(selEvent[0].id+"-"+customDate[0]):"";
  var att=evKey?attData[evKey]||{}:{};
  var pr=Object.values(att).filter(Boolean).length;

  function tog(name){
    if(!evKey)return;
    var a=Object.assign({},attData);
    if(!a[evKey])a[evKey]={};
    a[evKey]=Object.assign({},a[evKey]);
    a[evKey][name]=!a[evKey][name];
    up("attendance",a);
  }
  function clearAtt(){
    if(!evKey)return;
    var a=Object.assign({},attData);
    a[evKey]={};
    up("attendance",a);
  }
  function addCustomEvent(){
    if(!customName[0].trim())return;
    selEvent[1]({id:"custom-"+Date.now(),name:customName[0].trim(),icon:"\uD83D\uDCCC",color:"#64748b",recurring:false});
    customName[1]("");
  }

  var absent=allNames.filter(function(n){return!att[n]});

  // Summary: get all attendance keys and parse event info
  var allKeys=Object.keys(attData);
  function getMemberStats(name){
    var total=0,present=0;
    allKeys.forEach(function(k){if(attData[k]){total++;if(attData[k][name])present++}});
    return{total:total,present:present,pct:total?Math.round((present/total)*100):0};
  }
  function getEventStats(){
    var stats={};
    allKeys.forEach(function(k){
      var parts=k.split("-");
      var evId=parts[0];
      if(parts[0]==="worship"||parts[0]==="wednesday"||parts[0]==="act"||parts[0]==="custom"){evId=parts[0]+"-"+parts[1]}
      if(!stats[evId])stats[evId]={name:evId,count:0,totalPresent:0};
      stats[evId].count++;
      stats[evId].totalPresent+=Object.values(attData[k]||{}).filter(Boolean).length;
    });
    return Object.values(stats);
  }

  function addFollowup(name){
    var fu=followups.concat([{id:Date.now(),name:name,date:new Date().toLocaleDateString(),event:selEvent[0]?selEvent[0].name:"",status:"called",note:""}]);
    up("followups",fu);
  }
  function updateFollowup(id,field,val){up("followups",followups.map(function(f){return f.id===id?Object.assign({},f,{[field]:val}):f}))}
  function removeFollowup(id){up("followups",followups.filter(function(f){return f.id!==id}))}

  var tabSt=function(active){return{flex:1,padding:"8px 4px",background:active?"#2563EB":"transparent",border:"none",borderRadius:8,fontSize:11,fontWeight:700,color:active?"#fff":"#64748b",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}};

  // Pre-compute quick date buttons for recurring events
  var quickDates=[];
  if(selEvent[0]&&selEvent[0].recurring){
    var today=new Date();
    for(var qi=0;qi<4;qi++){
      var dd=new Date(today);
      dd.setDate(dd.getDate()-qi*7);
      if(selEvent[0].id==="sunday"){while(dd.getDay()!==0)dd.setDate(dd.getDate()-1)}
      else if(selEvent[0].id==="wednesday-prayer"){while(dd.getDay()!==3)dd.setDate(dd.getDate()-1)}
      var ds=dd.toISOString().split("T")[0];
      var qlabel=dd.toLocaleDateString("en-IN",{day:"numeric",month:"short"});
      var qhasData=!!attData[(selEvent[0]?selEvent[0].id:"")+"-"+ds];
      quickDates.push({ds:ds,label:qlabel,hasData:qhasData,isSelected:ds===customDate[0]});
    }
  }

  // Pre-compute past records for selected event
  var pastRecords=[];
  if(selEvent[0]){
    var prefix=selEvent[0].id+"-";
    pastRecords=allKeys.filter(function(k){return k.indexOf(prefix)===0&&k!==evKey}).sort().reverse().slice(0,5).map(function(k){
      var dateStr=k.replace(prefix,"");
      var rec=attData[k]||{};
      var cnt=Object.values(rec).filter(Boolean).length;
      var formatted="";
      try{formatted=new Date(dateStr+"T00:00:00").toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short"})}catch(e){formatted=dateStr}
      return{key:k,dateStr:dateStr,cnt:cnt,formatted:formatted};
    });
  }

  return(<div style={S.pg}>
    <h2 style={S.ti}>Attendance</h2>
    {isPastor&&<div style={{display:"flex",gap:4,marginBottom:12,background:"#f1f5f9",borderRadius:10,padding:3}}>
      <button onClick={function(){view[1]("mark")}} style={tabSt(view[0]==="mark")}>Mark</button>
      <button onClick={function(){view[1]("summary")}} style={tabSt(view[0]==="summary")}>Summary</button>
      <button onClick={function(){view[1]("followup")}} style={tabSt(view[0]==="followup")}>Follow Up</button>
    </div>}

    {view[0]==="mark"&&<>
      {/* EVENT SELECTOR */}
      {!selEvent[0]?<div>
        <h3 style={S.sec}>Select Event</h3>
        <div style={{display:"flex",flexDirection:"column",gap:6,marginBottom:12}}>
          {allEvents.map(function(ev){return(
            <button key={ev.id} className="kb-card" onClick={function(){selEvent[1](ev)}} style={{display:"flex",alignItems:"center",gap:12,padding:"12px 14px",background:"#fff",borderRadius:12,border:"1px solid #e2e8f0",borderLeft:"4px solid "+ev.color,cursor:"pointer",fontFamily:"'DM Sans',sans-serif",textAlign:"left",width:"100%"}}>
              <span style={{fontSize:20}}>{ev.icon}</span>
              <div style={{flex:1}}>
                <div style={{fontSize:13,fontWeight:700,color:"#0f172a"}}>{ev.name}</div>
                <div style={{fontSize:10,color:"#94a3b8"}}>{ev.recurring?"Regular event":"From Activities"}</div>
              </div>
              {Ic.chev}
            </button>
          )})}
        </div>

        {/* Custom event */}
        <h3 style={S.sec}>Or Add Custom Event</h3>
        <div style={{display:"flex",gap:6}}>
          <input value={customName[0]} onChange={function(e){customName[1](e.target.value)}} placeholder="Event name (e.g. Youth Camp)" style={{...S.inp,fontSize:12}} onKeyDown={function(e){if(e.key==="Enter")addCustomEvent()}}/>
          <button onClick={addCustomEvent} style={{...S.abtn,background:"#059669"}}>{Ic.plus}</button>
        </div>
      </div>

      :<div>
        {/* SELECTED EVENT - MARK ATTENDANCE */}
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
          <button onClick={function(){selEvent[1](null)}} style={{background:"#f1f5f9",border:"none",borderRadius:8,padding:"6px 10px",cursor:"pointer",fontSize:11,fontWeight:600,color:"#64748b",fontFamily:"'DM Sans',sans-serif"}}>{"< Back"}</button>
          <div style={{flex:1}}>
            <div style={{fontSize:14,fontWeight:700,color:"#0f172a"}}>{selEvent[0].icon} {selEvent[0].name}</div>
          </div>
        </div>

        {/* DATE SELECTOR - prominent */}
        <div style={{background:"#fff",borderRadius:12,border:"1px solid #e2e8f0",padding:12,marginBottom:12}}>
          <label style={{fontSize:10,fontWeight:700,color:"#334155",display:"block",marginBottom:6,textTransform:"uppercase",letterSpacing:0.5}}>Attendance for</label>
          <div style={{display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"}}>
            <input type="date" value={customDate[0]} onChange={function(e){customDate[1](e.target.value)}} style={{...S.inp,flex:"none",width:"auto",fontSize:13,fontWeight:700,padding:"10px 14px"}}/>
            <span style={{fontSize:12,color:"#64748b"}}>{new Date(customDate[0]+"T00:00:00").toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"short",year:"numeric"})}</span>
          </div>
          {/* Quick date buttons for recurring events */}
          {selEvent[0].recurring&&quickDates.length>0&&<div style={{display:"flex",gap:4,marginTop:8,flexWrap:"wrap"}}>
            {quickDates.map(function(b){return(
              <button key={b.ds} onClick={function(){customDate[1](b.ds)}} style={{padding:"5px 10px",borderRadius:8,fontSize:10,fontWeight:600,border:b.isSelected?"2px solid #2563EB":"1px solid #e2e8f0",background:b.isSelected?"#eff6ff":b.hasData?"#f0fdf4":"#fff",color:b.isSelected?"#2563EB":b.hasData?"#059669":"#64748b",cursor:"pointer",fontFamily:"'DM Sans',sans-serif",position:"relative"}}>
                {b.label}
                {b.hasData&&!b.isSelected&&<span style={{position:"absolute",top:-2,right:-2,width:6,height:6,borderRadius:"50%",background:"#059669"}}></span>}
              </button>
            )})}
          </div>}
        </div>

        {/* Already marked indicator */}
        {pr>0&&<div className="kb-fade" style={{padding:"8px 12px",background:"#eff6ff",border:"1px solid #bfdbfe",borderRadius:8,marginBottom:10,fontSize:11,color:"#2563EB",fontWeight:600}}>{pr}/{allNames.length} already marked for this date</div>}

        <div style={S.prog}><div style={S.pf((pr/allNames.length)*100,"#2563EB")}/></div>
        <p style={{fontSize:11,color:"#64748b",marginBottom:6}}>{pr}/{allNames.length} present</p>

        {/* SEARCH BAR */}
        <div style={{position:"relative",marginBottom:10}}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" style={{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)"}}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input value={search[0]} onChange={function(e){search[1](e.target.value)}} placeholder="Search members..." style={{width:"100%",padding:"9px 14px 9px 34px",border:"1px solid #e2e8f0",borderRadius:10,fontSize:12,fontFamily:"'DM Sans',sans-serif",outline:"none",background:"#fff",boxSizing:"border-box"}}/>
        </div>

        {/* MEMBER LIST */}
        {allNames.filter(function(name){
          if(!search[0])return true;
          return name.toLowerCase().indexOf(search[0].toLowerCase())>=0;
        }).map(function(name){var on=att[name];return(
          <button key={name} onClick={function(){tog(name)}} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 12px",borderRadius:8,border:"1px solid "+(on?"#bfdbfe":"#e2e8f0"),marginBottom:4,width:"100%",textAlign:"left",cursor:"pointer",fontFamily:"'DM Sans',sans-serif",background:on?"#eff6ff":"#fff"}}>
            <div style={S.cb(on,"#2563EB")}>{on&&<span style={{color:"#fff"}}>{Ic.check}</span>}</div>
            <span style={{fontWeight:600,fontSize:13,color:"#0f172a"}}>{name}</span>
            {on&&<span style={{marginLeft:"auto",fontSize:10,color:"#2563EB",fontWeight:600}}>Present</span>}
          </button>
        )})}
        <div style={{display:"flex",gap:6,marginTop:8}}>
          <button onClick={function(){allNames.forEach(function(n){if(!att[n])tog(n)})}} style={{flex:1,padding:"8px",background:"#059669",color:"#fff",border:"none",borderRadius:8,fontSize:11,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Mark All Present</button>
          <button onClick={clearAtt} style={{flex:1,padding:"8px",background:"#fff",color:"#dc2626",border:"1px solid #fecaca",borderRadius:8,fontSize:11,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Clear All</button>
        </div>

        {/* PAST RECORDS for this event */}
        {pastRecords.length>0&&<div style={{marginTop:16}}>
          <h3 style={S.sec}>Past Records - {selEvent[0].name}</h3>
          {pastRecords.map(function(pr2){return(
            <button key={pr2.key} onClick={function(){customDate[1](pr2.dateStr)}} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 12px",background:"#fff",borderRadius:10,border:"1px solid #e2e8f0",marginBottom:4,width:"100%",textAlign:"left",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>
              <div style={{fontSize:12,fontWeight:600,color:"#0f172a",flex:1}}>{pr2.formatted}</div>
              <div style={{fontSize:11,color:"#2563EB",fontWeight:600}}>{pr2.cnt}/{allNames.length}</div>
              <div style={{width:40}}><div style={{height:4,background:"#e2e8f0",borderRadius:2}}><div style={{height:4,background:"#2563EB",borderRadius:2,width:Math.round((pr2.cnt/allNames.length)*100)+"%"}}/></div></div>
            </button>
          )})}
        </div>}
      </div>}
    </>}

    {view[0]==="summary"&&isPastor&&<>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:14}}>
        <div style={{...S.cd,textAlign:"center",padding:12}}><div style={{fontSize:20,fontWeight:700,color:"#2563EB"}}>{allKeys.length}</div><div style={{fontSize:10,color:"#64748b"}}>Total Records</div></div>
        <div style={{...S.cd,textAlign:"center",padding:12}}><div style={{fontSize:20,fontWeight:700,color:"#059669"}}>{allNames.length}</div><div style={{fontSize:10,color:"#64748b"}}>Total Members</div></div>
      </div>

      <h3 style={S.sec}>By Event</h3>
      {getEventStats().map(function(es){return(
        <div key={es.name} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 12px",background:"#fff",borderRadius:10,border:"1px solid #e2e8f0",marginBottom:4}}>
          <div style={{flex:1}}><div style={{fontSize:12,fontWeight:700,color:"#0f172a"}}>{es.name}</div><div style={{fontSize:10,color:"#64748b"}}>{es.count} sessions, avg {es.count?Math.round(es.totalPresent/es.count):0} present</div></div>
        </div>
      )})}

      <h3 style={S.sec}>By Member</h3>
      {allNames.map(function(name){var s=getMemberStats(name);return(
        <div key={name} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 12px",background:"#fff",borderRadius:10,border:"1px solid #e2e8f0",marginBottom:4}}>
          <div style={{width:28,height:28,borderRadius:"50%",background:s.pct>=75?"#059669":s.pct>=50?"#d97706":"#dc2626",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:11,fontWeight:700}}>{s.pct}%</div>
          <div style={{flex:1}}><div style={{fontSize:12,fontWeight:700,color:"#0f172a"}}>{name}</div><div style={{fontSize:10,color:"#64748b"}}>{s.present}/{s.total} attended</div></div>
          <div style={{width:60}}><div style={{height:4,background:"#e2e8f0",borderRadius:2}}><div style={{height:4,background:s.pct>=75?"#059669":s.pct>=50?"#d97706":"#dc2626",borderRadius:2,width:s.pct+"%"}}/></div></div>
        </div>
      )})}
    </>}

    {view[0]==="followup"&&isPastor&&<>
      {selEvent[0]&&evKey?<>
        <h3 style={S.sec}>Absent - {selEvent[0].name} ({absent.length})</h3>
        {absent.length===0&&<p style={{fontSize:12,color:"#059669",padding:12,textAlign:"center"}}>Everyone is present! {"\uD83C\uDF89"}</p>}
        {absent.map(function(name){var alreadyCalled=followups.find(function(f){return f.name===name&&f.event===selEvent[0].name});return(
          <div key={name} style={{display:"flex",alignItems:"center",gap:10,padding:"10px 12px",background:"#fff",borderRadius:10,border:"1px solid #e2e8f0",marginBottom:4,borderLeft:alreadyCalled?"3px solid #059669":"3px solid #dc2626"}}>
            <div style={{flex:1}}><div style={{fontSize:12,fontWeight:700,color:"#0f172a"}}>{name}</div>{alreadyCalled&&<div style={{fontSize:10,color:"#059669",fontWeight:600}}>{"\u2705"} {alreadyCalled.status==="responded"?"Responded":alreadyCalled.status==="no-answer"?"No answer":"Called"}</div>}</div>
            {!alreadyCalled&&<button onClick={function(){addFollowup(name)}} style={{padding:"5px 12px",background:"#2563EB",color:"#fff",border:"none",borderRadius:8,fontSize:11,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Call</button>}
          </div>
        )})}
      </>:<p style={{fontSize:12,color:"#94a3b8",textAlign:"center",padding:20}}>Select an event in the "Mark" tab first to see absent members.</p>}

      <h3 style={{...S.sec,marginTop:16}}>Follow-Up Log</h3>
      {followups.length===0&&<p style={{fontSize:12,color:"#94a3b8",textAlign:"center"}}>No follow-ups recorded yet.</p>}
      {followups.slice().reverse().slice(0,20).map(function(f){return(
        <div key={f.id} style={{padding:"10px 12px",background:"#fff",borderRadius:10,border:"1px solid #e2e8f0",marginBottom:4,borderLeft:f.status==="responded"?"3px solid #059669":f.status==="no-answer"?"3px solid #d97706":"3px solid #2563EB"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div><div style={{fontSize:12,fontWeight:700,color:"#0f172a"}}>{f.name}</div><div style={{fontSize:10,color:"#64748b"}}>{f.date}{f.event?" \u00b7 "+f.event:""}</div></div>
            <div style={{display:"flex",gap:3}}>
              {["called","responded","no-answer"].map(function(s){return(
                <button key={s} onClick={function(){updateFollowup(f.id,"status",s)}} style={{padding:"2px 8px",borderRadius:6,fontSize:9,fontWeight:600,border:f.status===s?"1px solid #2563EB":"1px solid #e2e8f0",color:f.status===s?"#fff":"#64748b",background:f.status===s?(s==="responded"?"#059669":s==="no-answer"?"#d97706":"#2563EB"):"#f8fafc",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>{s==="no-answer"?"No Answer":s[0].toUpperCase()+s.slice(1)}</button>
              )})}
              <button onClick={function(){removeFollowup(f.id)}} style={S.rm}>{Ic.x}</button>
            </div>
          </div>
          <input value={f.note||""} onChange={function(e){updateFollowup(f.id,"note",e.target.value)}} placeholder="Add note..." style={{...S.inp,width:"100%",fontSize:11,marginTop:6,padding:"5px 10px",boxSizing:"border-box",flex:"none"}}/>
        </div>
      )})}
    </>}
  </div>);
}

// === NOTES ===
function Nts({d,up}){
  var tasks=useState(d.tasks||[]);
  var nw=useState("");
  var DEFAULT_RHYTHM=[
    {d:"Mon",t:"Review attendance. Check social posts."},
    {d:"Tue",t:"Plan Wed prayer with Samson."},
    {d:"Wed",t:"Join prayer. Check follow-ups."},
    {d:"Thu",t:"Worship rehearsal."},
    {d:"Fri",t:"Confirm slides, posts, equipment."},
    {d:"Sat",t:"Rest. Confirm Sunday roles."},
    {d:"Sun",t:"Pre-service prayer. Service. Lead check-in."}
  ];
  var rhythm=d.weeklyRhythm||DEFAULT_RHYTHM;
  var editingDay=useState(null);
  var editText=useState("");

  function add(){if(!nw[0].trim())return;var t=tasks[0].concat([{text:nw[0].trim(),done:false,id:Date.now()}]);tasks[1](t);up("tasks",t);nw[1]("")}
  function tog(id){var t=tasks[0].map(function(x){return x.id===id?Object.assign({},x,{done:!x.done}):x});tasks[1](t);up("tasks",t)}
  function rm(id){var t=tasks[0].filter(function(x){return x.id!==id});tasks[1](t);up("tasks",t)}

  function startEdit(day){editingDay[1](day);var found=rhythm.find(function(r){return r.d===day});editText[1](found?found.t:"")}
  function saveEdit(){
    if(!editingDay[0])return;
    var updated=rhythm.map(function(r){return r.d===editingDay[0]?{d:r.d,t:editText[0].trim()||r.t}:r});
    up("weeklyRhythm",updated);
    editingDay[1](null);
    editText[1]("");
  }
  function resetRhythm(){up("weeklyRhythm",null)}

  return(<div style={S.pg}>
    <h2 style={S.ti}>{"Pastor's Notes"}</h2>

    <h3 style={S.sec}>Tasks</h3>
    <div style={{display:"flex",gap:6,marginBottom:10}}>
      <input value={nw[0]} onChange={function(e){nw[1](e.target.value)}} placeholder="Add a task..." style={S.inp} onKeyDown={function(e){if(e.key==="Enter")add()}}/>
      <button onClick={add} style={S.abtn}>{Ic.plus}</button>
    </div>
    {tasks[0].map(function(t){return(
      <div key={t.id} style={{display:"flex",alignItems:"center",gap:8,padding:"5px 0",opacity:t.done?0.4:1}}>
        <button onClick={function(){tog(t.id)}} style={Object.assign({},S.cb(t.done),{cursor:"pointer"})}>{t.done&&<span style={{color:"#fff"}}>{Ic.check}</span>}</button>
        <span style={{flex:1,fontSize:12,textDecoration:t.done?"line-through":"none",color:"#334155"}}>{t.text}</span>
        <button onClick={function(){rm(t.id)}} style={S.rm}>{Ic.x}</button>
      </div>
    )})}

    <h3 style={{...S.sec,marginTop:16}}>Journal</h3>
    <textarea value={d.notes} onChange={function(e){up("notes",e.target.value)}} placeholder="Observations, ideas, follow-ups..." style={{width:"100%",minHeight:100,padding:12,border:"1px solid #e2e8f0",borderRadius:12,fontSize:12,fontFamily:"'DM Sans',sans-serif",resize:"vertical",outline:"none",boxSizing:"border-box",background:"#fff"}}/>

    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:16}}>
      <h3 style={{...S.sec,margin:0}}>Weekly Rhythm</h3>
      {d.weeklyRhythm&&<button onClick={resetRhythm} style={{fontSize:9,color:"#64748b",background:"#f1f5f9",border:"none",borderRadius:6,padding:"3px 8px",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Reset to Default</button>}
    </div>
    <p style={{fontSize:10,color:"#94a3b8",margin:"4px 0 8px"}}>Tap any day to edit</p>

    {rhythm.map(function(r){
      var isEditing=editingDay[0]===r.d;
      return(
        <div key={r.d} style={{display:"flex",gap:8,padding:"8px 10px",background:isEditing?"#eff6ff":"#fff",borderRadius:8,border:isEditing?"2px solid #2563EB":"1px solid #f1f5f9",marginBottom:4,alignItems:"flex-start"}}>
          <span style={{fontWeight:700,fontSize:11,color:"#2563EB",minWidth:32,paddingTop:2}}>{r.d}</span>
          {isEditing?
            <div style={{flex:1,display:"flex",gap:4}}>
              <input value={editText[0]} onChange={function(e){editText[1](e.target.value)}} onKeyDown={function(e){if(e.key==="Enter")saveEdit()}} style={{...S.inp,fontSize:11,padding:"5px 10px"}} autoFocus/>
              <button onClick={saveEdit} style={{padding:"4px 10px",background:"#2563EB",color:"#fff",border:"none",borderRadius:6,fontSize:10,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans',sans-serif",whiteSpace:"nowrap"}}>Save</button>
              <button onClick={function(){editingDay[1](null)}} style={{padding:"4px 8px",background:"#f1f5f9",color:"#64748b",border:"none",borderRadius:6,fontSize:10,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>X</button>
            </div>
          :
            <span onClick={function(){startEdit(r.d)}} style={{flex:1,fontSize:11,color:"#475569",cursor:"pointer",paddingTop:2}}>{r.t}</span>
          }
        </div>
      );
    })}
  </div>);
}

// === BIG BROTHER / BIG SISTER ===
const WEEKLY_CHECKLIST=[
  {id:"call",label:"Called / texted the teen this week",icon:"📞"},
  {id:"meet",label:"Met in person (coffee, hangout, church)",icon:"🤝"},
  {id:"pray",label:"Prayed together with the teen",icon:"🙏"},
  {id:"bible",label:"Shared a scripture or devotional",icon:"📖"},
  {id:"listen",label:"Listened to their struggles / joys",icon:"👂"},
  {id:"school",label:"Asked about school / work / life",icon:"🎓"},
  {id:"encourage",label:"Gave encouragement or advice",icon:"💪"},
  {id:"invite",label:"Invited them to a church event",icon:"\u26EA"},
];

function BBBS({d,up,isPastor,user}){
  const pairs=d.bbbs||[];
  const teensList=d.teens||[];
  const [showForm,setShowForm]=useState(false);
  const [mentor,setMentor]=useState("");
  const [teen,setTeen]=useState("");
  const [teenAge,setTeenAge]=useState("");
  const [notes,setNotes]=useState("");
  const [expanded,setExpanded]=useState(null);
  const [tab,setTab]=useState("checklist");
  const [progText,setProgText]=useState("");
  const [prayText,setPrayText]=useState("");
  const [pastorPrayed,setPastorPrayed]=useState({});
  const [showAddTeen,setShowAddTeen]=useState(false);
  const [newTeenName,setNewTeenName]=useState("");
  const [newTeenAge,setNewTeenAge]=useState("");

  const addNewTeen=()=>{if(!newTeenName.trim())return;up("teens",[...teensList,{name:newTeenName.trim(),age:newTeenAge.trim(),id:Date.now()}]);setNewTeenName("");setNewTeenAge("");setShowAddTeen(false);setTeen(newTeenName.trim())};
  const removeTeen=id=>up("teens",teensList.filter(t=>t.id!==id));

  const create=()=>{
    if(!mentor||!teen)return;
    const teenObj=teensList.find(t=>t.name===teen);
    const pair={id:Date.now(),mentor,teen,teenAge:teenObj?.age||teenAge,notes:notes.trim(),weeklyChecks:{},progressLogs:[],prayerPoints:[],created:new Date().toLocaleDateString()};
    up("bbbs",[...pairs,pair]);
    setMentor("");setTeen("");setTeenAge("");setNotes("");setShowForm(false);
  };
  const remove=id=>up("bbbs",pairs.filter(p=>p.id!==id));
  const visiblePairs=isPastor?pairs:pairs.filter(p=>p.mentor===user?.name);
  const mentorColor=name=>{const t=TEAMS.find(t=>t.members.includes(name));return t?t.color:"#64748b"};

  // Weekly checklist - keyed by week string
  const weekKey=()=>{const n=new Date();const s=new Date(n.getFullYear(),0,1);return "wk-"+Math.ceil(((n-s)/86400000+s.getDay()+1)/7)};
  const wk=weekKey();

  const toggleCheck=(pairId,checkId)=>{
    const updated=pairs.map(p=>{
      if(p.id===pairId){
        const wc={...p.weeklyChecks};
        if(!wc[wk])wc[wk]={};
        wc[wk][checkId]=!wc[wk][checkId];
        return {...p,weeklyChecks:wc};
      }
      return p;
    });
    up("bbbs",updated);
  };

  const getChecks=(pair)=>(pair.weeklyChecks||{})[wk]||{};
  const getCheckCount=(pair)=>Object.values(getChecks(pair)).filter(Boolean).length;

  // Progress logs
  const addProgress=(pairId)=>{
    if(!progText.trim())return;
    const updated=pairs.map(p=>p.id===pairId?{...p,progressLogs:[...p.progressLogs,{id:Date.now(),text:progText.trim(),date:new Date().toLocaleDateString(),by:isPastor?"Pastor":(user?.name||"Member")}]}:p);
    up("bbbs",updated);setProgText("");
  };

  // Prayer points
  const addPrayer=(pairId)=>{
    if(!prayText.trim())return;
    const updated=pairs.map(p=>p.id===pairId?{...p,prayerPoints:[...p.prayerPoints,{id:Date.now(),text:prayText.trim(),date:new Date().toLocaleDateString(),by:isPastor?"Pastor":(user?.name||"Member"),answered:false}]}:p);
    up("bbbs",updated);setPrayText("");
  };

  const toggleAnswered=(pairId,prayId)=>{
    const updated=pairs.map(p=>p.id===pairId?{...p,prayerPoints:p.prayerPoints.map(pr=>pr.id===prayId?{...pr,answered:!pr.answered}:pr)}:p);
    up("bbbs",updated);
  };

  const removePrayer=(pairId,prayId)=>{
    const updated=pairs.map(p=>p.id===pairId?{...p,prayerPoints:p.prayerPoints.filter(pr=>pr.id!==prayId)}:p);
    up("bbbs",updated);
  };

  const removeProgress=(pairId,logId)=>{
    const updated=pairs.map(p=>p.id===pairId?{...p,progressLogs:p.progressLogs.filter(l=>l.id!==logId)}:p);
    up("bbbs",updated);
  };

  // Pastor "I prayed" tracker
  const markPrayed=(pairId)=>{
    setPastorPrayed(prev=>({...prev,[pairId+"-"+wk]:true}));
  };

  const tabStyle=(active,color)=>({flex:1,padding:"8px 4px",background:active?color:"transparent",border:"none",borderRadius:8,fontSize:11,fontWeight:700,color:active?"#fff":"#64748b",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"});

  return(
    <div style={S.pg}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
        <h2 style={{...S.ti,margin:0}}>Big Bro / Big Sis</h2>
        {isPastor&&<button onClick={()=>setShowForm(!showForm)} style={{padding:"7px 14px",background:showForm?"#dc2626":"#7C3AED",color:"#fff",border:"none",borderRadius:10,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>{showForm?"Cancel":"+ Pair"}</button>}
      </div>
      <p style={{fontSize:12,color:"#64748b",margin:"4px 0 14px"}}>{isPastor?"Assign teens to mentors. Track weekly follow-ups & pray.":"Your assigned teens \u2014 complete weekly checklist & update progress."}</p>

      {/* CREATE FORM */}
      {showForm&&isPastor&&(
        <div style={{background:"#fff",borderRadius:14,border:"2px solid #7C3AED",padding:16,marginBottom:16}}>
          <h3 style={{fontSize:14,fontWeight:700,color:"#0f172a",margin:"0 0 12px"}}>Create New Pairing</h3>
          <p style={{fontSize:11,fontWeight:700,color:"#334155",margin:"0 0 6px"}}>Select Big Bro / Big Sis:</p>
          <div style={{display:"flex",gap:4,flexWrap:"wrap",marginBottom:12}}>
            {ALL_MEMBERS.filter(m=>m.teams.length>0).map(m=>{const on=mentor===m.name;return(<button key={m.name} onClick={()=>setMentor(m.name)} style={{padding:"5px 11px",borderRadius:16,fontSize:11,fontWeight:600,border:on?"2px solid #7C3AED":"1px solid #e2e8f0",color:on?"#fff":"#475569",background:on?"#7C3AED":"#f8fafc",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>{m.name}</button>)})}
          </div>
          <p style={{fontSize:11,fontWeight:700,color:"#334155",margin:"0 0 6px"}}>Select Teen:</p>
          <div style={{display:"flex",gap:4,flexWrap:"wrap",marginBottom:4}}>
            {teensList.map(t=>{const on=teen===t.name;return(<button key={t.id} onClick={()=>{setTeen(t.name);setTeenAge(t.age||"")}} style={{padding:"5px 11px",borderRadius:16,fontSize:11,fontWeight:600,border:on?"2px solid #059669":"1px solid #e2e8f0",color:on?"#fff":"#475569",background:on?"#059669":"#f8fafc",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>{t.name}{t.age?" ("+t.age+")":""}</button>)})}
            <button onClick={()=>setShowAddTeen(!showAddTeen)} style={{padding:"5px 11px",borderRadius:16,fontSize:11,fontWeight:600,border:"1px dashed #7C3AED",color:"#7C3AED",background:"#faf5ff",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>{showAddTeen?"Cancel":"+ New Teen"}</button>
          </div>
          {showAddTeen&&<div style={{padding:10,background:"#faf5ff",borderRadius:10,border:"1px solid #e9d5ff",marginBottom:8}}>
            <div style={{display:"flex",gap:6}}>
              <input value={newTeenName} onChange={e=>setNewTeenName(e.target.value)} placeholder="Teen's name" style={{...S.inp,fontSize:12,flex:2}}/>
              <input value={newTeenAge} onChange={e=>setNewTeenAge(e.target.value)} placeholder="Age" style={{...S.inp,fontSize:12,flex:1}}/>
              <button onClick={addNewTeen} style={{...S.abtn,width:34,height:34,background:"#7C3AED"}}>{Ic.plus}</button>
            </div>
          </div>}
          {teensList.length===0&&!showAddTeen&&<p style={{fontSize:10,color:"#94a3b8",marginBottom:8}}>No teens added yet. Tap "+ New Teen" to add.</p>}
          {isPastor&&teensList.length>0&&<div style={{marginBottom:8}}><button onClick={()=>setShowAddTeen(!showAddTeen)} style={{fontSize:10,color:"#7C3AED",background:"none",border:"none",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Manage teens ({teensList.length})</button>
            {showAddTeen&&<div style={{marginTop:4}}>{teensList.map(t=>(<div key={t.id} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"3px 0"}}><span style={{fontSize:11,color:"#334155"}}>{t.name} {t.age?"("+t.age+")":""}</span><button onClick={()=>removeTeen(t.id)} style={S.rm}>{Ic.x}</button></div>))}</div>}
          </div>}
          <p style={{fontSize:11,fontWeight:700,color:"#334155",margin:"0 0 4px"}}>Notes (optional):</p>
          <textarea value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Interests, needs, initial observations..." style={{width:"100%",padding:"9px 14px",border:"1px solid #e2e8f0",borderRadius:10,fontSize:13,fontFamily:"'DM Sans',sans-serif",outline:"none",resize:"vertical",minHeight:50,boxSizing:"border-box",marginBottom:12}}/>
          <button onClick={create} disabled={!mentor||!teen} style={{width:"100%",padding:"10px",background:(!mentor||!teen)?"#cbd5e1":"#7C3AED",color:"#fff",border:"none",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>{mentor&&teen?"Pair "+mentor+" with "+teen:"Select mentor & select teen"}</button>
        </div>
      )}

      {/* EMPTY STATE */}
      {visiblePairs.length===0&&!showForm&&(
        <div style={{...S.cd,textAlign:"center",padding:28}}>
          <span style={{fontSize:36}}>{"👫"}</span>
          <p style={{fontSize:13,color:"#64748b",margin:"10px 0 0"}}>{isPastor?"No pairings yet. Tap \"+ Pair\" to start.":"No teens assigned to you yet."}</p>
        </div>
      )}

      {/* PAIRINGS */}
      {visiblePairs.map(pair=>{
        const mc=mentorColor(pair.mentor);
        const isOpen=expanded===pair.id;
        const checks=getChecks(pair);
        const checkCount=getCheckCount(pair);
        const activePrayers=pair.prayerPoints.filter(p=>!p.answered);
        const answeredPrayers=pair.prayerPoints.filter(p=>p.answered);

        return(
          <div key={pair.id} style={{background:"#fff",borderRadius:14,border:isOpen?"2px solid "+mc:"1px solid #e2e8f0",marginBottom:10,overflow:"hidden"}}>
            {/* HEADER */}
            <button onClick={()=>{setExpanded(isOpen?null:pair.id);setTab("checklist")}} style={{width:"100%",padding:"14px 16px",borderLeft:"4px solid "+mc,background:"#fff",border:"none",borderBottom:"1px solid #f1f5f9",cursor:"pointer",fontFamily:"'DM Sans',sans-serif",textAlign:"left",borderLeftStyle:"solid",borderLeftWidth:4,borderLeftColor:mc}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div style={{display:"flex",alignItems:"center",gap:10}}>
                  <div style={{width:36,height:36,borderRadius:"50%",background:mc,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:15,fontWeight:700}}>{pair.mentor[0]}</div>
                  <div>
                    <div style={{fontSize:13,fontWeight:700,color:"#0f172a"}}>{pair.mentor} {"\u2192"} {pair.teen}</div>
                    <div style={{fontSize:10,color:"#64748b"}}>{pair.teenAge?"Age "+pair.teenAge+" \u00b7 ":""}Since {pair.created}</div>
                  </div>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:6}}>
                  <span style={{fontSize:10,color:checkCount>=6?"#059669":checkCount>=3?"#d97706":"#dc2626",background:checkCount>=6?"#f0fdf4":checkCount>=3?"#fffbeb":"#fef2f2",padding:"2px 8px",borderRadius:8,fontWeight:700}}>{checkCount}/8</span>
                  <span style={{transform:isOpen?"rotate(90deg)":"none",transition:"0.2s",color:"#94a3b8"}}>{Ic.chev}</span>
                </div>
              </div>
              {activePrayers.length>0&&<div style={{display:"flex",gap:4,marginTop:6,flexWrap:"wrap"}}><span style={{fontSize:10,color:"#7C3AED",background:"#f4ecf7",padding:"2px 8px",borderRadius:8}}>{"🙏"} {activePrayers.length} prayer point{activePrayers.length!==1?"s":""}</span></div>}
            </button>

            {/* EXPANDED */}
            {isOpen&&(<div>
              {/* TABS */}
              <div style={{display:"flex",gap:4,padding:"10px 12px",background:"#f8fafc",borderBottom:"1px solid #f1f5f9"}}>
                <button onClick={()=>setTab("checklist")} style={tabStyle(tab==="checklist","#2563EB")}>Weekly Checklist</button>
                <button onClick={()=>setTab("progress")} style={tabStyle(tab==="progress","#059669")}>Progress</button>
                <button onClick={()=>setTab("prayer")} style={tabStyle(tab==="prayer","#7C3AED")}>Prayer Points</button>
              </div>

              {/* CHECKLIST TAB */}
              {tab==="checklist"&&(
                <div style={{padding:"12px 16px"}}>
                  <div style={S.prog}><div style={S.pf((checkCount/8)*100,"#7C3AED")}/></div>
                  <p style={{fontSize:10,color:"#64748b",marginBottom:10}}>{checkCount}/8 completed this week</p>
                  {WEEKLY_CHECKLIST.map(item=>{
                    const on=checks[item.id];
                    return(
                      <button key={item.id} onClick={()=>toggleCheck(pair.id,item.id)} style={{display:"flex",alignItems:"center",gap:10,padding:"9px 10px",borderRadius:8,border:"1px solid #e2e8f0",marginBottom:4,width:"100%",textAlign:"left",cursor:"pointer",fontFamily:"'DM Sans',sans-serif",background:on?"#f0fdf4":"#fff"}}>
                        <div style={S.cb(on,"#7C3AED")}>{on&&<span style={{color:"#fff"}}>{Ic.check}</span>}</div>
                        <span style={{fontSize:16}}>{item.icon}</span>
                        <span style={{fontSize:12,color:on?"#065f46":"#334155",fontWeight:on?600:400}}>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* PROGRESS TAB */}
              {tab==="progress"&&(
                <div style={{padding:"12px 16px"}}>
                  <p style={{fontSize:11,color:"#64748b",margin:"0 0 8px"}}>How is {pair.teen} doing this week? Note their growth, struggles, breakthroughs.</p>
                  <div style={{display:"flex",gap:6,marginBottom:10}}>
                    <input value={progText} onChange={e=>setProgText(e.target.value)} placeholder={"Update on "+pair.teen+"..."} style={{...S.inp,fontSize:12}} onKeyDown={e=>e.key==="Enter"&&addProgress(pair.id)}/>
                    <button onClick={()=>addProgress(pair.id)} style={{...S.abtn,width:34,height:34}}>{Ic.plus}</button>
                  </div>
                  {pair.progressLogs.length===0&&<p style={{fontSize:11,color:"#94a3b8",textAlign:"center",padding:8}}>No progress entries yet.</p>}
                  {pair.progressLogs.slice().reverse().map(log=>(
                    <div key={log.id} style={{padding:"10px 12px",background:"#f0fdf4",borderRadius:8,border:"1px solid #bbf7d0",marginBottom:5}}>
                      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <span style={{fontSize:10,color:"#059669",fontWeight:600}}>{log.date} {"\u00b7"} {log.by}</span>
                        <button onClick={()=>removeProgress(pair.id,log.id)} style={S.rm}>{Ic.x}</button>
                      </div>
                      <p style={{margin:"4px 0 0",fontSize:12,color:"#334155"}}>{log.text}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* PRAYER TAB */}
              {tab==="prayer"&&(
                <div style={{padding:"12px 16px"}}>
                  <p style={{fontSize:11,color:"#64748b",margin:"0 0 8px"}}>Prayer points for {pair.teen}. {isPastor?"You can see these and pray along.":"Add things to pray for."}</p>
                  <div style={{display:"flex",gap:6,marginBottom:10}}>
                    <input value={prayText} onChange={e=>setPrayText(e.target.value)} placeholder={"Pray for "+pair.teen+"..."} style={{...S.inp,fontSize:12}} onKeyDown={e=>e.key==="Enter"&&addPrayer(pair.id)}/>
                    <button onClick={()=>addPrayer(pair.id)} style={{...S.abtn,width:34,height:34,background:"#7C3AED"}}>{Ic.plus}</button>
                  </div>

                  {/* Active prayers */}
                  {activePrayers.length===0&&answeredPrayers.length===0&&<p style={{fontSize:11,color:"#94a3b8",textAlign:"center",padding:8}}>No prayer points yet.</p>}
                  {activePrayers.map(pr=>(
                    <div key={pr.id} style={{padding:"10px 12px",background:"#faf5ff",borderRadius:8,border:"1px solid #e9d5ff",marginBottom:5}}>
                      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <span style={{fontSize:10,color:"#7C3AED",fontWeight:600}}>{pr.date} {"\u00b7"} {pr.by}</span>
                        <div style={{display:"flex",gap:4}}>
                          <button onClick={()=>toggleAnswered(pair.id,pr.id)} style={{background:"#059669",color:"#fff",border:"none",borderRadius:6,fontSize:9,fontWeight:700,padding:"3px 8px",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Answered!</button>
                          <button onClick={()=>removePrayer(pair.id,pr.id)} style={S.rm}>{Ic.x}</button>
                        </div>
                      </div>
                      <p style={{margin:"4px 0 0",fontSize:12,color:"#334155"}}>{"🙏"} {pr.text}</p>
                      {isPastor&&!pastorPrayed[pair.id+"-"+wk+"-"+pr.id]&&(
                        <button onClick={()=>setPastorPrayed(prev=>({...prev,[pair.id+"-"+wk+"-"+pr.id]:true}))} style={{marginTop:6,padding:"4px 12px",background:"rgba(124,58,237,0.1)",border:"1px solid #e9d5ff",borderRadius:6,fontSize:10,fontWeight:600,color:"#7C3AED",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>I prayed for this</button>
                      )}
                      {isPastor&&pastorPrayed[pair.id+"-"+wk+"-"+pr.id]&&(
                        <div style={{marginTop:6,fontSize:10,color:"#059669",fontWeight:600}}>{"✅"} You prayed for this</div>
                      )}
                    </div>
                  ))}

                  {/* Answered prayers */}
                  {answeredPrayers.length>0&&<>
                    <h4 style={{fontSize:11,fontWeight:700,color:"#059669",margin:"12px 0 6px"}}>{"🎉"} Answered Prayers</h4>
                    {answeredPrayers.map(pr=>(
                      <div key={pr.id} style={{padding:"8px 12px",background:"#f0fdf4",borderRadius:8,border:"1px solid #bbf7d0",marginBottom:4,opacity:0.7}}>
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                          <span style={{fontSize:10,color:"#059669"}}>{pr.date}</span>
                          <button onClick={()=>toggleAnswered(pair.id,pr.id)} style={{fontSize:9,color:"#64748b",background:"none",border:"none",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Reopen</button>
                        </div>
                        <p style={{margin:"2px 0 0",fontSize:11,color:"#334155",textDecoration:"line-through"}}>{pr.text}</p>
                      </div>
                    ))}
                  </>}
                </div>
              )}

              {/* NOTES */}
              {pair.notes&&<div style={{padding:"8px 16px 12px",borderTop:"1px solid #f1f5f9"}}><p style={{fontSize:10,fontWeight:700,color:"#94a3b8",margin:"0 0 2px"}}>NOTES</p><p style={{fontSize:11,color:"#64748b",margin:0}}>{pair.notes}</p></div>}

              {/* DELETE - pastor */}
              {isPastor&&<div style={{padding:"8px 16px 12px",borderTop:"1px solid #f1f5f9"}}><button onClick={()=>remove(pair.id)} style={{fontSize:11,color:"#dc2626",background:"none",border:"none",cursor:"pointer",fontFamily:"'DM Sans',sans-serif",fontWeight:600}}>Remove this pairing</button></div>}
            </div>)}
          </div>
        );
      })}

      {/* PASTOR PRAYER DASHBOARD */}
      {isPastor&&pairs.length>0&&(
        <div style={{marginTop:16}}>
          <h3 style={S.sec}>{"🙏"} All Prayer Points (for your intercession)</h3>
          {pairs.flatMap(p=>p.prayerPoints.filter(pr=>!pr.answered).map(pr=>({...pr,teen:p.teen,mentor:p.mentor,pairId:p.id}))).length===0&&<p style={{fontSize:12,color:"#94a3b8",textAlign:"center",padding:12}}>No active prayer points across any teen.</p>}
          {pairs.map(p=>{
            const active=p.prayerPoints.filter(pr=>!pr.answered);
            if(active.length===0)return null;
            return(
              <div key={p.id} style={{marginBottom:10}}>
                <div style={{fontSize:12,fontWeight:700,color:"#0f172a",marginBottom:4}}>{p.teen} <span style={{fontWeight:400,color:"#64748b"}}>(mentored by {p.mentor})</span></div>
                {active.map(pr=>(
                  <div key={pr.id} style={{display:"flex",alignItems:"flex-start",gap:8,padding:"8px 10px",background:"#faf5ff",borderRadius:8,border:"1px solid #e9d5ff",marginBottom:3}}>
                    <span style={{fontSize:12,flexShrink:0}}>{"🙏"}</span>
                    <div style={{flex:1}}>
                      <p style={{margin:0,fontSize:12,color:"#334155"}}>{pr.text}</p>
                      <span style={{fontSize:9,color:"#94a3b8"}}>{pr.date} {"\u00b7"} {pr.by}</span>
                    </div>
                    {!pastorPrayed[p.id+"-"+wk+"-"+pr.id]?
                      <button onClick={()=>setPastorPrayed(prev=>({...prev,[p.id+"-"+wk+"-"+pr.id]:true}))} style={{padding:"3px 8px",background:"#7C3AED",color:"#fff",border:"none",borderRadius:6,fontSize:9,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif",flexShrink:0}}>Pray</button>
                      :<span style={{fontSize:9,color:"#059669",fontWeight:600,flexShrink:0}}>{"✅"} Prayed</span>
                    }
                  </div>
                ))}
              </div>
            );
          })}

          <h3 style={S.sec}>Overview</h3>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}>
            <div style={{...S.cd,textAlign:"center",padding:12}}><div style={{fontSize:20,fontWeight:700,color:"#7C3AED"}}>{pairs.length}</div><div style={{fontSize:10,color:"#64748b"}}>Pairs</div></div>
            <div style={{...S.cd,textAlign:"center",padding:12}}><div style={{fontSize:20,fontWeight:700,color:"#059669"}}>{pairs.reduce((s,p)=>s+p.prayerPoints.filter(x=>x.answered).length,0)}</div><div style={{fontSize:10,color:"#64748b"}}>Answered</div></div>
            <div style={{...S.cd,textAlign:"center",padding:12}}><div style={{fontSize:20,fontWeight:700,color:"#EA580C"}}>{pairs.reduce((s,p)=>s+p.progressLogs.length,0)}</div><div style={{fontSize:10,color:"#64748b"}}>Updates</div></div>
          </div>
        </div>
      )}
    </div>
  );
}

// === PRACTICE TRACKING & ELIGIBILITY ===
function PracticePage({d,up,isPastor,user}){
  const prac=d.practice||{};
  const sessions=prac.sessions||[];
  const [showCreate,setShowCreate]=useState(false);
  const [sName,setSName]=useState("");const [sDate,setSDate]=useState("");const [sTime,setSTime]=useState("");const [sEvent,setSEvent]=useState("");const [sRequired,setSRequired]=useState([]);

  const allNames=[...new Set([...ALL_MEMBERS.map(m=>m.name),...(d.users||[]).map(u=>u.name)])];
  const teams=(d.customTeams||TEAMS);

  const savePrac=(s)=>up("practice",{...prac,sessions:s});

  const createSession=()=>{
    if(!sName.trim()||!sDate||sRequired.length===0)return;
    const ns={id:Date.now(),name:sName.trim(),date:sDate,time:sTime,linkedEvent:sEvent.trim(),required:sRequired,attendance:{},eventDone:false,created:new Date().toLocaleDateString()};
    savePrac([...sessions,ns]);
    setSName("");setSDate("");setSTime("");setSEvent("");setSRequired([]);setShowCreate(false);
  };
  const removeSession=id=>savePrac(sessions.filter(s=>s.id!==id));
  const toggleAttend=(sessId,name)=>{const updated=sessions.map(s=>s.id===sessId?{...s,attendance:{...s.attendance,[name]:!s.attendance[name]}}:s);savePrac(updated)};
  const markEventDone=id=>{savePrac(sessions.map(s=>s.id===id?{...s,eventDone:true}:s))};
  const assignTeam=teamId=>{const t=teams.find(x=>x.id===teamId);if(t)setSRequired(prev=>[...new Set([...prev,...t.members])])};

  // Member view helpers
  const mySessions=isPastor?sessions:sessions.filter(s=>s.required.includes(user?.name));

  const getEligibility=(sessId)=>{
    const s=sessions.find(x=>x.id===sessId);if(!s)return{};
    const result={};
    s.required.forEach(name=>{const attended=s.attendance[name];const past=new Date(s.date+"T23:59:59")<new Date();result[name]=attended?"eligible":past?"blocked":"pending"});
    return result;
  };

  const fmtD=ds=>{if(!ds)return"";try{return new Date(ds+"T00:00:00").toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short"})}catch(e){return ds}};
  const fmtT=ts=>{if(!ts)return"";try{const[h,m]=ts.split(":");const hr=parseInt(h);return(hr>12?hr-12:hr||12)+":"+m+(hr>=12?" PM":" AM")}catch(e){return ts}};

  return(<div style={S.pg}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
      <h2 style={{...S.ti,margin:0}}>Practice & Eligibility</h2>
      {isPastor&&<button onClick={()=>setShowCreate(!showCreate)} style={{padding:"7px 14px",background:showCreate?"#dc2626":"#2563EB",color:"#fff",border:"none",borderRadius:10,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>{showCreate?"Cancel":"+ Session"}</button>}
    </div>
    <p style={{fontSize:11,color:"#64748b",margin:"-8px 0 12px"}}>{isPastor?"Create practice sessions. Members who miss cannot perform at the linked event.":"Your required practice sessions. Missing = not eligible to perform."}</p>

    {/* CREATE */}
    {showCreate&&isPastor&&<div style={{background:"#fff",borderRadius:14,border:"2px solid #2563EB",padding:16,marginBottom:14}}>
      <h3 style={{fontSize:14,fontWeight:700,color:"#0f172a",margin:"0 0 10px"}}>New Practice Session</h3>
      <input value={sName} onChange={e=>setSName(e.target.value)} placeholder="Session name (e.g. Worship Rehearsal)" style={{...S.inp,width:"100%",marginBottom:8,boxSizing:"border-box",flex:"none"}}/>
      <div style={{display:"flex",gap:8,marginBottom:8}}>
        <input type="date" value={sDate} onChange={e=>setSDate(e.target.value)} style={{...S.inp,flex:1}}/>
        <input type="time" value={sTime} onChange={e=>setSTime(e.target.value)} style={{...S.inp,flex:1}}/>
      </div>
      <input value={sEvent} onChange={e=>setSEvent(e.target.value)} placeholder="Linked event (e.g. Sunday Service, Worship Night)" style={{...S.inp,width:"100%",marginBottom:10,boxSizing:"border-box",flex:"none"}}/>
      <p style={{fontSize:11,fontWeight:700,color:"#334155",margin:"0 0 4px"}}>Assign by team:</p>
      <div style={{display:"flex",gap:4,flexWrap:"wrap",marginBottom:6}}>
        {teams.map(t=>(<button key={t.id} onClick={()=>assignTeam(t.id)} style={{padding:"3px 9px",borderRadius:14,fontSize:10,fontWeight:600,border:"1px solid "+t.color,color:t.color,background:"#fff",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>{t.icon} {t.name}</button>))}
        <button onClick={()=>setSRequired(allNames)} style={{padding:"3px 9px",borderRadius:14,fontSize:10,fontWeight:600,border:"1px solid #0f172a",color:"#0f172a",background:"#fff",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>All</button>
      </div>
      <p style={{fontSize:11,fontWeight:700,color:"#334155",margin:"0 0 4px"}}>Required ({sRequired.length}):</p>
      <div style={{display:"flex",gap:3,flexWrap:"wrap",marginBottom:10}}>
        {allNames.map(n=>{const on=sRequired.includes(n);return(<button key={n} onClick={()=>setSRequired(on?sRequired.filter(x=>x!==n):[...sRequired,n])} style={{padding:"3px 8px",borderRadius:14,fontSize:10,fontWeight:600,border:on?"1px solid #2563EB":"1px solid #e2e8f0",color:on?"#fff":"#64748b",background:on?"#2563EB":"#f8fafc",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>{n}</button>)})}
      </div>
      <button onClick={createSession} disabled={!sName.trim()||!sDate||sRequired.length===0} style={{width:"100%",padding:"10px",background:(!sName.trim()||!sDate||sRequired.length===0)?"#cbd5e1":"#2563EB",color:"#fff",border:"none",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Create Session</button>
    </div>}

    {mySessions.length===0&&!showCreate&&<div style={{...S.cd,textAlign:"center",padding:24}}><span style={{fontSize:28}}>{"🎯"}</span><p style={{fontSize:12,color:"#64748b",margin:"8px 0 0"}}>{isPastor?"No practice sessions. Tap \"+ Session\" to create one.":"No practice sessions assigned to you."}</p></div>}

    {/* SESSIONS */}
    {mySessions.map(sess=>{
      const elig=getEligibility(sess.id);
      const past=new Date(sess.date+"T23:59:59")<new Date();
      const attended=Object.values(sess.attendance).filter(Boolean).length;
      const blockedNames=Object.entries(elig).filter(([,v])=>v==="blocked").map(([n])=>n);

      return(<div key={sess.id} style={{...S.cd,borderLeft:sess.eventDone?"4px solid #059669":past?"4px solid #dc2626":"4px solid #2563EB"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
          <div style={{flex:1}}>
            <div style={{fontSize:14,fontWeight:700,color:"#0f172a"}}>{sess.name}</div>
            <div style={{display:"flex",gap:6,marginTop:4,flexWrap:"wrap"}}>
              <span style={{fontSize:10,color:"#2563EB",background:"#eff6ff",padding:"2px 8px",borderRadius:6}}>{fmtD(sess.date)}</span>
              {sess.time&&<span style={{fontSize:10,color:"#7C3AED",background:"#f4ecf7",padding:"2px 8px",borderRadius:6}}>{fmtT(sess.time)}</span>}
              {sess.linkedEvent&&<span style={{fontSize:10,color:"#d97706",background:"#fffbeb",padding:"2px 8px",borderRadius:6}}>For: {sess.linkedEvent}</span>}
              <span style={{fontSize:10,color:sess.eventDone?"#059669":"#64748b",background:sess.eventDone?"#f0fdf4":"#f1f5f9",padding:"2px 8px",borderRadius:6}}>{sess.eventDone?"Event Done":past?"Past":"Upcoming"}</span>
            </div>
          </div>
          {isPastor&&<button onClick={()=>removeSession(sess.id)} style={S.rm}>{Ic.x}</button>}
        </div>

        {/* Attendance */}
        <div style={{marginTop:10}}>
          <div style={{fontSize:11,fontWeight:700,color:"#334155",marginBottom:4}}>Attendance ({attended}/{sess.required.length})</div>
          <div style={S.prog}><div style={S.pf((attended/Math.max(sess.required.length,1))*100,"#2563EB")}/></div>
          {sess.required.map(name=>{
            const att=sess.attendance[name];
            const status=elig[name];
            const isMember=!isPastor&&name===user?.name;
            return(<button key={name} onClick={()=>{if(isPastor||isMember)toggleAttend(sess.id,name)}} style={{display:"flex",alignItems:"center",gap:8,padding:"6px 8px",borderRadius:8,border:"1px solid #e2e8f0",marginBottom:2,width:"100%",textAlign:"left",cursor:(isPastor||isMember)?"pointer":"default",fontFamily:"'DM Sans',sans-serif",background:att?"#f0fdf4":status==="blocked"?"#fef2f2":"#fff"}}>
              <div style={S.cb(att,"#2563EB")}>{att&&<span style={{color:"#fff"}}>{Ic.check}</span>}</div>
              <span style={{flex:1,fontSize:11,fontWeight:600,color:"#0f172a"}}>{name}{isMember?" (you)":""}</span>
              {status==="eligible"&&<span style={{fontSize:9,color:"#059669",fontWeight:700}}>{"✅"} Eligible</span>}
              {status==="blocked"&&<span style={{fontSize:9,color:"#dc2626",fontWeight:700}}>{"🚫"} Blocked</span>}
              {status==="pending"&&<span style={{fontSize:9,color:"#d97706",fontWeight:700}}>Pending</span>}
            </button>);
          })}
        </div>

        {/* Blocked warning */}
        {blockedNames.length>0&&!sess.eventDone&&<div style={{marginTop:8,padding:"8px 10px",background:"#fef2f2",borderRadius:8,border:"1px solid #fecaca"}}>
          <div style={{fontSize:11,fontWeight:700,color:"#dc2626"}}>{"🚫"} Not eligible for {sess.linkedEvent||"the event"}:</div>
          <div style={{fontSize:11,color:"#7f1d1d",marginTop:2}}>{blockedNames.join(", ")}</div>
          {isPastor&&<div style={{marginTop:6}}>
            <p style={{fontSize:10,color:"#64748b",margin:"0 0 4px"}}>Send notification (tap to copy for WhatsApp):</p>
            {blockedNames.map(name=>(<button key={name} onClick={()=>{const msg="Hi "+name+", you missed the practice session \""+sess.name+"\" on "+sess.date+". As per our church policy, attendance at practice is mandatory to perform at "+( sess.linkedEvent||"the event")+". Please speak to Pastor to resolve this. God bless! - FGCLC";navigator.clipboard?.writeText(msg)}} style={{display:"block",width:"100%",padding:"6px 10px",background:"#fff",border:"1px solid #e2e8f0",borderRadius:6,fontSize:10,color:"#334155",cursor:"pointer",fontFamily:"'DM Sans',sans-serif",textAlign:"left",marginBottom:2}}>
              {"📋"} Copy message for {name}
            </button>))}
          </div>}
        </div>}

        {/* Mark event done */}
        {isPastor&&!sess.eventDone&&past&&<button onClick={()=>markEventDone(sess.id)} style={{marginTop:8,padding:"6px 14px",background:"#059669",color:"#fff",border:"none",borderRadius:8,fontSize:11,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Mark Event Complete</button>}
      </div>);
    })}
  </div>);
}

// === MESSAGES / WHATSAPP GENERATOR ===
function MsgPage({d,up}){
  const [tab,setTab]=useState("saturday"); // saturday, custom, history
  const [customSubj,setCustomSubj]=useState("");
  const [customMsg,setCustomMsg]=useState("");
  const [copied,setCopied]=useState("");
  const [aiPrompt,setAiPrompt]=useState("");
  const [aiLoading,setAiLoading]=useState(false);

  const allNames=[...new Set([...ALL_MEMBERS.map(m=>m.name),...(d.users||[]).map(u=>u.name)])];
  const msgs=d.messages||[];

  const saturdayMsg=()=>{
    const d2=new Date();const sun=new Date(d2);sun.setDate(d2.getDate()+(7-d2.getDay())%7);
    const sunStr=sun.toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"});
    return "Dear FGCLC Family,\n\nWe are excited to welcome you to our Sunday Worship Service tomorrow, "+sunStr+"!\n\nCome with an open heart and a spirit of worship. Let's gather together to praise the Lord and be refreshed in His presence.\n\nService Time: 10:00 AM\nVenue: FGCLC English Church\n\n\"Let us not give up meeting together, as some are in the habit of doing, but let us encourage one another.\" - Hebrews 10:25\n\nSee you there!\nPastor & Team, FGCLC";
  };

  const copyToClip=(text,label)=>{
    if(navigator.clipboard)navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(()=>setCopied(""),2000);
  };

  const openWhatsApp=(text)=>{
    const encoded=encodeURIComponent(text);
    window.open("https://wa.me/?text="+encoded,"_blank");
  };

  const saveMsg=(subject,text)=>{
    const m={id:Date.now(),subject,text,date:new Date().toLocaleDateString(),readBy:[]};
    up("messages",[...msgs,m]);
  };

  const removeMsg=id=>up("messages",msgs.filter(m=>m.id!==id));

  const ttab=(active)=>({flex:1,padding:"8px 4px",background:active?"#059669":"transparent",border:"none",borderRadius:8,fontSize:11,fontWeight:700,color:active?"#fff":"#64748b",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"});

  return(<div style={S.pg}>
    <h2 style={S.ti}>Messages</h2>
    <div style={{display:"flex",gap:4,marginBottom:14,background:"#f1f5f9",borderRadius:10,padding:3}}>
      <button onClick={()=>setTab("saturday")} style={ttab(tab==="saturday")}>Saturday Invite</button>
      <button onClick={()=>setTab("custom")} style={ttab(tab==="custom")}>Custom Message</button>
      <button onClick={()=>setTab("history")} style={ttab(tab==="history")}>History</button>
    </div>

    {/* SATURDAY INVITE */}
    {tab==="saturday"&&<div>
      <div style={{background:"linear-gradient(135deg,#059669,#065f46)",borderRadius:14,padding:16,marginBottom:12}}>
        <div style={{fontSize:14,fontWeight:700,color:"#fff",marginBottom:4}}>{"📨"} Saturday Night Invitation</div>
        <p style={{fontSize:11,color:"#a7f3d0",margin:0}}>Send this to your church WhatsApp group every Saturday evening.</p>
      </div>
      <div style={{background:"#fff",borderRadius:12,border:"1px solid #e2e8f0",padding:14,marginBottom:12}}>
        <div style={{fontSize:12,color:"#334155",whiteSpace:"pre-wrap",lineHeight:1.6}}>{saturdayMsg()}</div>
      </div>
      <div style={{display:"flex",gap:8}}>
        <button onClick={()=>copyToClip(saturdayMsg(),"saturday")} style={{flex:1,padding:"10px",background:"#2563EB",color:"#fff",border:"none",borderRadius:10,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>{copied==="saturday"?"Copied!":"Copy Message"}</button>
        <button onClick={()=>openWhatsApp(saturdayMsg())} style={{flex:1,padding:"10px",background:"#25D366",color:"#fff",border:"none",borderRadius:10,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Open WhatsApp</button>
      </div>
      <button onClick={()=>saveMsg("Saturday Invite",saturdayMsg())} style={{width:"100%",padding:"8px",background:"#f1f5f9",color:"#475569",border:"none",borderRadius:8,fontSize:11,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans',sans-serif",marginTop:8}}>Save to in-app notifications</button>
    </div>}

    {/* CUSTOM MESSAGE */}
    {tab==="custom"&&<div>
      <div style={{background:"linear-gradient(135deg,#7C3AED,#2563EB)",borderRadius:14,padding:16,marginBottom:12}}>
        <div style={{fontSize:14,fontWeight:700,color:"#fff",marginBottom:4}}>{"✍️"} Custom Event Invitation</div>
        <p style={{fontSize:11,color:"#c4b5fd",margin:0}}>Write your own or let AI generate a beautiful invitation for you.</p>
      </div>

      {/* AI GENERATOR */}
      <div style={{background:"#faf5ff",borderRadius:12,border:"1px solid #e9d5ff",padding:12,marginBottom:12}}>
        <div style={{fontSize:12,fontWeight:700,color:"#7C3AED",marginBottom:6}}>{"✨"} AI Message Generator</div>
        <textarea value={aiPrompt} onChange={e=>setAiPrompt(e.target.value)} placeholder={"Describe the event and AI will write the invitation.\n\ne.g. \"Worship night this Friday at 7pm, theme is Holy Spirit fire, bring a friend, casual dress\""} style={{width:"100%",padding:"9px 12px",border:"1px solid #e9d5ff",borderRadius:10,fontSize:12,fontFamily:"'DM Sans',sans-serif",outline:"none",resize:"vertical",minHeight:60,boxSizing:"border-box",marginBottom:8,background:"#fff"}}/>
        <button onClick={async()=>{
          if(!aiPrompt.trim())return;setAiLoading(true);
          try{
            const res=await fetch(SUPA_URL+"/functions/v1/ai-proxy",{method:"POST",headers:{"Content-Type":"application/json","Authorization":"Bearer "+SUPA_KEY},body:JSON.stringify({prompt:"You are the communications assistant for FGCLC English Church. Write a warm, inviting WhatsApp message for this event: \""+aiPrompt.trim()+"\"\n\nRules: Keep it warm and friendly but not too long (under 150 words). Include the event details, a short encouraging line, a relevant Bible verse, and end with \"FGCLC English Church\". Use appropriate emojis sparingly. Do NOT use markdown formatting - just plain text with line breaks. Respond with ONLY the message text, nothing else. Also on the very first line put a short subject/title for the message (max 5 words) followed by a newline, then the message body.",max_tokens:1000})});
            const data=await res.json();
            var text=data.text||"";
            const lines=text.trim().split("\n");
            const subj=lines[0]?lines[0].trim():"Event Invitation";
            const body=lines.slice(1).join("\n").trim();
            setCustomSubj(subj);setCustomMsg(body||text);
          }catch(e){console.error("AI Message error:",e)}
          setAiLoading(false);
        }} disabled={aiLoading||!aiPrompt.trim()} style={{width:"100%",padding:"10px",background:(aiLoading||!aiPrompt.trim())?"#cbd5e1":"linear-gradient(135deg,#7C3AED,#2563EB)",color:"#fff",border:"none",borderRadius:10,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>
          {aiLoading?"Generating...":"Generate with AI"}
        </button>
      </div>

      <input value={customSubj} onChange={e=>setCustomSubj(e.target.value)} placeholder="Subject (e.g. Special Worship Night)" style={{...S.inp,width:"100%",marginBottom:8,boxSizing:"border-box",flex:"none"}}/>
      <textarea value={customMsg} onChange={e=>setCustomMsg(e.target.value)} placeholder={"Write your message here...\n\nTip: Include date, time, venue, and a Bible verse!"} style={{width:"100%",padding:"10px 14px",border:"1px solid #e2e8f0",borderRadius:10,fontSize:12,fontFamily:"'DM Sans',sans-serif",outline:"none",resize:"vertical",minHeight:120,boxSizing:"border-box",marginBottom:10}}/>
      {customMsg.trim()&&<>
        <div style={{display:"flex",gap:8,marginBottom:8}}>
          <button onClick={()=>copyToClip(customMsg,"custom")} style={{flex:1,padding:"10px",background:"#2563EB",color:"#fff",border:"none",borderRadius:10,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>{copied==="custom"?"Copied!":"Copy"}</button>
          <button onClick={()=>openWhatsApp(customMsg)} style={{flex:1,padding:"10px",background:"#25D366",color:"#fff",border:"none",borderRadius:10,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>WhatsApp</button>
        </div>
        <button onClick={()=>{saveMsg(customSubj||"Announcement",customMsg);setCustomSubj("");setCustomMsg("")}} style={{width:"100%",padding:"8px",background:"#f1f5f9",color:"#475569",border:"none",borderRadius:8,fontSize:11,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Save as in-app notification for all members</button>
      </>}

      <div style={{marginTop:16}}>
        <h3 style={S.sec}>Quick Templates</h3>
        {[
          {name:"Worship Night",msg:"Dear FGCLC Youth,\n\nYou are invited to our Worship Night!\n\nDate: [DATE]\nTime: [TIME]\nVenue: FGCLC English Church\n\nCome expecting God to move! Bring a friend.\n\n\"Enter His gates with thanksgiving and His courts with praise.\" - Psalm 100:4\n\nSee you there!\nFGCLC Team"},
          {name:"Prayer Meeting",msg:"Dear FGCLC Family,\n\nJoin us for our special Prayer Meeting!\n\nDate: [DATE]\nTime: [TIME]\n\nLet's come together to seek God's face and intercede for our church, city, and nation.\n\n\"If my people, who are called by my name, will humble themselves and pray...\" - 2 Chronicles 7:14\n\nFGCLC"},
          {name:"Fellowship Event",msg:"Hey FGCLC Fam!\n\nWe're having a fellowship get-together and you're invited!\n\nDate: [DATE]\nTime: [TIME]\nVenue: [VENUE]\n\nFood, games, and great company. Bring your friends!\n\nFGCLC Youth"},
        ].map(tmpl=>(<button key={tmpl.name} onClick={()=>{setCustomSubj(tmpl.name);setCustomMsg(tmpl.msg)}} style={{display:"block",width:"100%",padding:"10px 12px",background:"#fff",border:"1px solid #e2e8f0",borderRadius:8,fontSize:11,fontWeight:600,color:"#334155",cursor:"pointer",fontFamily:"'DM Sans',sans-serif",textAlign:"left",marginBottom:4}}>
          {"📝"} {tmpl.name}
        </button>))}
      </div>
    </div>}

    {/* HISTORY */}
    {tab==="history"&&<div>
      <p style={{fontSize:11,color:"#64748b",marginBottom:10}}>Sent messages (saved as in-app notifications for members).</p>
      {msgs.length===0&&<p style={{fontSize:12,color:"#94a3b8",textAlign:"center",padding:16}}>No messages sent yet.</p>}
      {msgs.slice().reverse().map(m=>(<div key={m.id} style={{...S.cd,borderLeft:"3px solid #059669"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
          <div style={{flex:1}}>
            <div style={{fontSize:12,fontWeight:700,color:"#0f172a"}}>{m.subject||"Message"}</div>
            <div style={{fontSize:9,color:"#94a3b8"}}>{m.date}</div>
            <p style={{fontSize:11,color:"#475569",margin:"4px 0 0",whiteSpace:"pre-wrap",maxHeight:60,overflow:"hidden"}}>{m.text}</p>
          </div>
          <div style={{display:"flex",gap:4,flexShrink:0}}>
            <button onClick={()=>copyToClip(m.text,"h-"+m.id)} style={{fontSize:9,color:"#2563EB",background:"#eff6ff",border:"none",borderRadius:4,padding:"3px 6px",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>{copied==="h-"+m.id?"Copied":"Copy"}</button>
            <button onClick={()=>removeMsg(m.id)} style={S.rm}>{Ic.x}</button>
          </div>
        </div>
      </div>))}
    </div>}
  </div>);
}

// === VERSE OF THE DAY ===
function VerseOfDay(){
  var verseState=useState(null);
  var loading=useState(true);

  useEffect(function(){
    var todayKey="verse-"+new Date().toISOString().split("T")[0];

    // Try to load cached verse for today
    ld(todayKey,null).then(function(cached){
      if(cached&&cached.ref&&cached.text&&cached.reflection){
        verseState[1](cached);
        loading[1](false);
      } else {
        // Fallback verse while AI loads
        var fallback=getTodayVerse();
        verseState[1]({ref:fallback.ref,text:fallback.text,reflection:""});
        loading[1](false);

        // Fetch AI-generated verse + reflection
        fetch(SUPA_URL+"/functions/v1/ai-proxy",{
          method:"POST",
          headers:{"Content-Type":"application/json","Authorization":"Bearer "+SUPA_KEY},
          body:JSON.stringify({
            prompt:"You are a devotional assistant for FGCLC English Church youth ministry. Generate a verse of the day and a short reflection.\n\nToday is "+new Date().toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric"})+".\n\nPick a meaningful Bible verse (not too common - surprise us with lesser-known gems sometimes). Then write a 2-3 sentence reflection that connects it to the daily life of young Christians in India - their studies, friendships, faith journey, and service.\n\nRespond ONLY in this exact JSON format, nothing else:\n{\"ref\":\"Book Chapter:Verse\",\"text\":\"The verse text\",\"reflection\":\"Your 2-3 sentence reflection\"}",
            max_tokens:500
          })
        }).then(function(res){return res.json()}).then(function(data){
          try{
            var txt=data.text||"";
            while(txt.indexOf(String.fromCharCode(96))>=0)txt=txt.replace(String.fromCharCode(96),"");
            txt=txt.replace(/^json\s*/,"").trim();
            var parsed=JSON.parse(txt);
            if(parsed.ref&&parsed.text){
              verseState[1](parsed);
              sv(todayKey,parsed);
            }
          }catch(e){console.error("Verse parse error:",e)}
        }).catch(function(e){console.error("Verse fetch error:",e)});
      }
    });
  },[]);

  var v=verseState[0];
  if(!v)return null;

  var words=v.text.split(" ");
  return(
    <div className="kb-fade" style={{background:"linear-gradient(135deg,#1e1b4b,#312e81,#3730a3)",borderRadius:16,padding:20,marginBottom:14,position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:-20,right:-20,fontSize:80,opacity:0.06,fontFamily:"'Playfair Display',serif"}}>{"\u201C"}</div>
      <div style={{fontSize:10,color:"#a5b4fc",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>Verse of the Day</div>
      <p style={{margin:0,fontSize:15,color:"#e0e7ff",lineHeight:1.7,fontFamily:"'Playfair Display',serif",fontStyle:"italic"}}>
        {"\u201C"}{words.map(function(word,i){
          return <span key={i} className="kb-fade" style={{animationDelay:(i*60)+"ms",display:"inline"}}>{word}{" "}</span>;
        })}{"\u201D"}
      </p>
      <div className="kb-fade" style={{animationDelay:(words.length*60+200)+"ms",marginTop:12,display:"flex",alignItems:"center",gap:8}}>
        <div style={{height:1,flex:1,background:"rgba(165,180,252,0.2)"}}></div>
        <span style={{fontSize:12,color:"#a5b4fc",fontWeight:600}}>{v.ref}</span>
        <div style={{height:1,flex:1,background:"rgba(165,180,252,0.2)"}}></div>
      </div>
      {v.reflection&&<p className="kb-fade" style={{animationDelay:(words.length*60+400)+"ms",margin:"12px 0 0",fontSize:12,color:"#c7d2fe",lineHeight:1.6}}>{v.reflection}</p>}
    </div>
  );
}

// === CHAT ===
function ChatPage({d,up,user}){
  var chatMsgs=d.chat||[];
  var inputVal=useState("");
  var replyTo=useState(null);
  var isRecording=useState(false);
  var recorder=useState(null);
  var recTimer=useState(0);
  var typingState=useState({});
  var typingTimeout=useState(null);

  // Auto-cleanup: remove voice messages older than 30 days
  useEffect(function(){
    var thirtyDaysAgo=Date.now()-(30*24*60*60*1000);
    var needsClean=chatMsgs.some(function(m){return m.type==="voice"&&m.id<thirtyDaysAgo});
    if(needsClean){
      var cleaned=chatMsgs.map(function(m){
        if(m.type==="voice"&&m.id<thirtyDaysAgo){
          return Object.assign({},m,{voiceData:null,text:"[Voice message expired]",expired:true});
        }
        return m;
      });
      up("chat",cleaned);
    }
  },[]);

  // Typing indicator - save to shared state
  function setTyping(){
    var ts=Object.assign({},d.typingState||{});
    ts[user.name]={time:Date.now()};
    sv("fgclc-typing",ts);
    // Clear after 3 seconds
    if(typingTimeout[0])clearTimeout(typingTimeout[0]);
    typingTimeout[1](setTimeout(function(){
      var ts2=Object.assign({},d.typingState||{});
      delete ts2[user.name];
      sv("fgclc-typing",ts2);
    },3000));
  }

  // Poll typing state every 2 seconds
  useEffect(function(){
    var interval=setInterval(function(){
      ld("fgclc-typing",{}).then(function(ts){typingState[1](ts)});
    },2000);
    return function(){clearInterval(interval)};
  },[]);

  // Get who's typing (exclude self)
  var typingNames=[];
  var now=Date.now();
  var ts=typingState[0]||{};
  Object.keys(ts).forEach(function(name){
    if(name!==user.name&&ts[name]&&(now-ts[name].time)<5000){
      typingNames.push(name);
    }
  });

  function sendMsg(){
    var txt=inputVal[0].trim();
    if(!txt)return;
    var msg={
      id:Date.now(),
      text:txt,
      type:"text",
      sender:user.name,
      role:user.role,
      time:new Date().toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"}),
      date:new Date().toLocaleDateString("en-IN",{day:"numeric",month:"short"}),
      replyTo:replyTo[0]
    };
    up("chat",chatMsgs.concat([msg]));
    inputVal[1]("");
    replyTo[1](null);
  }

  // Voice recording
  function startRecording(){
    if(!navigator.mediaDevices){alert("Microphone not supported on this device");return}
    navigator.mediaDevices.getUserMedia({audio:true}).then(function(stream){
      var mr=new MediaRecorder(stream,{mimeType:"audio/webm"});
      var chunks=[];
      mr.ondataavailable=function(e){chunks.push(e.data)};
      mr.onstop=function(){
        stream.getTracks().forEach(function(t){t.stop()});
        var blob=new Blob(chunks,{type:"audio/webm"});
        // Convert to base64
        var reader=new FileReader();
        reader.onloadend=function(){
          var base64=reader.result;
          var msg={
            id:Date.now(),
            text:"Voice message",
            type:"voice",
            voiceData:base64,
            duration:recTimer[0],
            sender:user.name,
            role:user.role,
            time:new Date().toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"}),
            date:new Date().toLocaleDateString("en-IN",{day:"numeric",month:"short"}),
            replyTo:replyTo[0]
          };
          up("chat",chatMsgs.concat([msg]));
          replyTo[1](null);
          recTimer[1](0);
        };
        reader.readAsDataURL(blob);
      };
      mr.start();
      recorder[1](mr);
      isRecording[1](true);
      recTimer[1](0);
      // Timer
      var ti=setInterval(function(){recTimer[1](function(p){return p+1})},1000);
      mr._timerInterval=ti;
    }).catch(function(err){alert("Microphone access denied")});
  }

  function stopRecording(){
    if(recorder[0]&&recorder[0].state==="recording"){
      clearInterval(recorder[0]._timerInterval);
      recorder[0].stop();
      isRecording[1](false);
      recorder[1](null);
    }
  }

  function cancelRecording(){
    if(recorder[0]&&recorder[0].state==="recording"){
      clearInterval(recorder[0]._timerInterval);
      recorder[0].stream.getTracks().forEach(function(t){t.stop()});
      isRecording[1](false);
      recorder[1](null);
      recTimer[1](0);
    }
  }

  function deleteMsg(id){
    up("chat",chatMsgs.filter(function(m){return m.id!==id}));
  }

  function fmtDur(s){var m=Math.floor(s/60);var sec=s%60;return m+":"+(sec<10?"0":"")+sec}

  useEffect(function(){
    var el=document.getElementById("kb-chat-bottom");
    if(el)el.scrollIntoView({behavior:"smooth"});
  },[chatMsgs.length]);

  var grouped={};
  chatMsgs.forEach(function(m){
    var key=m.date||"Today";
    if(!grouped[key])grouped[key]=[];
    grouped[key].push(m);
  });
  var dateKeys=Object.keys(grouped);

  var chatColors=["#2563EB","#7C3AED","#EA580C","#DC2626","#059669","#d97706","#0891b2","#be185d"];
  function getColor(name){
    var sum=0;
    for(var ci=0;ci<name.length;ci++)sum+=name.charCodeAt(ci);
    return chatColors[sum%chatColors.length];
  }

  return(
    <div style={{display:"flex",flexDirection:"column",height:"calc(100vh - 130px)",fontFamily:"'DM Sans',sans-serif"}}>
      <div style={{padding:"16px 20px 8px"}}>
        <h2 style={{fontSize:20,fontWeight:700,color:"#0f172a",margin:0,fontFamily:"'Playfair Display',serif"}}>FGCLC Chat</h2>
        <p style={{fontSize:11,color:"#64748b",margin:"2px 0 0"}}>{chatMsgs.length} messages</p>
      </div>

      <div style={{flex:1,overflowY:"auto",padding:"8px 16px"}}>
        {chatMsgs.length===0&&<div style={{textAlign:"center",padding:40}}>
          <span style={{fontSize:40}}>{"\uD83D\uDCAC"}</span>
          <p style={{fontSize:13,color:"#94a3b8",marginTop:8}}>No messages yet. Start the conversation!</p>
        </div>}

        {dateKeys.map(function(dateKey){return(
          <div key={dateKey}>
            <div style={{textAlign:"center",margin:"12px 0 8px"}}>
              <span style={{fontSize:10,color:"#94a3b8",background:"#f1f5f9",padding:"3px 10px",borderRadius:10}}>{dateKey}</span>
            </div>
            {grouped[dateKey].map(function(m){
              var isMe=m.sender===user.name;
              var isPastor=m.role==="pastor";
              var col=getColor(m.sender);
              return(
                <div key={m.id} className="kb-fade" style={{display:"flex",justifyContent:isMe?"flex-end":"flex-start",marginBottom:6}}>
                  <div style={{maxWidth:"80%"}}>
                    {m.replyTo&&<div style={{fontSize:10,color:"#64748b",background:"#f1f5f9",padding:"4px 8px",borderRadius:"8px 8px 0 0",borderLeft:"2px solid #94a3b8",marginBottom:-2}}>
                      {"Replying to: "}{chatMsgs.find(function(x){return x.id===m.replyTo})?.text?.slice(0,40)||"..."}
                    </div>}
                    <div style={{padding:"10px 14px",borderRadius:isMe?"14px 14px 4px 14px":"14px 14px 14px 4px",background:isMe?"#2563EB":isPastor?"#065f46":"#fff",color:isMe?"#fff":isPastor?"#fff":"#334155",border:isMe?"none":isPastor?"none":"1px solid #e2e8f0"}}>
                      {!isMe&&<div style={{fontSize:10,fontWeight:700,color:isMe?"#93c5fd":isPastor?"#a7f3d0":col,marginBottom:2}}>{m.sender}{isPastor?" (Pastor)":""}</div>}

                      {m.type==="voice"&&!m.expired&&m.voiceData?
                        <div style={{display:"flex",alignItems:"center",gap:8}}>
                          <span style={{fontSize:16}}>{"\uD83C\uDFA4"}</span>
                          <audio controls src={m.voiceData} style={{height:32,maxWidth:200}} preload="none"></audio>
                          <span style={{fontSize:10,opacity:0.7}}>{m.duration?fmtDur(m.duration):""}</span>
                        </div>
                      :m.type==="voice"&&m.expired?
                        <div style={{fontSize:12,fontStyle:"italic",opacity:0.6}}>{"\uD83C\uDFA4"} Voice message expired (30 days)</div>
                      :
                        <div style={{fontSize:13,lineHeight:1.5}}>{m.text}</div>
                      }

                      <div style={{fontSize:9,color:isMe?"#93c5fd":isPastor?"#a7f3d0":"#94a3b8",marginTop:3,textAlign:"right"}}>{m.time}</div>
                    </div>
                    <div style={{display:"flex",gap:6,justifyContent:isMe?"flex-end":"flex-start",marginTop:2}}>
                      <button onClick={function(){replyTo[1](m.id)}} style={{fontSize:9,color:"#64748b",background:"none",border:"none",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Reply</button>
                      {(isMe||user.role==="pastor")&&<button onClick={function(){deleteMsg(m.id)}} style={{fontSize:9,color:"#dc2626",background:"none",border:"none",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Delete</button>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )})}

        {/* TYPING INDICATOR */}
        {typingNames.length>0&&<div className="kb-fade" style={{display:"flex",alignItems:"center",gap:8,padding:"6px 12px",marginBottom:6}}>
          <div style={{display:"flex",gap:3}}>
            <div style={{width:6,height:6,borderRadius:"50%",background:"#94a3b8",animation:"popIn 0.6s ease infinite alternate"}}></div>
            <div style={{width:6,height:6,borderRadius:"50%",background:"#94a3b8",animation:"popIn 0.6s ease 0.2s infinite alternate"}}></div>
            <div style={{width:6,height:6,borderRadius:"50%",background:"#94a3b8",animation:"popIn 0.6s ease 0.4s infinite alternate"}}></div>
          </div>
          <span style={{fontSize:11,color:"#94a3b8",fontStyle:"italic"}}>{typingNames.join(", ")}{typingNames.length===1?" is":" are"} typing...</span>
        </div>}

        <div id="kb-chat-bottom"></div>
      </div>

      {replyTo[0]&&<div style={{padding:"6px 16px",background:"#f1f5f9",borderTop:"1px solid #e2e8f0",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div style={{fontSize:11,color:"#64748b"}}>{"Replying to: "}{chatMsgs.find(function(x){return x.id===replyTo[0]})?.text?.slice(0,50)||"..."}</div>
        <button onClick={function(){replyTo[1](null)}} style={{background:"none",border:"none",color:"#94a3b8",cursor:"pointer",fontSize:16}}>{"x"}</button>
      </div>}

      {/* RECORDING BAR */}
      {isRecording[0]&&<div style={{padding:"10px 16px",borderTop:"1px solid #dc2626",background:"#fef2f2",display:"flex",alignItems:"center",gap:10}}>
        <div style={{width:10,height:10,borderRadius:"50%",background:"#dc2626",animation:"popIn 1s ease infinite alternate"}}></div>
        <span style={{fontSize:13,color:"#dc2626",fontWeight:700,flex:1}}>Recording... {fmtDur(recTimer[0])}</span>
        <button onClick={cancelRecording} style={{padding:"6px 12px",background:"#fff",border:"1px solid #e2e8f0",borderRadius:8,fontSize:11,color:"#64748b",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Cancel</button>
        <button onClick={stopRecording} style={{padding:"6px 14px",background:"#dc2626",border:"none",borderRadius:8,fontSize:11,color:"#fff",fontWeight:700,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>Send</button>
      </div>}

      {/* INPUT BAR */}
      {!isRecording[0]&&<div style={{padding:"10px 16px",borderTop:"1px solid #e2e8f0",background:"#fff",display:"flex",gap:8,alignItems:"center"}}>
        <button onClick={startRecording} style={{width:36,height:36,borderRadius:"50%",background:"#f1f5f9",border:"1px solid #e2e8f0",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,color:"#64748b"}}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
        </button>
        <input value={inputVal[0]} onChange={function(e){inputVal[1](e.target.value);setTyping()}} onKeyDown={function(e){if(e.key==="Enter")sendMsg()}} placeholder="Type a message..." style={{flex:1,padding:"10px 14px",border:"1px solid #e2e8f0",borderRadius:20,fontSize:13,fontFamily:"'DM Sans',sans-serif",outline:"none",background:"#f8fafc"}}/>
        <button onClick={sendMsg} style={{width:40,height:40,borderRadius:"50%",background:inputVal[0].trim()?"#2563EB":"#cbd5e1",border:"none",color:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0}}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
        </button>
      </div>}
    </div>
  );
}

// === SPOTIFY EMBED COMPONENT ===
function SpotifyEmbed(props){
  var ref=useState(null);
  var containerId="spotify-"+props.type+"-"+props.id;

  useEffect(function(){
    var container=document.getElementById(containerId);
    if(!container)return;
    container.innerHTML="";
    var iframe=document.createElement("iframe");
    iframe.src="https://open.spotify.com/embed/"+props.type+"/"+props.id+"?utm_source=generator&theme=0";
    iframe.width="100%";
    iframe.height=String(props.height||152);
    iframe.frameBorder="0";
    iframe.allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
    iframe.loading="lazy";
    iframe.style.borderRadius="12px";
    iframe.style.border="none";
    container.appendChild(iframe);
  },[props.id,props.type]);

  return <div id={containerId} style={{minHeight:props.height||152}}/>;
}

// === MUSIC (Spotify Embeds - No API Key) ===
function MusicPage({d,up}){
  var savedSongs=useState(d.savedSongs||[]);
  var tab=useState("browse");
  var nowPlaying=useState(null);
  var searchQ=useState("");

  var playlists=[
    {name:"Top Worship Songs",id:"37i9dQZF1DXa2PvUpywmrr",desc:"Spotify's top worship picks"},
    {name:"Worship Now",id:"37i9dQZF1DX0fBxFYjqSgT",desc:"Current worship hits"},
    {name:"Christian Hits",id:"37i9dQZF1DX8UIplKmOuEu",desc:"Popular Christian music"},
    {name:"Praise & Worship",id:"37i9dQZF1DWVnGJMKeQw7T",desc:"Classic praise songs"}
  ];

  var worshipSongs=[
    {title:"Goodness of God",artist:"Bethel Music",spotifyId:"1O6OPFAXdTdjHtT7Z2Hlt8"},
    {title:"Way Maker",artist:"Sinach",spotifyId:"4eTgQdjd7bIet6d045GGUc"},
    {title:"Reckless Love",artist:"Cory Asbury",spotifyId:"6GDAqimaFIlJCxZPOlWNKQ"},
    {title:"What A Beautiful Name",artist:"Hillsong Worship",spotifyId:"1sMBVPGwMjPNTjxWCrplsA"},
    {title:"Holy Spirit",artist:"Francesca Battistelli",spotifyId:"5OGRyJVbNfqEOuEANkxJNJ"},
    {title:"Build My Life",artist:"Housefires",spotifyId:"2JOYbRDpflKmXYhP8U2KeN"},
    {title:"Great Are You Lord",artist:"All Sons and Daughters",spotifyId:"1P5GOqMCQsBmXmHUoO3stx"},
    {title:"King of Kings",artist:"Hillsong Worship",spotifyId:"0p1fRQPgKyGsMWBmPngjUu"},
    {title:"Oceans",artist:"Hillsong United",spotifyId:"5Mw9bXG1dLNhbjofkVS2oR"},
    {title:"10,000 Reasons",artist:"Matt Redman",spotifyId:"4KCGd1M4IO2T0vO0alF9o1"},
    {title:"Graves Into Gardens",artist:"Elevation Worship",spotifyId:"6Y8cHsIG8V02D1YnghRZeR"},
    {title:"The Blessing",artist:"Kari Jobe",spotifyId:"4WYApvD2fQCcEqMGsAzLeB"},
    {title:"Raise A Hallelujah",artist:"Bethel Music",spotifyId:"5G2f9nyrKGuRzR1OYmbvHB"},
    {title:"Lion and the Lamb",artist:"Bethel Music",spotifyId:"0HE3SH6fvxdRIUq54HjVq0"},
    {title:"Who You Say I Am",artist:"Hillsong Worship",spotifyId:"6K4tnbH6ICQWrErVEeVXgN"},
    {title:"Battle Belongs",artist:"Phil Wickham",spotifyId:"2o6fMMQReEWoEBGELUMEXM"},
    {title:"Firm Foundation",artist:"Maverick City Music",spotifyId:"3LjLRmaFCmatEOVMYFeDzQ"},
    {title:"Jireh",artist:"Maverick City Music",spotifyId:"7puRBNd0TNqZwR8uqFvE3P"},
    {title:"Living Hope",artist:"Phil Wickham",spotifyId:"3MRX5fV6FVyGbFFWM0YESN"},
    {title:"O Come to the Altar",artist:"Elevation Worship",spotifyId:"3LkkfOHDvAHBFbueP1ByaD"},
    {title:"How Great Is Our God",artist:"Chris Tomlin",spotifyId:"3uH5q6QxkdMJCsE8665rBH"},
    {title:"Amazing Grace (My Chains Are Gone)",artist:"Chris Tomlin",spotifyId:"1etiAXK4rSKTQnIOTnWJOR"},
    {title:"Here I Am to Worship",artist:"Tim Hughes",spotifyId:"5lZSJrLMSTDMHe8SfvCK5B"},
    {title:"Blessed Be Your Name",artist:"Matt Redman",spotifyId:"79eSJuL95y6BBQN6aAJb8c"}
  ];

  var filtered=worshipSongs;
  if(searchQ[0].trim()){
    var q=searchQ[0].toLowerCase();
    filtered=worshipSongs.filter(function(s){
      return s.title.toLowerCase().indexOf(q)>=0||s.artist.toLowerCase().indexOf(q)>=0;
    });
  }

  function saveSong(song){
    if(savedSongs[0].find(function(s){return s.spotifyId===song.spotifyId}))return;
    var updated=savedSongs[0].concat([song]);
    savedSongs[1](updated);up("savedSongs",updated);
  }
  function removeSong(sid){
    var updated=savedSongs[0].filter(function(s){return s.spotifyId!==sid});
    savedSongs[1](updated);up("savedSongs",updated);
  }

  var tabSt=function(active){return{flex:1,padding:"8px 4px",background:active?"#1DB954":"transparent",border:"none",borderRadius:8,fontSize:11,fontWeight:700,color:active?"#fff":"#64748b",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}};

  function SongRow(props){
    var s=props.song;var isSaved=savedSongs[0].find(function(x){return x.spotifyId===s.spotifyId});var isPlaying=nowPlaying[0]===s.spotifyId;
    return(
      <div className="kb-card" style={{background:"#fff",borderRadius:12,border:isPlaying?"2px solid #1DB954":"1px solid #e2e8f0",marginBottom:6,overflow:"hidden"}}>
        <div style={{display:"flex",alignItems:"center",gap:10,padding:"10px 12px"}}>
          <button onClick={function(){nowPlaying[1](isPlaying?null:s.spotifyId)}} style={{width:36,height:36,borderRadius:"50%",background:isPlaying?"#1DB954":"#f1f5f9",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,color:isPlaying?"#fff":"#1DB954"}}>
            {isPlaying?<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
            :<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>}
          </button>
          <div style={{flex:1,minWidth:0}}>
            <div style={{fontSize:13,fontWeight:700,color:"#0f172a",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{s.title}</div>
            <div style={{fontSize:11,color:"#64748b"}}>{s.artist}</div>
          </div>
          {props.canSave&&!isSaved&&<button onClick={function(){saveSong(s)}} style={{padding:"4px 10px",background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:6,fontSize:10,fontWeight:600,color:"#059669",cursor:"pointer",fontFamily:"'DM Sans',sans-serif",whiteSpace:"nowrap"}}>+ Save</button>}
          {isSaved&&!props.canRemove&&<span style={{fontSize:9,color:"#1DB954",fontWeight:600}}>Saved</span>}
          {props.canRemove&&<button onClick={function(){removeSong(s.spotifyId)}} style={S.rm}>{Ic.x}</button>}
        </div>
        {isPlaying&&<div style={{padding:"0 12px 12px"}}>
          <SpotifyEmbed type="track" id={s.spotifyId} height={80}/>
        </div>}
      </div>
    );
  }

  return(<div style={S.pg}>
    <h2 style={{...S.ti,display:"flex",alignItems:"center",gap:8}}><span style={{color:"#1DB954"}}>{"\uD83C\uDFB5"}</span> Music</h2>

    <div style={{display:"flex",gap:4,marginBottom:12,background:"#f1f5f9",borderRadius:10,padding:3}}>
      <button onClick={function(){tab[1]("browse")}} style={tabSt(tab[0]==="browse")}>Browse</button>
      <button onClick={function(){tab[1]("saved")}} style={tabSt(tab[0]==="saved")}>Saved ({savedSongs[0].length})</button>
      <button onClick={function(){tab[1]("playlists")}} style={tabSt(tab[0]==="playlists")}>Playlists</button>
    </div>

    {tab[0]==="browse"&&<div>
      <div style={{position:"relative",marginBottom:12}}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" style={{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)"}}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input value={searchQ[0]} onChange={function(e){searchQ[1](e.target.value)}} placeholder="Search songs, artists..." style={{...S.inp,paddingLeft:34,width:"100%"}}/>
      </div>
      <div style={{display:"flex",gap:4,flexWrap:"wrap",marginBottom:12}}>
        {["Hillsong","Bethel","Elevation","Maverick City","Chris Tomlin","Phil Wickham","Matt Redman","Kari Jobe"].map(function(q){return(
          <button key={q} onClick={function(){searchQ[1](searchQ[0]===q?"":q)}} style={{padding:"4px 10px",background:searchQ[0]===q?"#1DB954":"#f8fafc",border:"1px solid "+(searchQ[0]===q?"#1DB954":"#e2e8f0"),borderRadius:20,fontSize:10,color:searchQ[0]===q?"#fff":"#64748b",cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>{q}</button>
        )})}
      </div>
      <p style={{fontSize:10,color:"#94a3b8",marginBottom:8}}>{filtered.length} songs{searchQ[0]?" matching \""+searchQ[0]+"\"":""}</p>
      {filtered.map(function(s){return <SongRow key={s.spotifyId} song={s} canSave={true}/>})}
      {filtered.length===0&&<p style={{fontSize:12,color:"#94a3b8",textAlign:"center",padding:20}}>No songs match. Try a different keyword.</p>}
    </div>}

    {tab[0]==="saved"&&<div>
      {savedSongs[0].length===0&&<div style={{textAlign:"center",padding:40}}>
        <span style={{fontSize:40}}>{"\uD83C\uDFB5"}</span>
        <p style={{fontSize:13,color:"#94a3b8",marginTop:8}}>No saved songs yet. Browse and save your favourites!</p>
      </div>}
      {savedSongs[0].map(function(s){return <SongRow key={s.spotifyId} song={s} canRemove={true}/>})}
    </div>}

    {tab[0]==="playlists"&&<div>
      <p style={{fontSize:11,color:"#64748b",marginBottom:10}}>Worship playlists from Spotify</p>
      {playlists.map(function(pl){return(
        <div key={pl.id} className="kb-card" style={{background:"#fff",borderRadius:12,border:"1px solid #e2e8f0",marginBottom:8,overflow:"hidden",padding:12}}>
          <div style={{fontSize:13,fontWeight:700,color:"#0f172a"}}>{pl.name}</div>
          <div style={{fontSize:11,color:"#64748b",marginBottom:8}}>{pl.desc}</div>
          <SpotifyEmbed type="playlist" id={pl.id} height={152}/>
        </div>
      )})}
    </div>}
  </div>);
}

window.App = App;
