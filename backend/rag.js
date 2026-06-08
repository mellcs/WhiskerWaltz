import fs from "fs"
import path from "path"

let lore = []

export function loadLore() {

  const loreFolder =
    path.join(process.cwd(), "lore")

  const files =
    fs.readdirSync(loreFolder)

  lore = files.map((file) => {

    const content = fs.readFileSync(
      path.join(loreFolder, file),
      "utf-8"
    )

    return {
      file,
      content,
    }
  })

  console.log("Lore carregada!")
}

export function searchLore(query) {

  if (!query) {
    return "Sem informações."
  }

  const lowerQuery =
    query.toLowerCase()

  const matches = lore.filter((entry) =>
    entry.content
      .toLowerCase()
      .includes(lowerQuery)
  )

  if (matches.length === 0) {

    return lore
      .map((entry) => entry.content)
      .join("\n\n")
  }

  return matches
    .map((entry) => entry.content)
    .join("\n\n")
}