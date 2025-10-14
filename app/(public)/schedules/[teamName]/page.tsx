import { TeamScheduleView } from './_components/team-schedule-view';

export default async function TeamSchedulePage({
  params,
}: {
  params: Promise<{ teamName: string }>;
}) {
  const { teamName } = await params;
  const decodedTeamName = decodeURIComponent(teamName);

  return <TeamScheduleView teamName={decodedTeamName} />;
}
