// @flow
import * as d3 from 'd3'

export type TrackId = 'SERVER' | 'CLIENT' | 'INFRASTRUCTURE' | 'ANALYSIS' |
  'PROJECTS' | 'PRACTICES' | 'COMMUNITY' | 'MENTORSHIP' |
  'PROFESSIONAL_DEVELOPMENT'

export type Milestone = 0 | 1 | 2 | 3 | 4

export type MilestoneMap = {
  'SERVER': Milestone,
  'CLIENT': Milestone,
  'INFRASTRUCTURE': Milestone,
  'ANALYSIS': Milestone,
  'PROJECTS': Milestone,
  'PRACTICES': Milestone,
  'COMMUNITY': Milestone,
  'MENTORSHIP': Milestone,
  'PROFESSIONAL_DEVELOPMENT': Milestone
}
export const milestones = [0, 1, 2, 3, 4]

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0
    case 1: return 1
    case 2: return 3
    case 3: return 6
    case 4: return 12
    default: return 0
  }
}

export const pointsToLevels = {
  '0': '1',
  '25': '2',
  '50': '3',
  '75': '4',
}

export const maxLevel = 108

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
}

type Tracks = {|
  'SERVER': Track,
  'CLIENT': Track,
  'INFRASTRUCTURE': Track,
  'ANALYSIS': Track,
  'PROJECTS': Track,
  'PRACTICES': Track,
  'COMMUNITY': Track,
  'MENTORSHIP': Track,
  'PROFESSIONAL_DEVELOPMENT': Track
|}

