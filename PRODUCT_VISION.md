# Product Vision & Business Strategy
## CLT-Optimizer: Model Validation & Automation Platform

**Last Updated:** January 2025  
**Timeline:** September 2025 Target  
**Status:** MVP Development Phase

---

## Executive Summary

We are building an **automated CLT (Cross-Laminated Timber) model validation and quotation platform** that integrates seamlessly into existing BIM workflows via Speckle. Our platform eliminates manual validation errors, reduces quote generation time from days to minutes, and provides complete model history tracking—solving critical pain points that cost CLT manufacturers thousands of euros per project.

**Current Status:**
- Strategic partnership with CLT-Denmark (investor & case study)
- Target presentation to KLH in March 2025
- MVP in development with core validation features
- 9-month runway to prove product-market fit

**Market Opportunity:**
- Primary: CLT manufacturers and distributors across Europe
- Secondary: Expansion to all construction materials and workflows
- Estimated market size: 50-100+ CLT facilities in Europe (research needed)

---

## 🎯 The Problem

### Current Workflow at CLT-Denmark (Typical Manufacturer)

#### Phase 1: Project Intake (Highly Variable)
**What they receive:**
- **Option A (95% of cases):** Tender materials
  - 2D plans (floor plans, elevations, sections)
  - 3D architect IFC file
  - MEP models (sometimes)
  - Structural calculations (sometimes)
  
- **Option B (5% of cases):** Minimal information
  - Just 2D sketches
  - Rough floor plans
  - Conceptual drawings

**Challenge:** Every project arrives differently, requiring custom assessment

#### Phase 2: Preliminary Quotation (Manual, Time-Intensive)
**What they need to calculate:**
1. Cubic meters of glulam (beams, columns)
2. Square meters of CLT panels (walls, floors, roofs)
3. Quantity of brackets and screws
4. Full solution design (how to build it)

**Current Process:**
- Manual takeoff from 2D/3D models
- Excel-based calculations
- Optimization for cost/quality (manual)
- Design delivery and assembly planning
- **Time:** 4-8 hours per preliminary quote
- **Problem:** Significant effort on projects that never proceed

#### Phase 3: Detailed Design (After Contract Signed)
**Step 1: Static Design**
- Load calculations using BIPSA113 4LK A1
- Structural verification
- Fire safety compliance
- Not always required (depends on project scope)

**Step 2: Production Drawings (HSBcad)**
1. Import architect IFC + MEP IFC + electrical IFC
2. Adapt and coordinate all disciplines
3. **Internal QA of IFC file** (clash detection in BIM Vision)
4. External review with architect/engineer
5. Update IFC based on feedback
6. Send to KLH and glulam provider
7. **KLH imports to their software** (no responsibility for geometric errors)
8. **Final review by CLT-Denmark** (last chance to catch errors)
9. Approve for production

**Time:** 2-4 weeks per project

#### Phase 4: Delivery & Assembly
- CLT-Denmark delivers 95% of projects with:
  - CLT elements
  - Glulam beams/columns
  - Screws and brackets
  - Complete assembly solution
- Often responsible for entire building construction

### Critical Pain Points Identified

1. **Preliminary Quote Bottleneck** 🔴 HIGHEST IMPACT
   - **Problem:** 4-8 hours per quote, many projects never proceed
   - **Cost:** Wasted engineering time on non-converting leads
   - **Impact:** Slow response time = lost competitive advantage
   - **Our Solution:** Instant preliminary quotes from IFC upload

2. **Manual Quantity Takeoff** 🔴 HIGH IMPACT
   - **Problem:** Manual counting of m³ glulam, m² CLT, brackets
   - **Cost:** Human error in quantities = pricing mistakes
   - **Impact:** Under-quote = lost profit, over-quote = lost project
   - **Our Solution:** Automated quantity extraction from model

3. **Internal QA Gaps** 🟡 MEDIUM IMPACT
   - **Problem:** Using BIM Vision for clash detection only
   - **Cost:** Geometric errors not caught until KLH review
   - **Impact:** Rework, delays, reputation damage
   - **Our Solution:** Comprehensive validation before sending to KLH

4. **No Geometric Responsibility from KLH** 🟡 MEDIUM IMPACT
   - **Problem:** KLH doesn't take responsibility for geometric mistakes
   - **Cost:** CLT-Denmark bears all risk of errors
   - **Impact:** Expensive fixes if errors reach production
   - **Our Solution:** Catch errors before KLH sees them

