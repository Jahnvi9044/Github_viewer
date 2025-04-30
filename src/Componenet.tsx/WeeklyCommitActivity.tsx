import React, { useEffect, useState } from 'react';

type WeekCommitData = {
  weekStart: number;
  dailyCommits: number[];
};

interface Props {
  username: string;
}

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const WeeklyCommitActivity: React.FC<Props> = ({ username }) => {
  const [commitData, setCommitData] = useState<WeekCommitData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommitData = async () => {
      try {
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos`);
        const repos = await reposRes.json();

        const weekMap: { [weekStart: number]: number[] } = {};

        for (const repo of repos) {
          const statsRes = await fetch(
            `https://api.github.com/repos/${repo.owner.login}/${repo.name}/stats/commit_activity`
          );
          if (statsRes.status === 202) continue; // Still processing
          const stats = await statsRes.json();

          stats.forEach((week: any) => {
            if (!weekMap[week.week]) {
              weekMap[week.week] = [...week.days];
            } else {
              for (let i = 0; i < 7; i++) {
                weekMap[week.week][i] += week.days[i];
              }
            }
          });
        }

        const finalCommitData: WeekCommitData[] = Object.entries(weekMap).map(([weekStart, days]) => ({
          weekStart: Number(weekStart),
          dailyCommits: days,
        }));

        finalCommitData.sort((a, b) => a.weekStart - b.weekStart);

        setCommitData(finalCommitData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching commit data:', error);
        setLoading(false);
      }
    };

    fetchCommitData();
  }, [username]);

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return `${date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}`;
  };

  if (loading) return <p>Loading commit data...</p>;

  return (
    <div className="overflow-x-auto mt-6">
      <table className="table-auto border-collapse border border-gray-500 w-full text-sm">
        <thead>
          <tr>
            <th className="border border-gray-400 px-2 py-1">Week Starting</th>
            {days.map(day => (
              <th key={day} className="border border-gray-400 px-2 py-1">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {commitData.map((week, idx) => (
            <tr key={idx}>
              <td className="border border-gray-300 px-2 py-1 font-medium">{formatDate(week.weekStart)}</td>
              {week.dailyCommits.map((count, i) => (
                <td key={i} className="border border-gray-300 px-2 py-1 text-center">{count}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeeklyCommitActivity;
