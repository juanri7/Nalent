# Product Concept: Natural Language Product Manager (NLPM)

> **AI-powered ideation-to-execution tool that transforms product thinking into Jira-ready stories**

---

## The Job To Be Done

**When** a Product Manager is grappling with a new idea or problem,  
**I want to** think through it conversationally with an intelligent partner,  
**So I can** move from fuzzy concept to clear, actionable user stories without context-switching.

### The Three Dimensions

| Dimension | The Job |
|-----------|---------|
| **Functional** | Turn ideas into structured Jira artifacts (epics, stories, roadmaps) |
| **Emotional** | Feel confident that my thinking is rigorous and complete |
| **Social** | Look prepared when presenting to stakeholders |

---

## Forces Analysis

### 🔵 Push (Problems with Current State)
- **Context switching kills flow** - Jump between Notion, Miro, GPT, and Jira
- **Ideas stay fuzzy** - No structured process to sharpen concepts
- **Manual translation** - Rewriting insights into Jira format is tedious
- **Lost thinking** - Brainstorming sessions disappear into docs no one reads

### 🟢 Pull (Attraction to NLPM)
- **Single environment** - Ideate and ship to Jira without leaving
- **AI challenges thinking** - Surfaces gaps, asks hard questions
- **Structured output** - Automatically formats into PM artifacts
- **Persistent context** - AI remembers your product, domain, constraints

### 🟡 Anxiety (Hesitations)
- "Will AI understand my specific domain?"
- "Will the generated stories actually be useful?"
- "What if it creates more work reviewing AI output?"

### 🔴 Habit (Inertia)
- "I already have my workflow with ChatGPT + Jira"
- "Learning a new tool takes time"
- Existing familiarity with separate tools

---

## Strategic Framing

### Why Build This?

| Question | Answer |
|----------|--------|
| **User Problem** | PMs waste time translating ideas through multiple tools before execution |
| **Business Problem** | The gap between "thinking" and "doing" slows product velocity |
| **Why Now** | MCP servers enable direct Jira integration; Claude API makes conversational AI accessible |
| **2-Year Vision** | The definitive AI partner for product development lifecycle |

### How It Ladders to Value

```
LATER (12+ months):
├── Full product lifecycle management
├── Auto-prioritization with RICE/ICE scoring
├── Stakeholder update generation
└── Cross-project pattern learning

NEXT (3-12 months):
├── Multi-project support
├── Roadmap generation
├── Sprint planning assistance
└── Template library

NOW (0-3 months): ← YOUR MVP
├── Chat-based ideation
├── Concept refinement
└── Jira story creation via MCP
```

---

## MVP Scope Definition

### The ONE Job (Figma Simplicity Test)

> **Core job:** Help a PM go from "I have an idea" to "stories are in Jira" through conversation.
> 
> **Success =** When a PM can type a rough idea and end with real Jira stories created.

### AI-First Considerations

| Question | Answer |
|----------|--------|
| Could AI help? | ✅ Yes - Conversation, pattern recognition, structured generation |
| Designed for future models? | ✅ Yes - Better reasoning = better concept challenging |
| Evals needed | Does AI surface meaningful gaps? Do generated stories meet PM standards? |
| Hybrid approach | AI for ideation + traditional for Jira API integration |

---

## Proposed User Experience

### Phase 1: Landing / New Chat
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│           🚀 What are you building today?               │
│                                                         │
│   ┌─────────────────────────────────────────────────┐   │
│   │  Start typing your idea...                      │   │
│   └─────────────────────────────────────────────────┘   │
│                                                         │
│   Recent Ideas:                                         │
│   • User authentication flow                            │
│   • Mobile onboarding redesign                         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Phase 2: Active Ideation Session
```
┌──────────────┬──────────────────────────────────────────┐
│  PROJECTS    │                                          │
│              │  💬 Ideation Chat                        │
│  ▼ Current   │  ─────────────────────────────────────── │
│    Session 1 │                                          │
│              │  [AI and user messages with              │
│  ▼ Archive   │   structured thinking, challenges,       │
│    Session 2 │   and refinements]                       │
│    Session 3 │                                          │
│              │  ─────────────────────────────────────── │
│              │  Ready to create stories?                │
│              │  [Review & Confirm] [Keep Refining]      │
│              │                                          │
│              │  ┌─────────────────────────────────────┐ │
│              │  │  Continue conversation...           │ │
│              │  └─────────────────────────────────────┘ │
└──────────────┴──────────────────────────────────────────┘
```

