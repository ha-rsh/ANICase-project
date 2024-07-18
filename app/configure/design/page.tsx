import { db } from "@/db"
import { notFound } from "next/navigation"
import DesignConfiguratior from "./DesignConfigurator"

interface pageProps {
    searchParams : {
        [key : string]: string | string[] | undefined
    }
}

const Page = async ({searchParams}: pageProps) => {
    const { id } = searchParams

    if (!id || typeof id !== "string") {
        return notFound()
    }

    const configuration = await db.configuration.findUnique({
        where : {
            id
        }
    })

    if (!configuration) {
        return notFound()
    }

    const { imageUrl, width, height } = configuration

    return (
        <DesignConfiguratior
            configId={configuration.id}
            imageDimensions={{width, height}}
            imageUrl={imageUrl}
        />
    )
}

export default Page