export const tracks: Tracks = {
  "SERVER": {
    "displayName": "Server",
    "category": "A",
    "description": "Development of server-side code. Examples: Ruby/Rails applications, WFG processes, Drupal migrations",
    "milestones": [
      {
        "summary": "Works within current applications following existing patterns",
        "signals": [
          "Works on stories that can be delivered in a short timeframe", 
          "Makes minor changes to existing applications",
          "Pair programs to fix well-documented bugs and deliver well-documented features",
        ],
        "examples": [
          "Updates a Rails view to show existing data",
          "Removes data from a Drupal migration",
          "Edits a question in a WorkflowGen form",
        ],
      },
      {
        "summary": "Extends current applictations with new features, creates new examples of existing applications",
        "signals": [
          "Applying lessons leaned from previous stories",
          "Refactoring code to new patterns",
          "Starts a new application from a template",
        ],
        "examples": [
          "Migrates a Rails application to a new major release",
          "Creates a new Drupal migration based on an existing migration",
          "Adds new questions to a WorkflowGen form",
        ],
      },
      {
        "summary": "Implements unique features or applications",
        "signals": [
          "Debugging and documenting novel problems",
          "Designing applications with new feature sets",
          "Integrates new applications with existing ones",
        ],
        "examples": [
          "Creating a Drupal migration that uses a new data source",
          "Designing a new WorkflowGen process that uses new parts of the tool",
          "Debugging and patching a unique problem occurring in a Rails gem",
        ],
      },
      {
        "summary": "Leads the design and implementation of new applications",
        "signals": [
          "Prioritization of a a list of stories needed to deliver a new application",
          "Sees steps to get from current to desired code",
          "Delivers code that is honed by past experience and easily changed in the future",
        ],
        "examples": [
          "Serving as Lead Developer for a new Rails application",
          "Leading multi-step refactoring necessary to implement a new feature",
          "Designing an application that can be changed to work with as-yet undeveloped code",
        ],
      }
    ],
  },
  "CLIENT": {
    "displayName": "Client",
    "category": "A",
    "description": "Development of client-side code. Examples: JavaScript applications, CSS, Accessibility, UI, UX.",
    "milestones": [
      {
        "summary": "Improvements to existing client-side code",
        "signals": [
          "TODO: Example Behavior 1",
          "TODO: Example Behavior 2",
          "TODO: Example Behavior 3",
        ],
        "examples": [
          "TODO: Example Task 1",
          "TODO: Example Task 2",
          "TODO: Example Task 3",
        ],
      },
      {
        "summary": "Develops new client code based on existing code",
        "signals": [
          "TODO: Example Behavior 1",
          "TODO: Example Behavior 2",
          "TODO: Example Behavior 3",
        ],
        "examples": [
          "TODO: Example Task 1",
          "TODO: Example Task 2",
          "TODO: Example Task 3",
        ],
      },
      {
        "summary": "Implements original client code with a lead",
        "signals": [
          "TODO: Example Behavior 1",
          "TODO: Example Behavior 2",
          "TODO: Example Behavior 3",
        ],
        "examples": [
          "TODO: Example Task 1",
          "TODO: Example Task 2",
          "TODO: Example Task 3",
        ],
      },
      {
        "summary": "Leads implementations of new client code",
        "signals": [
          "TODO: Example Behavior 1",
          "TODO: Example Behavior 2",
          "TODO: Example Behavior 3",
        ],
        "examples": [
          "TODO: Example Task 1",
          "TODO: Example Task 2",
          "TODO: Example Task 3",
        ],
      }
    ],
  },
  "INFRASTRUCTURE": {
    "displayName": "Infrastructure",
    "category": "A",
    "description": "Development of infrastructure automation code. Examples: Ansible, Capistrano.",
    "milestones": [
      {
        "summary": "TODO",
        "signals": [
          "TODO: Example Behavior 1",
          "TODO: Example Behavior 2",
          "TODO: Example Behavior 3",
        ],
        "examples": [
          "TODO: Example Task 1",
          "TODO: Example Task 2",
          "TODO: Example Task 3",
        ],
      },
      {
        "summary": "TODO",
        "signals": [
          "TODO: Example Behavior 1",
          "TODO: Example Behavior 2",
          "TODO: Example Behavior 3",
        ],
        "examples": [
          "TODO: Example Task 1",
          "TODO: Example Task 2",
          "TODO: Example Task 3",
        ],
      },
      {
        "summary": "TODO",
        "signals": [
          "TODO: Example Behavior 1",
          "TODO: Example Behavior 2",
          "TODO: Example Behavior 3",
        ],
        "examples": [
          "TODO: Example Task 1",
          "TODO: Example Task 2",
          "TODO: Example Task 3",
        ],
      },
      {
        "summary": "TODO",
        "signals": [
          "TODO: Example Behavior 1",
          "TODO: Example Behavior 2",
          "TODO: Example Behavior 3",
        ],
        "examples": [
          "TODO: Example Task 1",
          "TODO: Example Task 2",
          "TODO: Example Task 3",
        ],
      }
    ],
  },
  "ANALYSIS": {
    "displayName": "Analysis",
    "category": "B",
    "description": "Working with stakeholders to gather requirements, decomposing features in to deliverable stories.",
    "milestones": [
      {
        "summary": "TODO",
        "signals": [
          "TODO: Example Behavior 1",
          "TODO: Example Behavior 2",
          "TODO: Example Behavior 3",
        ],
        "examples": [
          "TODO: Example Task 1",
          "TODO: Example Task 2",
          "TODO: Example Task 3",
        ],
      },
      {
        "summary": "TODO",
        "signals": [
          "TODO: Example Behavior 1",
          "TODO: Example Behavior 2",
          "TODO: Example Behavior 3",
        ],
        "examples": [
          "TODO: Example Task 1",
          "TODO: Example Task 2",
          "TODO: Example Task 3",
        ],
      },
      {
        "summary": "TODO",
        "signals": [
          "TODO: Example Behavior 1",
          "TODO: Example Behavior 2",
          "TODO: Example Behavior 3",
        ],
        "examples": [
          "TODO: Example Task 1",
          "TODO: Example Task 2",
          "TODO: Example Task 3",
        ],
      },
      {
        "summary": "TODO",
        "signals": [
          "TODO: Example Behavior 1",
          "TODO: Example Behavior 2",
          "TODO: Example Behavior 3",
        ],
        "examples": [
          "TODO: Example Task 1",
          "TODO: Example Task 2",
          "TODO: Example Task 3",
        ],
      }
    ],
  },
  "PROJECTS": {
    "displayName": "Project Management",
    "category": "B",
    "description": "Agile project management skills, communication with stakeholders, ensuring work is delivered at the expected time.",
    "milestones": [
      {
        "summary": "TODO",
        "signals": [
          "TODO: Example Behavior 1",
          "TODO: Example Behavior 2",
          "TODO: Example Behavior 3",
        ],
        "examples": [
          "TODO: Example Task 1",
          "TODO: Example Task 2",
          "TODO: Example Task 3",
        ],
      },
      {
        "summary": "TODO",
        "signals": [
          "TODO: Example Behavior 1, speaking",
          "TODO: Example Behavior 2, blogging",
          "TODO: Example Behavior 3",
        ],
        "examples": [
          "TODO: Example Task 1",
          "TODO: Example Task 2",
          "TODO: Example Task 3",
        ],
      },
      {
        "summary": "TODO",
        "signals": [
          "TODO: Example Behavior 1",
          "TODO: Example Behavior 2",
          "TODO: Example Behavior 3",
        ],
        "examples": [
          "TODO: Example Task 1",
          "TODO: Example Task 2",
          "TODO: Example Task 3",
        ],
      },
      {
        "summary": "TODO",
        "signals": [
          "TODO: Example Behavior 1",
          "TODO: Example Behavior 2",
          "TODO: Example Behavior 3",
        ],
        "examples": [
          "TODO: Example Task 1",
          "TODO: Example Task 2",
          "TODO: Example Task 3",
        ],
      }
    ],
  },
  "PRACTICES": {
    "displayName": "Best Practices",
    "category": "B",
    "description": "Following and improving the team's Best Practices, documentation and tools.",
    "milestones": [
      {
        "summary": "Follows established best practices",
        "signals": [
          "TODO: Example Behavior 1",
          "TODO: Example Behavior 2",
          "TODO: Example Behavior 3",
        ],
        "examples": [
          "TODO: Example Task 1",
          "TODO: Example Task 2",
          "TODO: Example Task 3",
        ],
      },
      {
        "summary": "Suggests modifications to best practices",
        "signals": [
          "TODO: Example Behavior 1",
          "TODO: Example Behavior 2",
          "TODO: Example Behavior 3",
        ],
        "examples": [
          "TODO: Example Task 1",
          "TODO: Example Task 2",
          "TODO: Example Task 3",
        ],
      },
      {
        "summary": "Teaches best practices within or outside ASR",
        "signals": [
          "TODO: Example Behavior 1",
          "TODO: Example Behavior 2",
          "TODO: Example Behavior 3",
        ],
        "examples": [
          "TODO: Example Task 1",
          "TODO: Example Task 2",
          "TODO: Example Task 3",
        ],
      },
      {
        "summary": "Runs best practices experiments and iteration",
        "signals": [
          "TODO: Example Behavior 1",
          "TODO: Example Behavior 2",
          "TODO: Example Behavior 3",
        ],
        "examples": [
          "TODO: Example Task 1",
          "TODO: Example Task 2",
          "TODO: Example Task 3",
        ],
      }
    ],
  },
  "COMMUNITY": {
    "displayName": "Community Participation",
    "category": "C",
    "description": "Participation in IT communities, both in person and virtual.",
    "milestones": [
      {
        "summary": "TODO",
        "signals": [
          "TODO: Example Behavior 1",
          "TODO: Example Behavior 2",
          "TODO: Example Behavior 3",
        ],
        "examples": [
          "TODO: Example Task 1",
          "TODO: Example Task 2",
          "TODO: Example Task 3",
        ],
      },
      {
        "summary": "TODO",
        "signals": [
          "TODO: Example Behavior 1",
          "TODO: Example Behavior 2",
          "TODO: Example Behavior 3",
        ],
        "examples": [
          "TODO: Example Task 1",
          "TODO: Example Task 2",
          "TODO: Example Task 3",
        ],
      },
      {
        "summary": "TODO",
        "signals": [
          "TODO: Example Behavior 1",
          "TODO: Example Behavior 2",
          "TODO: Example Behavior 3",
        ],
        "examples": [
          "TODO: Example Task 1",
          "TODO: Example Task 2",
          "TODO: Example Task 3",
        ],
      },
      {
        "summary": "TODO",
        "signals": [
          "TODO: Example Behavior 1",
          "TODO: Example Behavior 2",
          "TODO: Example Behavior 3",
        ],
        "examples": [
          "TODO: Example Task 1",
          "TODO: Example Task 2",
          "TODO: Example Task 3",
        ],
      }
    ],
  },
  "MENTORSHIP": {
    "displayName": "Mentorship",
    "category": "C",
    "description": "Provides support to colleagues, spreads knowledge, and develops the team outside formal reporting structures.",
    "milestones": [
      {
        "summary": "TODO",
        "signals": [
          "TODO: Example Behavior 1",
          "TODO: Example Behavior 2",
          "TODO: Example Behavior 3",
        ],
        "examples": [
          "TODO: Example Task 1",
          "TODO: Example Task 2",
          "TODO: Example Task 3",
        ],
      },
      {
        "summary": "TODO",
        "signals": [
          "TODO: Example Behavior 1",
          "TODO: Example Behavior 2",
          "TODO: Example Behavior 3",
        ],
        "examples": [
          "TODO: Example Task 1",
          "TODO: Example Task 2",
          "TODO: Example Task 3",
        ],
      },
      {
        "summary": "TODO",
        "signals": [
          "TODO: Example Behavior 1",
          "TODO: Example Behavior 2",
          "TODO: Example Behavior 3",
        ],
        "examples": [
          "TODO: Example Task 1",
          "TODO: Example Task 2",
          "TODO: Example Task 3",
        ],
      },
      {
        "summary": "TODO",
        "signals": [
          "TODO: Example Behavior 1",
          "TODO: Example Behavior 2",
          "TODO: Example Behavior 3",
        ],
        "examples": [
          "TODO: Example Task 1",
          "TODO: Example Task 2",
          "TODO: Example Task 3",
        ],
      }
    ],
  },
  "PROFESSIONAL_DEVELOPMENT": {
    "displayName": "Professional Development",
    "category": "C",
    "description": "Identifying skills you want to improve and how to do so.",
    "milestones": [
      {
        "summary": "Follows team suggestions for professional development",
        "signals": [
          "TODO: Example Behavior 1",
          "TODO: Example Behavior 2",
          "TODO: Example Behavior 3",
        ],
        "examples": [
          "TODO: Example Task 1",
          "TODO: Example Task 2",
          "TODO: Example Task 3",
        ],
      },
      {
        "summary": "Plans and complete your own professional development goals",
        "signals": [
          "TODO: Example Behavior 1",
          "TODO: Example Behavior 2",
          "TODO: Example Behavior 3",
        ],
        "examples": [
          "TODO: Example Task 1",
          "TODO: Example Task 2",
          "TODO: Example Task 3",
        ],
      },
      {
        "summary": "Identifies future needs of the team to create professional development goals",
        "signals": [
          "TODO: Example Behavior 1",
          "TODO: Example Behavior 2",
          "TODO: Example Behavior 3",
        ],
        "examples": [
          "TODO: Example Task 1",
          "TODO: Example Task 2",
          "TODO: Example Task 3",
        ],
      },
      {
        "summary": "Work with the team to build professional development plans to meet team-wide needs",
        "signals": [
          "TODO: Example Behavior 1",
          "TODO: Example Behavior 2",
          "TODO: Example Behavior 3",
        ],
        "examples": [
          "TODO: Example Task 1",
          "TODO: Example Task 2",
          "TODO: Example Task 3",
        ],
      }
    ],
  },
}

export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#00abc2', '#428af6', '#e1439f', '#e54552'])

export const titles = [
  {label: 'Dev1', minPoints: 0, maxPoints: 27},
  {label: 'Dev2', minPoints: 22, maxPoints: 54},
  {label: 'Dev3', minPoints: 49, maxPoints: 81},
  {label: 'Dev4', minPoints: 76, maxPoints: 108}
]

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
}
