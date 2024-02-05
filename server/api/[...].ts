
import type { H3Event } from 'h3'
const router = createRouter();

router.get('/socket.io', defineEventHandler((event: H3Event) => initSocket(event)))


export default useBase('/api', router.handler)