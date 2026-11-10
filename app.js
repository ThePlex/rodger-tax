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
Unauthorised Tax Evasion Tax|20000|Refusing to pay a fictional Rodger Tax.
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
const taxes = raw.trim().split('\n').map((line,i)=>{const [name,fee,description]=line.split('|');return {id:i+1,name,fee:Number(fee),description,category:categories[i<40?0:i<60?1:i<80?2:i<90?3:4]}});
const money = n=>new Intl.NumberFormat('en-GB',{style:'currency',currency:'GBP',maximumFractionDigits:0}).format(n);
const el=id=>document.getElementById(id);
const safe=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let charges=[];let invoiceSerial=1;
try{const saved=JSON.parse(localStorage.getItem('sterlingDraft')||'{}');charges=Array.isArray(saved.charges)?saved.charges.filter(c=>taxes.some(t=>t.id===c.id)&&Number.isInteger(c.qty)&&c.qty>=1&&c.qty<=999):[];invoiceSerial=Number.isInteger(saved.invoiceSerial)&&saved.invoiceSerial>0?saved.invoiceSerial:1;el('superstar').value=typeof saved.superstar==='string'?saved.superstar.slice(0,80):'';}catch{}
function persist(){try{localStorage.setItem('sterlingDraft',JSON.stringify({charges,superstar:el('superstar').value,invoiceSerial}));localStorage.setItem('sterlingInvoices',String(invoiceSerial-1));}catch{}}
function toast(message){el('toast').textContent=message;el('toast').classList.remove('hide');clearTimeout(toast.timer);toast.timer=setTimeout(()=>el('toast').classList.add('hide'),2800)}
function show(tab){document.querySelectorAll('.page').forEach(n=>n.classList.toggle('hide',n.id!==tab));document.querySelectorAll('[data-tab]').forEach(n=>n.classList.toggle('active',n.dataset.tab===tab));history.replaceState(null,'','#'+tab);window.scrollTo({top:0,behavior:'instant'});if(tab==='directory')renderTaxes();if(tab==='calculator')renderInvoice();}
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
function invoiceText(){const recipient=el('superstar').value.trim()||'UNNAMED SUPERSTAR';const lines=invoiceData();return `STERLING ENTERPRISES — RODGER TAX™\nInvoice: SE-${String(invoiceSerial).padStart(5,'0')}\nSuperstar: ${recipient}\nDate: ${new Date().toLocaleDateString('en-GB')}\n\n${lines.map(({qty,t})=>`${t.name} × ${qty}: ${money(qty*t.fee)}`).join('\n')}\n\nTOTAL DUE: ${el('grandTotal').textContent}\n\nFICTIONAL TWB ROLEPLAY — NO REAL PAYMENT DUE.`}
el('copyInvoice').addEventListener('click',async()=>{if(!charges.length)return toast('Add at least one charge');try{await navigator.clipboard.writeText(invoiceText());toast('Invoice copied for Discord')}catch{const area=document.createElement('textarea');area.value=invoiceText();document.body.append(area);area.select();document.execCommand('copy');area.remove();toast('Invoice copied')}});
el('printInvoice').addEventListener('click',()=>{if(!charges.length)return toast('Add at least one charge');const rows=invoiceData();el('printArea').innerHTML=`<h1>STERLING ENTERPRISES</h1><h2>RODGER TAX™ — OFFICIAL INVOICE</h2><p>Invoice: SE-${String(invoiceSerial).padStart(5,'0')}</p><p>Recipient: <b>${safe(el('superstar').value.trim()||'UNNAMED SUPERSTAR')}</b></p><p>Date: ${safe(new Date().toLocaleDateString('en-GB'))}</p><table><thead><tr><th>Offence</th><th>Quantity</th><th>Amount</th></tr></thead><tbody>${rows.map(({qty,t})=>`<tr><td>${safe(t.name)}</td><td>${qty}</td><td>${money(qty*t.fee)}</td></tr>`).join('')}</tbody></table><div class="sum">TOTAL: ${el('grandTotal').textContent}</div><p>Issued by Rodger the Dodger, Sterling Enterprises.</p><p><b>FICTIONAL TWB ROLEPLAY. NO REAL PAYMENT DUE.</b></p>`;window.print()});
el('fraudFilter').addEventListener('click',()=>{el('category').value='Fraudulent Counter-Taxes';el('query').value='';show('directory')});
el('taxCount').textContent=taxes.length;el('invoiceCount').textContent=invoiceSerial-1;renderInvoice();show(['home','directory','calculator','coin','fraud'].includes(location.hash.slice(1))?location.hash.slice(1):'home');