5. **Multi-Discipline Coordination** 🟡 MEDIUM IMPACT
   - **Problem:** Manual coordination of architect + MEP + electrical IFC
   - **Cost:** Clashes discovered late in process
   - **Impact:** Design changes, schedule delays
   - **Our Solution:** Automated clash detection across all disciplines

6. **Inconsistent Input Quality** 🟢 LOW IMPACT (but frustrating)
   - **Problem:** Projects arrive with varying levels of detail
   - **Cost:** Time spent requesting missing information
   - **Impact:** Delayed quote delivery
   - **Our Solution:** Clear checklist of what's needed for accurate quote

### Cost of Current Approach

**Per Project:**
- **Preliminary Quote:** 4-8 hours @ €75/hour = €300-600
- **Internal QA:** 2-4 hours @ €75/hour = €150-300
- **Rework from errors:** 4-20 hours @ €75/hour = €300-1,500
- **Total:** €750-2,400 per project

**Annual (50 projects):**
- **Quote time:** €15,000-30,000 (many quotes don't convert)
- **QA time:** €7,500-15,000
- **Error rework:** €15,000-75,000
- **Total:** €37,500-120,000 in preventable costs

**Our Tool Saves:**
- Preliminary quotes: 4-8 hours → 5 minutes (99% time reduction)
- Internal QA: 2-4 hours → 10 minutes (95% time reduction)
- Error rework: 50% reduction (catch before KLH)
- **Annual savings: €25,000-80,000 per manufacturer**

---

## 💡 Our Solution

### Core Value Proposition

**"GitHub for CLT Manufacturing"**

An automated validation and quotation platform that integrates directly into existing Speckle workflows, providing instant quality checks, complete version history, and real-time pricing—without requiring teams to learn new software.

### Key Features

#### 1. **Seamless Speckle Integration**
- Upload IFC files OR use Speckle Connector (no workflow change)
- Works within existing BIM tools (Revit, Rhino, Autocad, etc.)
- 3D visualization with embedded validation results
- Zero learning curve for technical teams

#### 2. **Automated Model Validation**
- **Geometrical Checks:** Clash detection, gap detection, duplicate objects
- **Data Checks:** Size validation, panel styles, element numbering, surface quality, coating
- **CLT-Specific Validation:** Element classification (W/R/F), position number uniqueness, panel build-up configuration
- **On-Demand Checks:** Complex validations triggered when needed
- **Real-time Results:** Instant feedback in 3D viewer with issue highlighting

#### 3. **Complete Version History**
- Every model change tracked automatically
- Visual diff between versions
- "What changed?" answered instantly
- Audit trail for compliance and quality control

#### 4. **Instant Preliminary Quotes**
- Real-time pricing from CLT-Denmark database
- Material breakdown by element type
- Quantity takeoff automation
- Professional quote generation in seconds
- Early-stage pricing for feasibility studies

#### 5. **Model Analysis & Insights**
- Comprehensive data breakdown (elements, volumes, weights)
- Largest/heaviest element identification for logistics
- Panel build-up statistics
- Surface quality distribution
- Exportable reports for documentation

### Workflow Transformation

#### Current Workflow (CLT-Denmark)
```
1. PROJECT INTAKE
   ↓ Receive tender materials (IFC + 2D plans) or just sketches
   ↓ Assess what information is available
   
2. PRELIMINARY QUOTE (4-8 hours)
   ↓ Manual quantity takeoff from models
   ↓ Calculate m³ glulam, m² CLT, brackets
   ↓ Excel-based pricing
   ↓ Design solution proposal
   
3. CONTRACT SIGNED
   ↓ Begin detailed design phase
   
4. PRODUCTION DRAWINGS (2-4 weeks)
   ↓ Import architect + MEP + electrical IFC into HSBcad
   ↓ Coordinate all disciplines
   ↓ Run clash detection in BIM Vision
   ↓ External review
   ↓ Update IFC
   
5. SEND TO KLH
   ↓ KLH imports (no responsibility for errors)
   ↓ Final review by CLT-Denmark
   ↓ Approve for production
```

#### New Workflow (With CLT-Optimizer)
```
1. PROJECT INTAKE
   ↓ Upload IFC to CLT-Optimizer OR connect via Speckle
   ↓ System detects what's available
   
2. INSTANT PRELIMINARY QUOTE (5 minutes)
   ↓ Automated quantity extraction
   ↓ Real-time pricing from database
   ↓ Professional quote PDF generated
   ↓ Multiple pricing scenarios (basic/standard/premium)
   
3. CONTRACT SIGNED
   ↓ Begin detailed design phase
   
4. PRODUCTION DRAWINGS (2-4 weeks → 1-2 weeks)
   ↓ Import all IFC files into HSBcad
   ↓ **Run comprehensive validation in CLT-Optimizer**
   ↓ Automated clash detection (architect + MEP + electrical)
   ↓ CLT-specific checks (classification, numbering, etc.)
   ↓ Fix issues before external review
   ↓ External review (fewer issues = faster)
   
5. SEND TO KLH
   ↓ **Pre-validated model** (95% fewer errors)
   ↓ KLH imports with confidence
   ↓ Minimal final review needed
   ↓ Approve for production
```

**Time Savings:**
- Preliminary quote: 4-8 hours → 5 minutes
- Internal QA: 2-4 hours → 10 minutes  
- External review cycles: 2-3 rounds → 1 round
- KLH review: 2-4 hours → 30 minutes
- **Total: 10-20 hours saved per project**

---

## 🏢 Business Model

### Revenue Streams

#### Option A: Per-Project Pricing (Recommended for MVP)
- **€50-150 per model validation**
  - Basic validation: €50
  - Full validation + quote: €100
  - Complex projects (>500 elements): €150
- **Pros:** Simple, pay-as-you-go, low barrier to entry
- **Cons:** Unpredictable revenue, requires volume

#### Option B: Subscription Tiers
- **Starter:** €299/month
  - 10 projects/month
  - Basic validation checks
  - Standard support
  
- **Professional:** €799/month
  - 50 projects/month
  - All validation checks
  - Priority support
  - API access
  
- **Enterprise:** €2,499/month
  - Unlimited projects
  - Custom validation rules
  - Dedicated support
  - White-label options
  - On-premise deployment

#### Option C: Hybrid Model (Long-term)
- **Free Tier:** 3 validations/month (lead generation)
- **Pay-per-use:** €75/validation (occasional users)
- **Subscription:** €599/month for 30 validations (regular users)
- **Enterprise:** Custom pricing for manufacturers

### Value-Based Pricing Justification

**Time Savings:**
- Manual validation: 4-8 hours → Automated: 2 minutes
- Quote generation: 2-4 hours → Automated: 30 seconds
- Model comparison: 1-2 hours → Automated: instant
- **Total savings: 7-14 hours per project**

**Cost Savings:**
- Catching errors pre-production: €5,000-50,000 per error avoided
- Faster quotes: Win more projects (10-20% increase?)
- Reduced rework: 30-50% fewer site issues

**ROI Calculation:**
- If tool costs €800/month and saves 14 hours/project at €75/hour
- Break-even: ~1 project per month
- Typical manufacturer: 10-50 projects/month
- **ROI: 10-50x**

### Initial Pricing Strategy (2025)

**Phase 1 (Jan-Mar):** Free for CLT-Denmark (case study)
**Phase 2 (Mar-Jun):** €50/validation for early adopters (KLH pilot)
**Phase 3 (Jun-Sep):** €799/month subscription launch
**Phase 4 (Sep+):** Scale pricing based on learnings

---

## 🎯 Target Market

### Primary Market: CLT Manufacturers & Distributors

**Geographic Focus:** Europe (initially)
- Austria, Germany, Switzerland (KLH stronghold)
- Nordics (strong CLT adoption)
- UK, France, Netherlands (growing markets)

**Market Size Research Needed:**
- Estimated 50-100 CLT manufacturing facilities in Europe
- Each facility: 50-500 projects/year
- Total addressable market: 2,500-50,000 projects/year

**Key Players:**
1. **KLH** (Austria) - Market leader, target customer
2. **Stora Enso** (Finland/Sweden)
3. **Binderholz** (Austria)
4. **Mayr-Melnhof Holz** (Austria)
5. **Schilliger Holz** (Switzerland)
6. **CLT-Denmark** (Denmark) - Current partner

### Secondary Market (Future)

**Architects & Engineers:**
- Early validation before sending to manufacturer
- Design optimization based on manufacturability
- Cost estimation during design phase

**General Contractors:**
- Quality assurance on delivered models
- Coordination with other trades
- Timeline and cost validation

### Market Entry Strategy

**Year 1 (2025): Prove with CLT-Denmark + KLH**
- Perfect the product with one manufacturer
- Document time/cost savings
- Build case studies
- Refine pricing model

**Year 2 (2026): Scale to Top 10 CLT Manufacturers**
- Leverage KLH reference
- Direct sales to major players
- Partnerships with Speckle for distribution
- Industry conference presence

**Year 3 (2027): Expand to All CLT + Adjacent Materials**
- Glulam manufacturers
- Timber frame companies
- Eventually: steel, concrete, prefab

---

## 🚀 Competitive Analysis

### Direct Competitors

**None identified** - No all-in-one solution exists for CLT validation + quotation

### Indirect Competitors

1. **Navisworks (Autodesk)**
   - Strengths: Industry standard, powerful clash detection
   - Weaknesses: Expensive (~€2,500/year), steep learning curve, no quotation, no CLT-specific checks
   - Our advantage: Cheaper, easier, integrated quotation, CLT-focused

2. **Dalux**
   - Strengths: Good for drawing management and model sharing
   - Weaknesses: No validation, no quotation, focused on 2D drawings
   - Our advantage: 3D validation, automated checks, pricing integration

3. **Excel Spreadsheets**
   - Strengths: Familiar, flexible
   - Weaknesses: Manual, error-prone, not connected to model, no version control
   - Our advantage: Automated, accurate, model-connected, full history

4. **HSBcad**
   - Strengths: Industry-specific automation for timber
   - Weaknesses: Focused on design automation, not validation
   - **Critical:** Must integrate, not compete (see risks below)

### Competitive Moat

**Short-term (1-2 years):**
1. **First-mover advantage** in CLT validation space
2. **Industry partnerships** (CLT-Denmark, KLH)
3. **Domain expertise** (BIM specialist + CLT industry knowledge)
4. **Speckle integration** (technical complexity)
5. **Speed to market** (9-month head start)

**Long-term (3-5 years):**
1. **Network effects:** More users = better validation algorithms
2. **Data moat:** Historical validation data improves accuracy
3. **Integration ecosystem:** Deep integration with HSBcad, Speckle, BIM tools
4. **Brand reputation:** "The standard" for CLT validation
5. **Switching costs:** Customers' historical data locked in

### Strategic Positioning

**"The GitHub of CLT Manufacturing"**
- Not competing with Speckle (they're the platform)
- Not competing with HSBcad (we integrate)
- Not competing with BIM tools (we enhance)
- **We're the quality control layer** that sits between design and production

---

## ⚠️ Risks & Mitigation

### Critical Risks

#### 1. **Speckle Competition Risk** 🔴 HIGH
**Risk:** Speckle builds similar features, commoditizes our product
**Likelihood:** Medium-High (they want to be "GitHub of construction")
**Impact:** Existential

**Mitigation Strategy:**
- ✅ **Align with Speckle's vision:** We build on their platform, not compete
- ✅ **Become a Speckle partner:** Official integration, co-marketing
- ✅ **Focus on CLT niche:** Too specific for Speckle to prioritize
- ✅ **Build proprietary validation logic:** Not just UI on Speckle API
- ✅ **Contribute to Speckle ecosystem:** Make them successful = we're successful
- 📅 **Action:** Reach out to Speckle partnerships team by February 2025

#### 2. **HSBcad Competition Risk** 🟡 MEDIUM
**Risk:** HSBcad sees us as threat, builds own validation or partners with competitor
**Likelihood:** Medium
**Impact:** High (they have existing customer relationships)

**Mitigation Strategy:**
- ✅ **Integration-first approach:** Make HSBcad better, not replace it
- ✅ **Co-marketing opportunity:** "HSBcad + [Our Tool] = Complete Solution"
- ✅ **Focus on post-design validation:** Different stage of workflow
- ✅ **Partner discussions early:** Approach them as collaborator, not competitor
- 📅 **Action:** Initiate HSBcad partnership conversation by March 2025

#### 3. **In-house Development Risk** 🟡 MEDIUM
**Risk:** Large manufacturers (KLH) build this internally
**Likelihood:** Low-Medium (construction industry lacks developers)
**Impact:** High (lose biggest potential customers)

**Mitigation Strategy:**
- ✅ **Speed advantage:** Be 2-3 years ahead before they consider building
- ✅ **Multi-manufacturer value:** Our tool works across their customers
- ✅ **Continuous innovation:** Always stay ahead with new features
- ✅ **White-label option:** Let them brand it as theirs if needed
- ✅ **Cost advantage:** Cheaper to subscribe than build + maintain

#### 4. **Patent/IP Risk** 🟢 LOW
**Risk:** Someone patents similar approach, blocks us
**Likelihood:** Low (software patents difficult in EU)
**Impact:** Medium

**Mitigation Strategy:**
- ⚠️ **Defensive publication:** Document our methods publicly (prior art)
- ⚠️ **Trade secrets:** Keep validation algorithms proprietary
- ⚠️ **Speed to market:** Establish market position before patent wars
- ⚠️ **Legal review:** Consult IP lawyer before major releases
- 📅 **Action:** IP strategy review by April 2025

#### 5. **Market Adoption Risk** 🟡 MEDIUM
**Risk:** Industry too conservative, slow to adopt new tools
**Likelihood:** Medium (construction is traditional)
**Impact:** High (delays revenue)

**Mitigation Strategy:**
- ✅ **Zero learning curve:** Works with existing tools (Speckle)
- ✅ **Prove ROI first:** CLT-Denmark case study with hard numbers
- ✅ **Free trial:** Let them see value before paying
- ✅ **Champion-led sales:** Find internal advocates at each company
- ✅ **Industry credibility:** Present at conferences, publish case studies

### Risk Monitoring

**Monthly Risk Review:**
- Speckle product roadmap monitoring
- HSBcad feature announcements
- Competitor intelligence
- Customer feedback on adoption barriers

---

## 📊 Success Metrics & KPIs

### Phase 1: Validation (Jan-Mar 2025)
**Goal:** Prove value with CLT-Denmark

**Metrics:**
- ✅ **Time savings:** 7+ hours saved per project
- ✅ **Error reduction:** 50%+ fewer validation errors
- ✅ **User satisfaction:** 8/10+ NPS score
- ✅ **Usage:** 20+ projects validated
- ✅ **Quote accuracy:** 95%+ match to final pricing

**Success Criteria:**
- CLT-Denmark uses tool for 100% of projects
- Documented case study with ROI numbers
- Internal champion willing to present to KLH

### Phase 2: First Customer (Mar-Jun 2025)
**Goal:** Convert KLH to paying customer

**Metrics:**
- ✅ **KLH pilot:** 3-month trial with 10+ projects
- ✅ **Conversion:** Signed contract by June 2025
- ✅ **Revenue:** €2,400-9,600 (€800/month × 3-12 months)
- ✅ **Expansion:** 2+ additional KLH distributors interested

**Success Criteria:**
- KLH presentation successful (March)
- Pilot agreement signed (April)
- First invoice paid (May)
- Renewal commitment (June)

### Phase 3: Scale (Jun-Sep 2025)
**Goal:** 5 paying customers, €25K MRR

**Metrics:**
- ✅ **Customers:** 5 CLT manufacturers
- ✅ **MRR:** €25,000 (€5,000 average per customer)
- ✅ **Projects:** 100+ validated per month
- ✅ **Churn:** <10% monthly
- ✅ **NPS:** 50+

**Success Criteria:**
- Profitable unit economics
- Repeatable sales process
- Product-market fit validated
- Ready for Series A fundraising

### Long-term Metrics (2026+)

**Growth:**
- 50+ customers by end of 2026
- €500K ARR by end of 2026
- 1,000+ projects/month validated
- Expansion to 3+ countries

**Product:**
- 20+ validation checks
- 5+ integrations (HSBcad, Revit, Rhino, etc.)
- Mobile app for on-site validation
- API for custom integrations

**Market:**
- 30%+ market share in European CLT
- Expansion to glulam and timber frame
- Strategic partnerships with 3+ major players

---

## 🛠️ Product Roadmap

### MVP (Current - March 2025)
**Status:** In Development  
**Goal:** Replace manual preliminary quotation process

**Core Features:**
- ✅ Speckle 3D viewer integration
- ✅ Basic validation checks (geometrical, data, CLT-specific)
- ✅ Model analysis reports
- ✅ Quote generation
- ✅ Project management
- ⏳ IFC file upload (drag & drop)
- ⏳ Speckle URL import
- ⏳ Multiple models per project (architect + MEP + electrical)
- ⏳ Automation trigger from UI
- ⏳ **Quantity Takeoff:**
  - Automatic m³ glulam calculation
  - Automatic m² CLT calculation
  - Bracket/screw estimation
- ⏳ **Multi-Scenario Quotes:**
  - Basic solution pricing
  - Standard solution pricing
  - Premium solution pricing
- ⏳ **Input Quality Assessment:**
  - Detect what information is available
  - Flag missing critical data
  - Suggest what's needed for accurate quote

### V1.0 (March - June 2025)
**Goal:** Production-ready for KLH + Production Drawing Phase Support

**Features:**
- **Version History & Diff:**
  - Track every model change
  - Visual comparison between versions
  - "What changed since last review?" instant answer
  
- **Multi-Discipline Coordination:**
  - Import architect + MEP + electrical IFC simultaneously
  - Cross-discipline clash detection
  - Identify coordination issues before HSBcad
  
- **Advanced Validation:**
  - On-demand complex checks (clash detection, etc.)
  - Custom validation rules per manufacturer
  - BIPSA113 4LK A1 compliance checks
  - Fire safety validation
  
- **Pre-KLH QA:**
  - Comprehensive check before sending to KLH
  - "KLH-ready" certification
  - Reduce KLH review time by 75%
  
- **Collaboration Features:**
  - Email notifications for validation results
  - Comments and issue tracking
  - External review workflow
  - Approval process
  
- **Integration & Export:**
  - HSBcad integration (import/export)
  - API access for custom workflows
  - Export reports (PDF, Excel)
  - BIM Vision compatibility
  
- **User Management:**
  - Team accounts
  - Role-based permissions
  - Activity logging
  
- **Mobile-responsive design** for on-site reviews

### V1.5 (June - September 2025)
**Goal:** Scale to 5 customers

**Features:**
- HSBcad integration
- Revit plugin
- Batch validation
- Advanced analytics
- Custom branding (white-label)
- Multi-language support (German, French)
- Improved quote customization
- Collaboration features (comments, approvals)

### V2.0 (September 2025+)
**Goal:** Market leader

**Features:**
- AI-powered error prediction
- Automated fix suggestions
- Supply chain integration
- Production scheduling
- Quality control tracking
- Mobile app (iOS/Android)
- Advanced API
- Marketplace for custom checks

---

## 💼 Go-to-Market Strategy

### Phase 1: Prove (Jan-Mar 2025)
**Focus:** CLT-Denmark case study

**Activities:**
- Weekly demos with CLT-Denmark team
- Document time/cost savings meticulously
- Gather testimonials and feedback
- Create before/after comparison materials
- Build presentation deck for KLH

**Budget:** €0 (development time only)

### Phase 2: Launch (Mar-Jun 2025)
**Focus:** KLH acquisition

**Activities:**
- Present to KLH (March)
- 3-month pilot program
- Weekly check-ins with KLH team
- Rapid iteration based on feedback
- Create KLH case study

**Budget:** €5,000
- Travel to KLH headquarters
- Marketing materials
- Legal (contract review)

### Phase 3: Scale (Jun-Sep 2025)
**Focus:** 5 customers

**Activities:**
- Leverage KLH reference for warm intros
- Attend timber construction conferences
- Content marketing (blog, LinkedIn)
- Speckle community engagement
- Direct outreach to top 20 manufacturers

**Budget:** €20,000
- Conference attendance (3-4 events)
- Content creation
- Sales tools (CRM, email, etc.)
- Part-time sales support

### Sales Process

**Target:** CLT manufacturers with 50+ projects/year

**Approach:**
1. **Warm intro** via CLT-Denmark or KLH
2. **Discovery call** (30 min): Understand their pain points
3. **Demo** (60 min): Show tool with their sample project
4. **Pilot** (3 months): Free or 50% discount
5. **Review** (30 min): ROI analysis with their data
6. **Close** (30 min): Contract negotiation

**Timeline:** 3-6 months from first contact to signed contract

**Conversion Funnel:**
- 20 outreach → 10 calls → 5 demos → 3 pilots → 1 customer
- **CAC:** ~€5,000 per customer (time + expenses)
- **LTV:** ~€30,000 (€800/month × 36 months × 70% retention)
- **LTV:CAC:** 6:1 (healthy)

---

## 👥 Team & Resources

### Current Team

**Filip Spirovski** - Co-Founder
- BIM Specialist turned Developer
- Domain expertise in CLT industry
- Full-stack development
- Product vision and strategy

**Carsten Laursen** – Co-Founder  
- Architect & Engineer  
- Deep industry expertise in CLT and timber construction  
- Drives product vision, strategy, and technical excellence

**Tobias Israelsen** – CEO  
- Experienced Venture Builder  
- Strategic leadership and business development  
- Shapes product vision and long-term growth

**CLT-Denmark** - Strategic Partner & Investor
- Industry validation
- Beta testing
- Customer development
- Market access

### Immediate Needs (Q1 2025)

**Part-time Sales/BD** (10-20 hours/week)
- Outreach to manufacturers
- Demo scheduling
- Follow-up and closing
- Budget: €2,000-3,000/month

**Freelance Designer** (project-based)
- Marketing materials
- Presentation decks
- UI/UX improvements
- Budget: €3,000-5,000 total

### Future Needs (Q3 2025+)

**Full-time Developer**
- Backend infrastructure
- API development
- Integration work
- Budget: €60,000-80,000/year

**Customer Success Manager**
- Onboarding
- Training
- Support
- Retention
- Budget: €50,000-60,000/year

**Sales Director**
- Lead generation
- Deal closing
- Partnership development
- Budget: €70,000-90,000/year + commission

---

## 💰 Financial Projections

### 2025 Projections

**Q1 (Jan-Mar):**
- Revenue: €0 (free for CLT-Denmark)
- Costs: €10,000 (development, hosting, tools)
- Burn: €10,000

**Q2 (Apr-Jun):**
- Revenue: €4,800 (KLH pilot: €800/month × 2 months × 3 users)
- Costs: €15,000 (development, sales, hosting)
- Burn: €10,200

**Q3 (Jul-Sep):**
- Revenue: €24,000 (5 customers × €800/month × 3 months × 2 users avg)
- Costs: €25,000 (team expansion, marketing, hosting)
- Burn: €1,000

**Q4 (Oct-Dec):**
- Revenue: €60,000 (10 customers × €1,000/month × 3 months × 2 users avg)
- Costs: €35,000 (full team, marketing, infrastructure)
- Profit: €25,000

**2025 Total:**
- Revenue: €88,800
- Costs: €85,000
- Net: €3,800 (break-even achieved)

### 2026 Projections

**Conservative:**
- 30 customers × €1,200/month × 12 months = €432,000 ARR
- Costs: €300,000 (team of 5, marketing, infrastructure)
- Profit: €132,000

**Optimistic:**
- 50 customers × €1,500/month × 12 months = €900,000 ARR
- Costs: €450,000 (team of 8, aggressive marketing)
- Profit: €450,000

---

## 🎨 Brand & Naming

### Current Name: "Model Validator"
**Issues:**
- Generic, not memorable
- Doesn't convey CLT focus
- Sounds like a tool, not a platform
- No emotional connection

### Naming Suggestions

#### Option 1: **CLT-Optimizer** (Current Working Name)
- Clear, descriptive
- Industry-specific
- Easy to remember
- Tagline: "Optimize your CLT workflow"

#### Option 2: **CLTFlow**
- Emphasizes workflow
- Industry-specific
- Modern, tech-forward
- Tagline: "Streamline your CLT workflow"

#### Option 3: **Laminate** (or LaminateHQ)
- Clever reference to CLT (laminated timber)
- Short, punchy
- Premium feel
- Tagline: "Layer quality into every project"

#### Option 4: **Woodwork** (or Woodwork.ai)
- Broad enough for expansion
- Professional yet approachable
- Strong brand potential
- Tagline: "Precision tools for timber professionals"

#### Option 5: **Plywood** (or PlywoodHQ)
- Familiar material, tech twist
- Memorable, distinctive
- Platform feel
- Tagline: "Build better with confidence"

**Current:** **CLT-Optimizer** (working name, may rebrand later)
- Clear value proposition
- Industry-relevant
- Easy to explain
- Room to grow

### Company Name: Beyond Heartwood

**Current:** Heartwood (from previous summer house company)
**Issue:** Baggage from bankruptcy, not tech-focused

**Suggestions:**

#### Option 1: **Timber Technologies**
- Clear, professional
- Scalable beyond CLT
- B2B credible

#### Option 2: **BuildTech Labs**
- Innovation-focused
- Broader than timber
- Startup energy

#### Option 3: **Structural Software**
- Engineering credibility
- Professional
- Clear positioning

#### Option 4: **FrameWorks** (or Framework Systems)
- Clever double meaning (timber frame + software framework)
- Modern, memorable
- Tech-forward

#### Option 5: Keep **Heartwood** but rebrand as **Heartwood Technologies**
- Maintain continuity
- Add "Technologies" for clarity
- Easier transition

**Recommendation:** **Heartwood Technologies** (short-term) → **CLT-Optimizer** (product brand)
- Company: Heartwood Technologies (parent company)
- Product: CLT-Optimizer (the platform)
- Allows for future products under Heartwood umbrella

---

## 🎯 Strategic Priorities (Next 9 Months)

### January 2025
- ✅ Complete MVP core features
- ✅ Begin CLT-Denmark testing
- ✅ Document initial time savings
- 📅 Finalize KLH presentation deck

### February 2025
- 📅 Intensive CLT-Denmark usage (10+ projects)
- 📅 Gather detailed metrics and testimonials
- 📅 Refine product based on feedback
- 📅 Initiate Speckle partnership conversation
- 📅 IP strategy review

### March 2025
- 🎯 **KLH Presentation** (critical milestone)
- 📅 Finalize pilot agreement terms
- 📅 Begin HSBcad partnership discussions
- 📅 Prepare for pilot onboarding

### April-June 2025
- 📅 KLH pilot execution
- 📅 Weekly iteration based on KLH feedback
- 📅 Hire part-time sales support
- 📅 Attend first industry conference
- 📅 Begin outreach to next 5 targets

### July-September 2025
- 🎯 **5 Paying Customers** (success milestone)
- 📅 Convert KLH to full contract
- 📅 Close 4 additional customers
- 📅 Achieve break-even
- 📅 Evaluate Series A readiness

---

## 📋 Key Decisions Needed

### Immediate (January 2025)

1. **Pricing Model:** Per-project vs. subscription?
   - **Recommendation:** Start with per-project (€75), move to subscription at 5 customers

2. **Brand Name:** Keep "CLT-Optimizer" or rebrand?
   - **Recommendation:** Evaluate final name by March (TimberCheck, CLTFlow, or keep CLT-Optimizer)

3. **Speckle Partnership:** When to approach?
   - **Recommendation:** February, after CLT-Denmark metrics

### Near-term (February-March 2025)

4. **KLH Pilot Terms:** Free vs. paid pilot?
   - **Recommendation:** 50% discount (€400/month) to show commitment

5. **HSBcad Strategy:** Integrate or compete?
   - **Recommendation:** Integration-first, approach as partner

6. **Market Research:** Commission formal market size study?
   - **Recommendation:** Yes, €5K budget for credibility with investors

### Medium-term (April-June 2025)

7. **Team Expansion:** When to hire first employee?
   - **Recommendation:** June, after 2 paying customers

8. **Fundraising:** Bootstrap vs. raise capital?
   - **Recommendation:** Bootstrap to €25K MRR, then evaluate Series A

9. **Geographic Expansion:** When to go beyond Europe?
   - **Recommendation:** 2027+, after dominating European CLT market

---

## 🚀 Vision: 3-Year Horizon

### 2025: Prove & Launch
- Validate product-market fit with CLT manufacturers
- 10 paying customers
- €100K ARR
- Break-even operations

### 2026: Scale & Dominate
- 50 customers (30% of European CLT market)
- €500K-900K ARR
- Expand to glulam and timber frame
- Strategic partnerships (Speckle, HSBcad)
- Team of 8

### 2027: Expand & Innovate
- 100+ customers across all timber construction
- €2M+ ARR
- Expand to North America
- AI-powered features
- Acquisition target or Series A

### Long-term Vision: "The GitHub of Construction"
- Standard tool for all construction validation
- Not just timber: steel, concrete, prefab
- Platform with marketplace for custom checks
- Data insights business (benchmarking, analytics)
- Exit: Acquisition by Autodesk, Speckle, or similar ($50M-200M)

---

## 📞 Next Steps & Action Items

### This Week
- [ ] Review and refine this document with team
- [ ] Finalize CLT-Denmark testing plan
- [ ] Set up metrics tracking dashboard
- [ ] Schedule weekly progress reviews

### This Month (January)
- [ ] Complete MVP features
- [ ] Begin CLT-Denmark intensive testing
- [ ] Document first 5 projects in detail
- [ ] Draft KLH presentation

### Next Quarter (Q1 2025)
- [ ] CLT-Denmark case study complete
- [ ] KLH presentation delivered
- [ ] Pilot agreement signed
- [ ] Speckle partnership initiated
- [ ] Brand rebrand decision made

---

## 📚 Appendix

### Market Research To-Do
- [ ] Count exact number of CLT facilities in Europe
- [ ] Estimate projects per facility per year
- [ ] Calculate total addressable market (TAM)
- [ ] Identify top 20 target customers
- [ ] Research competitor pricing models

### Technical To-Do
- [ ] Document all Speckle Automate functions needed
- [ ] Define API requirements for integrations
- [ ] Plan infrastructure for scale (1000+ projects/month)
- [ ] Security and compliance review (GDPR, etc.)

### Legal To-Do
- [ ] IP strategy review with lawyer
- [ ] Standard contract templates
- [ ] Terms of service and privacy policy
- [ ] Partnership agreement templates

### Marketing To-Do
- [ ] Create case study template
- [ ] Design pitch deck
- [ ] Build demo video
- [ ] Set up content calendar
- [ ] Identify key industry conferences

---

**Document Owner:** Filip Spirovski  
**Last Review:** January 2025  
**Next Review:** February 2025  

**Confidential:** This document contains proprietary business strategy. Do not distribute outside core team without approval.

---

*"We're not just building software. We're transforming how the construction industry ensures quality, saves time, and builds better."*
