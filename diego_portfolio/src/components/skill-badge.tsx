"use client"

import { motion } from "framer-motion"
import { Badge } from "@/src/components/ui/badge"

interface SkillBadgeProps {
  name: string
  variant?: "default" | "soft"
}

export function SkillBadge({ name, variant = "default" }: SkillBadgeProps) {
  const isSoft = variant === "soft"

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Badge
        className={`
          text-sm py-1.5 px-3 font-medium
          ${
            isSoft
              ? "bg-primary/5 hover:bg-primary/10 text-foreground border border-primary/20"
              : "bg-gradient-to-r from-primary/80 to-purple-500/80 hover:from-primary hover:to-purple-500"
          }
        `}
      >
        {name}
      </Badge>
    </motion.div>
  )
}
