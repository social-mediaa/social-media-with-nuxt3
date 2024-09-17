import { prisma } from "../db/index";

export const createMediaFile=(mediaFile)=>{
    return prisma.mediaFile.create({
        data :mediaFile
    })
}