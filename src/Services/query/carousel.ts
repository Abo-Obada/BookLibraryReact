import { useQuery } from "@tanstack/react-query";
import { api } from "../api/carousel";
import type { Carousel } from "../model/carousel";

export const query = {

    server: {
    carousel: {
        get: () => {
            return useQuery<Carousel[]>({
                queryKey: ['carousel'],
                staleTime: 1000 * 60 * 5,
                queryFn: () => api.carousel.get(), 
            });
        }}}}