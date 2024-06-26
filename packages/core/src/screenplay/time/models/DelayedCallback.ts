import { Timestamp } from './Timestamp';

/**
 * @group Time
 */
export interface DelayedCallback<Result> {
    (stats: { currentTime: Timestamp, i: number }): Promise<Result> | Result;
}
