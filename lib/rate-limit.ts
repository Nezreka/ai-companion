import {Ratelimit} from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const rateLimit = async (identifier: string) => {
    const rateLimit = new Ratelimit({
        redis: Redis.fromEnv(),
        limiter: Ratelimit.slidingWindow(10, "10 s"),
        analytics: true,
        prefix: "@upstash/ratelimit",
    });
    return await rateLimit.limit(identifier)
}
 
export default rateLimit;