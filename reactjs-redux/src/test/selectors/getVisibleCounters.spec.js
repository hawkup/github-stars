import expect from 'expect'
import { getVisibleCounters } from '../../selectors'

describe('getVisibleCounters selector', () => {
  const counters = [
    {
      id: 0,
      count: 2
    }, {
      id: 1,
      count: 1
    }
  ]

  it('should handle SHOW_ALL filter', () => {
    expect(
      getVisibleCounters({
        counters,
        visibilityFilter: 'SHOW_ALL'
      })
    ).toEqual([
      {
        id: 0,
        count: 2
      }, {
        id: 1,
        count: 1
      }
    ])
  })

  it('should handle SHOW_ODD filter', () => {
    expect(
      getVisibleCounters({
        counters,
        visibilityFilter: 'SHOW_ODD'
      })
    ).toEqual([
      {
        id: 1,
        count: 1
      }
    ])
  })

  it('should handle SHOW_EVEN filter', () => {
    expect(
      getVisibleCounters({
        counters,
        visibilityFilter: 'SHOW_EVEN'
      })
    ).toEqual([
      {
        id: 0,
        count: 2
      }
    ])
  })
})
