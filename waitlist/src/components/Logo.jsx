'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
const Logo = () => {
  const t = useTranslations("Logo")

  return (
    <header className="px-6 py-3 z-10">
    <h1 className="text-white md:text-xl  text-base satoshi-bold">{t("name")}</h1>
  </header>
  )
}

export default Logo