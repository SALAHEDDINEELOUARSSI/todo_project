"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useQuery } from "@tanstack/react-query";

import { Button } from "@/components/ui/button"
import {FormTask} from "@/components/form"

import {getTasks} from "@/lib/api";

export default function Page() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["task"],
    queryFn: getTasks,
    staleTime: 1000 * 60,
  });

  if (isLoading) return <p>Chargement...</p>;
  if (isError) return <p>Erreur : {(error as Error).message}</p>;

  return (
      <SidebarProvider
          style={
            {
              "--sidebar-width": "calc(var(--spacing) * 72)",
              "--header-height": "calc(var(--spacing) * 12)",
            } as React.CSSProperties
          }
      >
        <SidebarInset>
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">


                <SectionCards />
                <div className="px-4 lg:px-6"></div>
                <DataTable data={data} />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
  )
}
