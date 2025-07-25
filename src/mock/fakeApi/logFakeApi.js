import { mock } from '../MockAdapter'
import { logData } from '../data/logData'

mock.onGet(`/api/logs`).reply((config) => {
    const { filter, activityIndex } = config.params

    let loadable = true
    const maxGetItem = 3
    const count = (activityIndex - 1) * maxGetItem
    let logs = logData
    if (count >= logs.length) {
        loadable = false
    }
    logs = logs.slice(count, activityIndex * maxGetItem)

    if (filter) {
        logs = structuredClone(logs).map((log) => {
            log.events = log.events.filter((event) =>
                filter.includes(event.type),
            )
            return log
        })
    }

    const response = {
        data: logs,
        loadable,
    }
    return [200, response]
})
