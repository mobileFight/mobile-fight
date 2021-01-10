import { socketClient } from "@lib/ws"

export async function getLocation(locationId: number) {
  const data = await socketClient.send("get.location", { locationId })

  return data
}
