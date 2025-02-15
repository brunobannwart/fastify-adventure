import { CloudWatchLogs, InputLogEvent } from '@aws-sdk/client-cloudwatch-logs';

import { getConstants } from '@core/constants';

class CloudwatchLogsAmazon {
  static getInstance () {
    const instance: CloudWatchLogs = new CloudWatchLogs({
      credentials: {
        accessKeyId: getConstants().aws.accessKey,
        secretAccessKey: getConstants().aws.secretKey,
      },
      region: getConstants().aws.cloudwatch.region,
    });

    return instance;
  }

  static async putLogEvents (group: string, stream: string, events: InputLogEvent[]) {
    const instance = CloudwatchLogsAmazon.getInstance();

    await CloudwatchLogsAmazon.createLogGroup(group);
    await CloudwatchLogsAmazon.createLogStream(group, stream);

    await instance.putLogEvents({
      logGroupName: group,
      logStreamName: stream,
      logEvents: events,
    });
  }

  static async getLogGroupByName (group: string) {
    const logGroups = await CloudwatchLogsAmazon.listApplicationLogGroups();

    return logGroups.find((logGroup) => logGroup.logGroupName === group);
  }

  static async getLogStreamByName (group: string, stream: string) {
    const logStreams = await CloudwatchLogsAmazon.listApplicationLogStreams(group);

    return logStreams.find((logStream) => logStream.logStreamName === stream);
  }

  static async listApplicationLogGroups () {
    const instance = CloudwatchLogsAmazon.getInstance();

    const { logGroups } = await instance.describeLogGroups({
      logGroupNamePrefix: getConstants().aws.cloudwatch.group,
    });

    return logGroups;
  }

  static async listApplicationLogStreams (group: string) {
    const instance = CloudwatchLogsAmazon.getInstance();

    const { logStreams } = await instance.describeLogStreams({
      logGroupName: group,
    });

    return logStreams;
  }

  static async createLogGroup (group: string) {
    const logGroup = await CloudwatchLogsAmazon.getLogGroupByName(group);

    if (!logGroup) {
      const instance = CloudwatchLogsAmazon.getInstance();

      await instance.createLogGroup({
        logGroupName: group,
      });
    }
  }

  static async createLogStream (group: string, stream: string) {
    const logStream = await CloudwatchLogsAmazon.getLogStreamByName(group, stream);

    if (!logStream) {
      const instance = CloudwatchLogsAmazon.getInstance();

      await instance.createLogStream({
        logGroupName: group,
        logStreamName: stream,
      });
    }
  }
}

export default CloudwatchLogsAmazon;