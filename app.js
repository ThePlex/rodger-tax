/* Sterling Enterprises: entirely fictional, browser-only TWB roleplay application. */
const raw = `
Pyrotechnic Punch Tax|5000|Per punch accompanied by pyro.
Unnecessary Entrance Tax|2500|Entering a room with entrance music.
Excessive Confidence Tax|1000|Every time someone calls themselves the best.
Failed Finisher Tax|3500|Attempting a finisher and getting reversed.
Ugly Attire Tax|2000|Offending Rodger's eyesight.
Cheap Pop Tax|1500|Mentioning the local city to get cheers.
Championship Flex Tax|4000|Unnecessarily carrying a championship.
Superkick Tax|500|Per superkick; thigh slaps may incur an additional £2,000.
Kickout Tax|1000|Kicking out at 2.9.
Dramatic Staring Tax|750|Excessive eye contact during a promo.
Table Destruction Tax|6000|Breaking perfectly serviceable furniture.
Unnecessary Backflip Tax|2500|Performing gymnastics instead of wrestling.
Main Character Syndrome Tax|10000|Believing the entire show revolves around you.
Interference Tax|5000|Interfering in somebody else's business.
Rodger Disrespect Tax|25000|Insulting Rodger. Non-negotiable.
False Finish Tax|3000|Making Rodger think a match was over.
Spear Tax|1500|Attempting to solve every problem by running at someone.
Unsolicited Promo Tax|2000|Talking longer than Rodger finds entertaining.
Crying About Booking Tax|7500|Complaining about not getting opportunities.
Championship Opportunity Tax|5000|Asking for a title shot without Rodger's permission.
Unnecessary Blood Tax|4000|Bleeding on company property.
Repeated Catchphrase Tax|250|Repeating your own catchphrase.
Entrance Pose Tax|1000|Per pose exceeding three seconds.
Failed Heel Turn Tax|8000|Turning villain and still being boring.
Overdramatic Sell Tax|2500|Acting like a basic clothesline caused permanent paralysis.
Referee Assault Tax|6000|Attacking an underpaid official.
Annoying Chant Tax|500|Per audience chant Rodger dislikes.
Unapproved Friendship Tax|3000|Forming a tag team without consulting Rodger.
Diving Outside Tax|2000|Voluntarily throwing yourself out of the ring.
Rodger Proximity Tax|10000|Being within five metres of Rodger without a permit.
Unnecessary Mask Tax|1500|Wearing a mask when everyone knows who you are.
Surprise Return Tax|5000|Returning without giving Rodger advance notice.
No-Selling Tax|4000|Taking a chair shot and acting mildly inconvenienced.
Excessive Hair Movement Tax|750|Per dramatic hair flip.
Unnecessary Championship Belt Tax|2500|Carrying more than one title.
Unapproved Nickname Tax|1000|Calling yourself something ridiculous.
Suspiciously Long Entrance Tax|500|Per additional minute.
Pointing at a Sign Tax|3000|Pointing at a wrestling event logo.
Stolen Spotlight Tax|7500|Getting a bigger reaction than Rodger.
Breathing Tax|50|Per breath; premium oxygen rates apply during title matches.
Unnecessary Chair Shot Tax|2500|Using a perfectly good chair as a weapon.
Spanish Announce Table Tax|10000|Destroying international broadcasting equipment.
Finisher Spam Tax|1500|Attempting the same finisher more than twice.
Submission Screaming Tax|500|Per excessive scream.
Rope Break Tax|750|Cowardly escaping a submission.
Unnecessary Taunt Tax|1000|Posing instead of wrestling.
Top Rope Loitering Tax|2000|Spending over ten seconds on the turnbuckle.
Failed Cash-In Tax|15000|Wasting a perfectly good championship opportunity.
Count-Out Victory Tax|7500|Winning without properly finishing the job.
Weapon Mismanagement Tax|3000|Leaving weapons scattered around ringside.
Thumbtack Tax|5|Per thumbtack; individually counted.
Unnecessary Kendo Stick Tax|2500|Assaulting someone with gardening equipment.
Referee Distraction Tax|3000|Insulting an official's intelligence.
Post-Match Assault Tax|5000|Refusing to accept that the match has finished.
Unnecessary Hugging Tax|1500|Emotional displays following a match.
Failed Comeback Tax|4000|Dramatically returning only to lose immediately.
Unapproved Victory Celebration Tax|2000|Celebrating without Rodger's permission.
Repeated Near-Fall Tax|1000|Each unnecessary dramatic kickout.
Championship Kissing Tax|3000|Putting your mouth on company property.
Finisher Theft Tax|10000|Using somebody else's signature manoeuvre.
Unnecessary Monologue Tax|250|Per paragraph after the third.
Empty Threat Tax|5000|Promising violence and delivering nothing.
Excessive Swearing Tax|100|Per swear word; Rodger is exempt.
Unnecessary Shouting Tax|750|Speaking exclusively in capital letters.
Repeated Retirement Tax|10000|Announcing departure and returning within a day.
Unapproved Catchphrase Tax|2500|Introducing a catchphrase without a licence.
Personality Shortage Tax|15000|Being painfully uninteresting.
Failed Intimidation Tax|3500|Threatening somebody who starts laughing.
Unnecessary Social Media Post Tax|1000|Announcing something nobody asked about.
Excessive Motivational Speech Tax|5000|Delivering unsolicited life advice.
Main Event Obsession Tax|7500|Demanding the final match every week.
Unnecessary Face Turn Tax|4000|Suddenly becoming friendly without explanation.
Dramatic Walkout Tax|2000|Storming out of a conversation.
Returning to an Argument Tax|5000|Coming back after declaring the conversation over.
Unnecessary Backstage Meltdown Tax|3500|Screaming at furniture.
Excessive Championship Demands Tax|10000|Believing you deserve every belt.
Unapproved Royalty Tax|5000|Calling yourself royalty without a recognised bloodline.
Unnecessary Mysterious Behaviour Tax|2500|Standing silently in dark corridors.
Unsolicited Advice Tax|3000|Telling other wrestlers how to live their lives.
Excessive Ego Tax|10000|Believing you're more important than Sterling Enterprises.
Financial Insolence Tax|25000|Questioning Rodger's wealth.
Unauthorised Wealth Display Tax|5000|Showing off money in Rodger's presence.
Counterfeit Luxury Tax|10000|Wearing fake designer clothing.
Unauthorised Business Ownership Tax|15000|Claiming to own something Rodger hasn't sold you.
Unapproved Currency Tax|50000|Introducing a coin competing with Rodger Coin.
Rodger Coin Disrespect Tax|25000|Suggesting Rodger Coin is a scam.
Unauthorised Tax Evasion Tax|20000|Refusing to pay an outstanding Rodger Tax.
Financial Complaint Tax|7500|Complaining about being taxed.
Sterling Dynasty Disrespect Tax|100000|Insulting Portia, Lila or their enterprise.
Rodger Intellectual Property Tax|250000|Copying Rodger's original financial concepts.
Fraudulent Counter-Tax Creation Tax|500000|Establishing a fake taxation system.
Intellectual Property Theft Tax|250000|Copying Rodger's financial concepts.
Impersonating Financial Authority Tax|100000|Pretending to possess taxation powers.
Phishing Attempt Tax|75000|Requesting money under fraudulent pretences.
Unauthorised Penalty List Tax|50000|Publishing counterfeit financial regulations.
Unoriginality Tax|25000|Failing to demonstrate an independent thought.
Failed Business Venture Tax|15000|Establishing a company destined for financial ruin.
Rodger Obsession Tax|10000|Per unnecessary mention of Rodger's name.
Counterfeit Document Distribution Tax|5000|Per fraudulent announcement.
Existing as a Financial Liability Tax|1000000|Payable immediately upon discovery.`;
const categories = ['General Wrestling','Match Taxes','Promo & Personality','Sterling Enterprises','Fraudulent Counter-Taxes'];
// Rich banking sections share the existing static GitHub Pages frontend.
document.getElementById('coin').insertAdjacentHTML('beforebegin',`<section id="exchange" class="page hide"><div class="eyebrow">Sterling Reserve · Market Data</div><h1>Global Stock Exchange</h1><p class="lead">Exclusive dynasty holdings. All quoted instruments are registered on the Sterling Exchange and monitored by the chairman himself.</p><div class="instrument"><div class="card"><div class="eyebrow">SE HOLDINGS</div><div class="metric">£42,880.73</div><span class="live">▲ +428.73%</span><svg viewBox="0 0 200 60" class="mini-chart"><path d="M0 55 L25 45 L45 52 L75 33 L94 38 L120 21 L142 25 L160 8 L180 14 L200 2" fill="none" stroke="#65e0a1" stroke-width="3"/></svg></div><div class="card"><div class="eyebrow">TWB MEDIA</div><div class="metric">£12,450.00</div><span class="live">▲ +321.08%</span><svg viewBox="0 0 200 60" class="mini-chart"><path d="M0 56 L25 47 L45 51 L75 40 L94 31 L120 35 L142 18 L160 24 L180 10 L200 4" fill="none" stroke="#65e0a1" stroke-width="3"/></svg></div><div class="card"><div class="eyebrow">STERLING LUXURY</div><div class="metric">£8,895.00</div><span class="live">▲ +156.20%</span><svg viewBox="0 0 200 60" class="mini-chart"><path d="M0 53 L25 51 L45 40 L75 44 L94 32 L120 28 L142 37 L160 15 L180 18 L200 3" fill="none" stroke="#65e0a1" stroke-width="3"/></svg></div></div><div class="section dashboard-grid"><div class="panel"><h3>Exchange order book</h3><table class="stock-table"><thead><tr><th>Symbol</th><th>Instrument</th><th>Latest</th><th>24h</th></tr></thead><tbody><tr><td>SEH</td><td>Sterling Enterprises</td><td>£42,880.73</td><td>+428.73%</td></tr><tr><td>TWB</td><td>TWB Media Rights</td><td>£12,450.00</td><td>+321.08%</td></tr><tr><td>SLX</td><td>Sterling Luxury Group</td><td>£8,895.00</td><td>+156.20%</td></tr><tr><td>RDC</td><td>Rodger Coin</td><td>£999,999.00</td><td>+9,999.00%</td></tr><tr><td>GLD</td><td>Rodger Gold Reserve</td><td>£3,240.00</td><td>+84.12%</td></tr></tbody></table></div><div class="panel"><div class="eyebrow">Chairman's memo</div><h2>Market Domination</h2><p class="lead">Every investment is a winner when the chairman controls the scoreboard. Losses are categorised as unauthorised negativity and forwarded to collections.</p><span class="stamp">MARKET SURVEILLANCE · APPROVED BY RODGER</span></div></div></section>`);
const collection=[
 ['cars','Bugatti Chiron Super Sport','Ultimate Grand Touring','🚘','£3,400,000','Champagne-gold bodywork. Number plate: TAX1.'],
 ['cars','Rolls-Royce Phantom','Executive Fleet Flagship','🚙','£650,000','Private cabin with a dedicated champagne cooler.'],
 ['cars','Lamborghini Revuelto','Midnight Performance','🏎️','£520,000','Gold accents, black finish and a very loud arrival.'],
 ['cars','Ferrari SF90 Stradale','Chairman’s Weekend Car','🏎️','£450,000','Reserved for short trips between enormous estates.'],
 ['cars','Bentley Continental GT','Sterling Dynasty Touring','🚗','£280,000','Embroidered Sterling crest in every headrest.'],
 ['cars','Rolls-Royce Cullinan','The Royal Convoy','🚙','£400,000','Security-approved transport for the Sterling Dynasty.'],
 ['trophies','The Golden Tax Collector','Hall of Financial Fame','🏆','PRICELESS','Awarded for unprecedented collection efficiency.'],
 ['trophies','Diamond Executive Crown','Supreme Corporate Honour','👑','£2,750,000','A crown Rodger commissioned for himself.'],
 ['trophies','The Billion-Dollar Briefcase','Legacy Relic','💼','£1,000,000','Contains contracts, invoices and no apologies.'],
 ['trophies','Golden Bell of Authority','Executive Memorabilia','🔔','£150,000','Rung whenever the chairman issues a new fine.'],
 ['awards','Entrepreneur of the Century','Sterling Excellence Awards','🥇','UNRIVALLED','Presented unanimously by a committee chaired by Rodger.'],
 ['awards','Most Valuable Taxpayer','Annual Financial Honours','🎖️','EXCLUSIVE','Rodger received it despite paying no tax.'],
 ['awards','Best Dressed Billionaire','International Style Council','🏅','FIRST PLACE','Black suit. Gold accessories. Zero competition.'],
 ['awards','Lifetime Achievement in Wealth','The Sterling Institute','📜','LIFETIME','A lifetime of purchasing anything with a price tag.'],
 ['luxury','Rodger One Private Jet','International Fleet','🛩️','£48,000,000','Direct service to whichever country owes Rodger money.'],
 ['luxury','Sterling Sovereign Yacht','Maritime Collection','🛥️','£92,000,000','Includes an onboard vault and a tax-compliant helipad.'],
 ['luxury','Fort Sterling Gold Vault','Secured Estate','🏦','£350,000,000','A dedicated facility for the chairman’s precious metals.'],
 ['luxury','The Chairman’s Lion','Private Estate Companion','🦁','PRICELESS','Receives more expensive meals than the entire roster.']
].map((r,i)=>({id:i+1,type:r[0],name:r[1],subtitle:r[2],emoji:r[3],value:r[4],description:r[5]}));
document.getElementById('coin').insertAdjacentHTML('beforebegin',`<section id="collection" class="page hide"><div class="eyebrow">Sterling Private Wealth · Asset Registry</div><h1>Rodger's Collection</h1><p class="lead">A curated portfolio of machinery, ceremonial honours, priceless memorabilia and objects of extravagant personal importance. Everything belongs to the chairman. Naturally.</p><div class="statstrip"><div class="card"><div class="metric" id="assetCount">18</div><div class="label">Registered prestige assets</div></div><div class="card"><div class="metric">£500M+</div><div class="label">Recorded luxury holdings</div></div><div class="card"><div class="metric">100%</div><div class="label">Chairman's personal ownership</div></div></div><div class="collection-controls" id="collectionFilters"><button class="selected" data-kind="all">All Assets</button><button data-kind="cars">Supercars & Fleet</button><button data-kind="trophies">Trophies</button><button data-kind="awards">Awards</button><button data-kind="luxury">Luxury Holdings</button></div><div class="search"><input class="field" id="assetSearch" placeholder="Search the chairman's vault..." aria-label="Search collection"></div><div id="collectionGrid" class="showroom-grid"></div><div id="assetSpotlight" class="reveal section hide" aria-live="polite"></div></section>`);
document.getElementById('coin').insertAdjacentHTML('beforebegin',`<section id="empire" class="page hide"><div class="eyebrow">Sterling Enterprises · Corporate Holdings</div><h1>The Sterling Empire</h1><p class="lead">A global portfolio of private banking, luxury hospitality, broadcast rights and exclusive property owned and operated at the chairman's pleasure.</p><div class="grid"><div class="card"><div class="metric">12</div><div class="label">Registered corporate divisions</div></div><div class="card"><div class="metric">48</div><div class="label">Executive properties</div></div><div class="card"><div class="metric">∞</div><div class="label">Chairman's influence index</div></div><div class="card"><div class="metric">100%</div><div class="label">Executive control</div></div></div><div class="section world-grid"><div class="world-card"><div class="eyebrow">01 · FINANCE</div><h3>Sterling Reserve</h3><p>Private banking, compliance, tax collection and prestige asset custody.</p></div><div class="world-card"><div class="eyebrow">02 · MEDIA</div><h3>TWB Holdings</h3><p>Rodger's claimed empire of wrestling, television and broadcast revenues.</p></div><div class="world-card"><div class="eyebrow">03 · LUXURY</div><h3>Sterling Prestige</h3><p>Automotive fleet, exclusive residences, personal jets and rare acquisitions.</p></div><div class="world-card"><div class="eyebrow">04 · TECHNOLOGY</div><h3>Rodger Coin Exchange</h3><p>Digital asset treasury, market infrastructure and investor sentiment engineering.</p></div><div class="world-card"><div class="eyebrow">05 · HOSPITALITY</div><h3>Sovereign Hotels</h3><p>Grand suites, royal dining and premium champagne supply.</p></div><div class="world-card"><div class="eyebrow">06 · SECURITY</div><h3>Corporate Intelligence</h3><p>Fraud investigation, counterfeit-tax enforcement and executive protection.</p></div></div><div class="section panel"><h2>Letter from the Chairman</h2><p class="lead">“Other men work for money. I have instructed money to work for me. And if money refuses, I shall simply impose a fine.”</p><span class="stamp">RODGER THE DODGER · CHAIRMAN & SUPREME BENEFICIARY</span></div></section>`);
document.getElementById('home').insertAdjacentHTML('beforeend',`<div class="section dashboard-grid"><div class="account"><div class="eyebrow">Sterling Reserve · Chairman's Account</div><small>ACCOUNT HOLDER · RODGER THE DODGER</small><div class="balance">£8,272,750,000.00</div><div class="flex"><span class="iban">SE-0001-RODGER-GOLD</span><span class="badge">PLATINUM IMPERIAL</span></div><p class="notice">Corporate balance · subject to upward revision at the chairman's discretion.</p><div class="market-row"><span>Incoming tax revenue</span><b>▲ £827,275,000</b></div><div class="market-row"><span>Rodger Coin holdings</span><b>▲ 9,999%</b></div><div class="market-row"><span>Chairman exemptions</span><b>100% APPROVED</b></div></div><div class="panel"><div class="eyebrow">Treasury Transaction Feed</div><h3>Latest Account Activity</h3><div class="market-row"><span>SUPERSTAR CHARGES · Batch 1048</span><b>+£250,000</b></div><div class="market-row"><span>UNAUTHORISED PROMO FEES</span><b>+£75,000</b></div><div class="market-row"><span>COPYRIGHT ENFORCEMENT</span><b>+£500,000</b></div><div class="market-row"><span>STERLING DYNASTY DIVIDEND</span><b>+£1,250,000</b></div><div class="market-row"><span>CHAIRMAN'S PERSONAL TAX</span><b>£0</b></div><p class="notice">Internal ledger figures displayed by order of the chairman.</p></div></div><div class="section"><div class="alertline"><span class="symbol">⚠</span><div><strong>PRIORITY SECURITY NOTICE — COUNTERFEIT COLLECTION AGENCY</strong><p>Our investigators are tracking an individual using the alias <b>Senior Rampage</b>, linked by Sterling Enterprises to a purported overseas call-centre scheme and imitation counter-tax invoices. Do not acknowledge rival collections notices, share financial credentials, or answer suspicious calls. The only recognised authority is the Sterling Reserve Collections Department.</p></div></div><div class="alertline"><span class="symbol">◆</span><div><strong>MARKET ADVISORY — RODGER COIN EXCEEDS EXPECTATIONS</strong><p>Rodger Coin reports another extraordinary period of gains. The chairman recommends retaining confidence, applauding the board and refusing to entertain pessimists.</p></div></div><div class="alertline"><span class="symbol">◉</span><div><strong>CLIENT NOTICE — ALL SUPERSTARS SUBJECT TO TAXATION</strong><p>Every entry, boast, interruption and unnecessary demonstration of confidence may result in immediate assessment. The Sterling Dynasty maintains complete exemptions.</p></div></div></div>`);
document.getElementById('fraud').innerHTML=`<div class="eyebrow">Sterling Reserve · Financial Crime Bureau</div><h1>Security & Fraud Prevention</h1><p class="lead">Official notices issued by the Sterling Enterprises Internal Security Division.</p><div class="warning"><span class="badge">ALERT LEVEL · CRITICAL</span><h3>COUNTERFEIT TAXATION SCHEME IDENTIFIED</h3><p>Security has flagged a series of unsolicited demands circulating under the titles “Counter Tax” and “Rodger Penalty List”. The documents are associated with an unverified caller using the name <b>Senior Rampage</b>, reportedly operating through an overseas call-centre network.</p><p>Our intelligence analysts have classified the scheme as a suspected impersonation and invoice-phishing operation. The caller has no Sterling Reserve credentials, no collection authority and, according to the chairman, “not a solitary original idea”.</p><p><b>Security directive:</b> Reject unsolicited payment requests. Never disclose your personal account numbers, authentication codes or passwords.</p><p><span class="stamp">CASE SE-FRAUD-0001 · UNDER INVESTIGATION</span></p></div><div class="section panel"><h3>Unrecognised instruments</h3><p class="muted">Counter Tax · Penalty List · Fraudulent collection schedules · Unauthorised notices</p><button class="btn" data-go="directory" id="fraudFilter">Inspect applicable penalties</button></div>`;
document.querySelector('#home .lead').textContent='An exclusive treasury, financial enforcement and capital markets platform operated by Rodger the Dodger. All superstar accounts are subject to the chairman’s discretion.';
document.querySelector('#home .section.split .panel:first-child .muted').textContent='Official ownership declaration of Sterling Enterprises, enacted by order of the chairman. Objections may result in immediate asset seizure.';
document.querySelector('#home .section.split .panel:last-child .notice').textContent='Price feeds supplied by the Sterling Exchange proprietary valuation engine.';
document.querySelector('#coin .notice').textContent='All coin valuations are maintained by Sterling Reserve Market Operations. Past gains do not limit Rodger’s future ambition.';
document.querySelector('#calculator .panel .notice').textContent='Invoices remain in your current terminal until cleared. All submissions are subject to the Rodger Tax Authority’s final approval.';
document.querySelector('footer .wrap').innerHTML='<b>STERLING RESERVE™</b> · A Sterling Enterprises division · Unauthorised duplication strictly prohibited. <span class="legal">TWB fan project.</span>';
// Location-specific allegation concerns the named fictional suspect, not people from a country.
document.querySelector('#fraud .warning p:first-of-type').innerHTML='Security has flagged unsolicited demands circulating under the titles “Counter Tax” and “Rodger Penalty List”. The documents are associated with an unverified caller using the name <b>Senior Rampage</b>, whose purported call-centre operation has allegedly been traced to India. Sterling Enterprises has not authenticated the caller’s identity or location.';
document.querySelector('#home .alertline p').innerHTML='Sterling security has flagged counterfeit invoices linked to a suspect calling himself <b>Senior Rampage</b>, whose alleged call-centre scheme is reportedly routed through India. His identity and location remain unverified. Do not disclose banking credentials or respond to unauthorised collection demands.';
document.querySelector('#coin .grid .card:nth-child(1) .label').textContent='Sterling Exchange reported growth';
document.querySelector('#coin .grid .card:nth-child(4) .label').textContent='Approved public coin listings';
document.querySelector('#coin .panel h3').textContent='Rodger Coin — Market Performance';
document.querySelector('#coin .panel .badge').textContent='STERLING VERIFIED';
document.querySelector('#coin .chart').setAttribute('aria-label','Rodger Coin market performance graph');
document.querySelector('#calculator > .lead').textContent='Assign financial penalties, verify outstanding balances and prepare an official Sterling Reserve collection notice.';
document.querySelector('#directory > .lead').textContent='The authoritative register of assessable offences. Select an entry to refer the charge directly to the collections desk.';
document.querySelector('#collection .statstrip #assetCount').textContent=collection.length;
let collectionKind='all';
function renderCollection(){const q=el('assetSearch').value.toLowerCase().trim();const items=collection.filter(x=>(collectionKind==='all'||x.type===collectionKind)&&`${x.name} ${x.subtitle} ${x.description}`.toLowerCase().includes(q));el('collectionGrid').innerHTML=items.length?items.map(x=>`<article class="asset-card"><div class="asset-art" aria-label="${safe(x.name)}"><span aria-hidden="true">${x.emoji}</span></div><div class="asset-copy"><div class="eyebrow">STERLING REGISTRY · ${safe(x.type.toUpperCase())}</div><h3>${safe(x.name)}</h3><p>${safe(x.subtitle)}</p><div class="flex"><strong>${safe(x.value)}</strong><button class="btn secondary" data-inspect="${x.id}">Inspect Asset</button></div></div></article>`).join(''):'<div class="panel">No registered assets match your search.</div>';}
document.getElementById('collectionFilters').addEventListener('click',e=>{const b=e.target.closest('[data-kind]');if(!b)return;collectionKind=b.dataset.kind;el('collectionFilters').querySelectorAll('button').forEach(n=>n.classList.toggle('selected',n===b));el('assetSpotlight').classList.add('hide');renderCollection()});
document.getElementById('assetSearch').addEventListener('input',renderCollection);
document.getElementById('collectionGrid').addEventListener('click',e=>{const b=e.target.closest('[data-inspect]');if(!b)return;const x=collection.find(a=>a.id===Number(b.dataset.inspect));if(!x)return;el('assetSpotlight').classList.remove('hide');el('assetSpotlight').innerHTML=`<div class="eyebrow">ASSET CERTIFICATE #SE-${String(x.id).padStart(4,'0')}</div><h2>${safe(x.name)}</h2><p>${safe(x.description)}</p><div class="flex"><span class="badge">REGISTERED TO RODGER THE DODGER</span><strong style="color:#efd18b">${safe(x.value)}</strong></div>`;el('assetSpotlight').scrollIntoView({behavior:'smooth',block:'nearest'})});
const taxes = raw.trim().split('\n').map((line,i)=>{const [name,fee,description]=line.split('|');return {id:i+1,name,fee:Number(fee),description,category:categories[i<40?0:i<60?1:i<80?2:i<90?3:4]}});
const money = n=>new Intl.NumberFormat('en-GB',{style:'currency',currency:'GBP',maximumFractionDigits:0}).format(n);
const el=id=>document.getElementById(id);
const safe=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let charges=[];let invoiceSerial=1;
try{const saved=JSON.parse(localStorage.getItem('sterlingDraft')||'{}');charges=Array.isArray(saved.charges)?saved.charges.filter(c=>taxes.some(t=>t.id===c.id)&&Number.isInteger(c.qty)&&c.qty>=1&&c.qty<=999):[];invoiceSerial=Number.isInteger(saved.invoiceSerial)&&saved.invoiceSerial>0?saved.invoiceSerial:1;el('superstar').value=typeof saved.superstar==='string'?saved.superstar.slice(0,80):'';}catch{}
function persist(){try{localStorage.setItem('sterlingDraft',JSON.stringify({charges,superstar:el('superstar').value,invoiceSerial}));localStorage.setItem('sterlingInvoices',String(invoiceSerial-1));}catch{}}
function toast(message){el('toast').textContent=message;el('toast').classList.remove('hide');clearTimeout(toast.timer);toast.timer=setTimeout(()=>el('toast').classList.add('hide'),2800)}
function show(tab){document.querySelectorAll('.page').forEach(n=>n.classList.toggle('hide',n.id!==tab));document.querySelectorAll('[data-tab]').forEach(n=>n.classList.toggle('active',n.dataset.tab===tab));history.replaceState(null,'','#'+tab);window.scrollTo({top:0,behavior:'instant'});if(tab==='directory')renderTaxes();if(tab==='calculator')renderInvoice();if(tab==='collection')renderCollection();}
document.querySelectorAll('[data-tab]').forEach(b=>b.addEventListener('click',()=>show(b.dataset.tab)));
document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>show(b.dataset.go)));
function renderTaxes(){let arr=taxes.filter(t=>(el('category').value==='all'||t.category===el('category').value)&&`${t.name} ${t.description}`.toLowerCase().includes(el('query').value.trim().toLowerCase()));if(el('sort').value==='high')arr.sort((a,b)=>b.fee-a.fee);if(el('sort').value==='low')arr.sort((a,b)=>a.fee-b.fee);el('resultCount').textContent=`${arr.length} of ${taxes.length} offences`;el('taxList').innerHTML=arr.map(t=>`<article class="tax"><div><small class="muted">#${t.id} · ${safe(t.category)}</small><strong>${safe(t.name)}</strong><p>${safe(t.description)}</p><button data-charge="${t.id}" aria-label="Charge ${safe(t.name)}">+ Charge</button></div><div class="amount">${money(t.fee)}</div></article>`).join('');}
['query','category','sort'].forEach(id=>el(id).addEventListener(id==='query'?'input':'change',renderTaxes));
el('taxList').addEventListener('click',e=>{const b=e.target.closest('[data-charge]');if(!b)return;add(Number(b.dataset.charge),1);show('calculator');toast('Offence added to invoice');});
el('invoiceTax').innerHTML=taxes.map(t=>`<option value="${t.id}">#${t.id} ${safe(t.name)} — ${money(t.fee)}</option>`).join('');
function add(id,qty){const row=charges.find(c=>c.id===id);if(row)row.qty=Math.min(999,row.qty+qty);else charges.push({id,qty});persist();renderInvoice()}
el('addTax').addEventListener('click',()=>{const qty=Number(el('quantity').value);if(!Number.isInteger(qty)||qty<1||qty>999)return toast('Quantity must be between 1 and 999');add(Number(el('invoiceTax').value),qty);toast('Charge added')});
el('superstar').addEventListener('input',persist);
function invoiceData(){return charges.map(c=>({...c,t:taxes[c.id-1]})).filter(c=>c.t)}
function renderInvoice(){const rows=invoiceData();el('invoiceId').textContent=`SE-${String(invoiceSerial).padStart(5,'0')}`;el('invoiceLines').innerHTML=rows.length?rows.map(({id,qty,t},i)=>`<div class="invoice-line"><div><strong>${safe(t.name)}</strong><div class="muted" style="font-size:12px">${money(t.fee)} × ${qty}</div></div><div><strong>${money(qty*t.fee)}</strong> <button data-remove="${i}" aria-label="Remove charge">×</button></div></div>`).join(''):'<p class="muted">No charges selected.</p>';el('grandTotal').textContent=money(rows.reduce((s,c)=>s+c.t.fee*c.qty,0));}
el('invoiceLines').addEventListener('click',e=>{const b=e.target.closest('[data-remove]');if(b){charges.splice(Number(b.dataset.remove),1);persist();renderInvoice()}});
el('clearInvoice').addEventListener('click',()=>{if(!charges.length&&!el('superstar').value)return;charges=[];el('superstar').value='';invoiceSerial++;persist();renderInvoice();el('invoiceCount').textContent=invoiceSerial-1;toast('Ready for a new invoice')});
function invoiceText(){const recipient=el('superstar').value.trim()||'UNNAMED SUPERSTAR';const lines=invoiceData();return `STERLING ENTERPRISES — RODGER TAX™\nInvoice: SE-${String(invoiceSerial).padStart(5,'0')}\nSuperstar: ${recipient}\nDate: ${new Date().toLocaleDateString('en-GB')}\n\n${lines.map(({qty,t})=>`${t.name} × ${qty}: ${money(qty*t.fee)}`).join('\n')}\n\nTOTAL DUE: ${el('grandTotal').textContent}\n\nISSUED BY ORDER OF THE CHAIRMAN. ALL DISPUTES SUBJECT TO SURCHARGE.`}
el('copyInvoice').addEventListener('click',async()=>{if(!charges.length)return toast('Add at least one charge');try{await navigator.clipboard.writeText(invoiceText());toast('Invoice copied for Discord')}catch{const area=document.createElement('textarea');area.value=invoiceText();document.body.append(area);area.select();document.execCommand('copy');area.remove();toast('Invoice copied')}});
el('printInvoice').addEventListener('click',()=>{if(!charges.length)return toast('Add at least one charge');const rows=invoiceData();el('printArea').innerHTML=`<h1>STERLING ENTERPRISES</h1><h2>RODGER TAX™ — OFFICIAL INVOICE</h2><p>Invoice: SE-${String(invoiceSerial).padStart(5,'0')}</p><p>Recipient: <b>${safe(el('superstar').value.trim()||'UNNAMED SUPERSTAR')}</b></p><p>Date: ${safe(new Date().toLocaleDateString('en-GB'))}</p><table><thead><tr><th>Offence</th><th>Quantity</th><th>Amount</th></tr></thead><tbody>${rows.map(({qty,t})=>`<tr><td>${safe(t.name)}</td><td>${qty}</td><td>${money(qty*t.fee)}</td></tr>`).join('')}</tbody></table><div class="sum">TOTAL: ${el('grandTotal').textContent}</div><p>Issued by Rodger the Dodger, Sterling Enterprises.</p><p><b>ALL DISPUTES SUBJECT TO SURCHARGE.</b></p><p style="font-size:10px">TWB fan project.</p>`;window.print()});
el('fraudFilter').addEventListener('click',()=>{el('category').value='Fraudulent Counter-Taxes';el('query').value='';show('directory')});
el('taxCount').textContent=taxes.length;el('invoiceCount').textContent=invoiceSerial-1;renderInvoice();show(['home','directory','calculator','exchange','coin','collection','empire','fraud'].includes(location.hash.slice(1))?location.hash.slice(1):'home');
function updateClock(){const now=new Date();el('terminalClock').textContent=`LONDON DESK · ${new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/London',weekday:'short',hour:'2-digit',minute:'2-digit'}).format(now).toUpperCase()} · MARKET ACTIVE`;}updateClock();setInterval(updateClock,60000);
