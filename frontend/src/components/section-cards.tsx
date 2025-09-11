"use client";

import { useQuery } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getTasks } from "@/lib/api"; // ta fonction API pour récupérer les tâches

export function SectionCards() {
  const { data: tasks = [] } = useQuery({
    queryKey: ["task"],
    queryFn: getTasks,
  });

  // Calcul des statistiques
  const totalTasks = tasks.length;
  const doneTasks = tasks.filter((t: any) => t.status === "Done").length;
  const inProgressTasks = tasks.filter((t: any) => t.status === "In Progress").length;
  const todoTasks = tasks.filter((t: any) => t.status === "Todo").length;

  return (
      <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">

        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Total Task</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {totalTasks}
            </CardTitle>
            <CardAction>
              <Badge variant="outline"></Badge>
            </CardAction>
          </CardHeader>
        </Card>

        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Task Done</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {doneTasks}
            </CardTitle>
            <CardAction>
              <Badge variant="outline"></Badge>
            </CardAction>
          </CardHeader>
        </Card>

        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Task in progress</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {inProgressTasks}
            </CardTitle>
            <CardAction>
              <Badge variant="outline"></Badge>
            </CardAction>
          </CardHeader>
        </Card>

        <Card className="@container/card">
          <CardHeader>
            <CardDescription>Task todo</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              {todoTasks}
            </CardTitle>
            <CardAction>
              <Badge variant="outline"></Badge>
            </CardAction>
          </CardHeader>
        </Card>

      </div>
  );
}
