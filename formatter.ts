import {underline} from "https://deno.land/std@v0.39.0/fmt/colors.ts" 

export function underlineIt(txt: string): string{
    return underline(txt)
}