### Phase 3: Story Confirmation
```
┌─────────────────────────────────────────────────────────┐
│  📋 Review Generated Stories                            │
│                                                         │
│  ┌─ Epic: User Authentication ────────────────────────┐ │
│  │                                                     │ │
│  │  Story 1: As a user, I can login with email...     │ │
│  │  [Edit] [Remove]                                    │ │
│  │                                                     │ │
│  │  Story 2: As a user, I can reset my password...    │ │
│  │  [Edit] [Remove]                                    │ │
│  │                                                     │ │
│  └─────────────────────────────────────────────────────┘ │
│                                                         │
│  Target: Project ABC  Board: Sprint 4                   │
│                                                         │
│  [← Back to Chat]          [Create in Jira →]          │
└─────────────────────────────────────────────────────────┘
```

---

## MVP Feature Breakdown

### Must Have (Week 1-2)

| Feature | Description |
|---------|-------------|
| **Chat Interface** | Claude-style chat with message history within session |
| **AI Ideation Partner** | Powered by Claude API - asks questions, challenges, refines |
| **Session Persistence** | Sessions saved locally, accessible from sidebar |
| **Story Generation** | Convert chat into user story format |
| **Jira Creation** | Push stories to Jira via MCP server |

### Should Have (Week 3-4)

| Feature | Description |
|---------|-------------|
| **Epic Grouping** | Organize stories under epics |
| **Story Editing** | Inline edit before pushing to Jira |
| **Project Selection** | Choose Jira project/board target |
| **Chat Resume** | Continue previous sessions |

### Nice to Have (Later)

| Feature | Description |
|---------|-------------|
| **Roadmap View** | Visual timeline of generated work |
| **Template Prompts** | Pre-built starting points for common patterns |
| **PM Framework Injection** | AI uses JTBD, RICE, etc. in questioning |
| **Export Options** | Markdown, Notion, Confluence |

---

## Open Questions for You

Before we proceed to building, I'd like your input on a few things:

1. **Sidebar Organization**: Should the sidebar show:
   - **Projects** (high-level containers) → **Sessions** within each project?
   - Or flat list of **Sessions** organized by recency?
   
2. **AI Personality**: Should the AI:
   - Be directive (guide you through a structured process)?
   - Be collaborative (follow your lead, add value when you pause)?
   - Be challenging (push back, surface gaps aggressively)?

3. **Story Format**: When generating stories, should we:
   - Use strict user story format ("As a __ I want __ so that __")?
   - Be flexible based on your team's preferences?
   - Include acceptance criteria automatically?

4. **Jira Integration Timing**: Should stories be:
   - Created one-by-one as you confirm each?
   - Batched and created all at once at the end?
   - Created as drafts first for team review?

---

## Assumptions to Validate

Before building too much, we should confirm:

| Assumption | How to Test |
|------------|-------------|
| PMs want AI to challenge their thinking | User interview / your preference |
| Generated stories are high enough quality | Create 5 manually, compare to expectations |
| Single chat → multiple stories flow works | Prototype the flow |
| MCP Jira integration is reliable | Test create/read operations |

---

## Next Steps

Once you've reviewed this concept and answered the open questions:

1. ✅ Finalize UX decisions
2. 📐 Design component structure  
3. 🔧 Implement MVP (chat + AI + Jira integration)
4. 🧪 Test end-to-end flow
5. 🚀 Iterate based on your usage
