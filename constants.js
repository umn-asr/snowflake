// @flow
import * as d3 from 'd3'

export type TrackId = 'SERVER' | 'CLIENT' | 'WORKFLOW' | 'OPERATIONS' |
  'COMMUNITY' | 'MENTORSHIP' | 'PRACTICES' | 'COLLABORATION' |
  'PROFESSIONAL_DEVELOPMENT'

export type Milestone = 0 | 1 | 2 | 3 | 4 | 5

export type MilestoneMap = {
  'SERVER': Milestone,
  'CLIENT': Milestone,
  'WORKFLOW': Milestone,
  'OPERATIONS': Milestone,
  'COMMUNITY': Milestone,
  'MENTORSHIP': Milestone,
  'PRACTICES': Milestone,
  'COLLABORATION': Milestone,
  'PROFESSIONAL_DEVELOPMENT': Milestone
}
export const milestones = [0, 1, 2, 3, 4, 5]

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0
    case 1: return 1
    case 2: return 3
    case 3: return 6
    case 4: return 12
    case 5: return 20
    default: return 0
  }
}

export const pointsToLevels = {
  '0': '1.1',
  '5': '1.2',
  '11': '1.3',
  '17': '2.1',
  '23': '2.2',
  '29': '2.3',
  '36': '3.1',
  '43': '3.2',
  '50': '3.3',
  '58': '4.1',
  '66': '4.2',
  '74': '4.3',
  '90': '5.1',
  '110': '5.2',
  '135': '5.3',
}

export const maxLevel = 135

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
  'WORKFLOW': Track,
  'OPERATIONS': Track,
  'COMMUNITY': Track,
  'MENTORSHIP': Track,
  'PRACTICES': Track,
  'COLLABORATION': Track,
  'PROFESSIONAL_DEVELOPMENT': Track
|}

export const tracks: Tracks = {
  "SERVER": {
    "displayName": "Server Code",
    "category": "A",
    "description": "Development of server-side applications. Ruby on Rails or standalone Ruby processes.",
    "milestones": [
      {
        "summary": "Works within current applications",
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
        "summary": "Creates new examples of existing applications or features",
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
        "summary": "Implements unique features or applications with a lead",
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
        "summary": "Leads implementations of unique features or applications",
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
        "summary": "Leads implementations of multiple-application solutions",
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
  "CLIENT": {
    "displayName": "Client Code",
    "category": "A",
    "description": "Develops expertise in web client technologies, such as HTML, CSS, and JavaScript",
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
      },
      {
        "summary": "Leads implementations of client code libraries that are used across multiple applications ",
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
  "WORKFLOW": {
    "displayName": "WorkflowGen Code",
    "category": "A",
    "description": "Workflow gen description",
    "milestones": [
      {
        "summary": "Works within current applications",
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
        "summary": "Creates new examples of existing applications or features",
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
        "summary": "Implements unique features or applications with a lead",
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
        "summary": "Leads implementations of unique features or applications",
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
        "summary": "Leads implementations of multiple-application solutions",
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
  "OPERATIONS": {
    "displayName": "Operations",
    "category": "B",
    "description": "Automation of servers, monitoring, notifications",
    "milestones": [
      {
        "summary": "Runs existing automation, making minor modifications",
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
        "summary": "Updates existing automation, creates new automation based on existing ones",
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
        "summary": "Creating new, unique automation.",
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
        "summary": "Collaborating with OIT groups to design new automation services",
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
    "displayName": "Community participation",
    "category": "C",
    "description": "TODO: Community description",
    "milestones": [
      {
        "summary": "Attending UMN IT Community events",
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
        "summary": "Participation in UMN IT Community events",
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
        "summary": "Organizing indivdual UMN IT Community events",
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
        "summary": "Creating new events or processess for new event organizers",
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
    "description": "TODO: Mentorship description",
    "milestones": [
      {
        "summary": "Informal mentorship",
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
        "summary": "Onboarding new employees",
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
        "summary": "Formal mentorship",
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
        "summary": "Group mentorship",
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
        "summary": "Training mentors, organizing mentorship programs",
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
    "description": "TODO: Best practices description",
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
  "COLLABORATION": {
    "displayName": "Collaboration",
    "category": "B",
    "description": "Buliding relationships outside of ASR",
    "milestones": [
      {
        "summary": "Works with other teams when assigned to a project",
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
        "summary": "Leads projects requiring collaboration with external departments",
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
        "summary": "Forges new collaborations by meeting with other teams and finding ways to work together",
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
        "summary": "Align future work for collaboration by meeting with service owners, directors, etc.",
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
    "description": "TODO: Professional Development description",
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
  {label: 'Dev1', minPoints: 0, maxPoints: 20},
  {label: 'Dev2', minPoints: 21, maxPoints: 70},
  {label: 'Dev3', minPoints: 71, maxPoints: 120},
  {label: 'Dev4', minPoints: 121, maxPoints: 140}
]

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
}
