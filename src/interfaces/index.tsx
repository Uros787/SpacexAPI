import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface dataType {
    name: string
    company: string,
    country: string,
    first_flight: string,
    flickr_images: string[]
    agency: string,
    launches: string[],
    status: string,
    image: string,
}

export interface RocketType extends dataType {
    company: string,
    country: string,
    first_flight: string,
    flickr_images: string[]
}
export interface CrewMemberType extends dataType {
    agency: string,
    launches: string[],
    status: string,
    image: string,
}
export type stackRouterParamList = {
    BottomRouter: undefined,
    CrewMember: { props: CrewMemberType }
}
export type CrewMemberProps = NativeStackScreenProps<stackRouterParamList, 'CrewMember'>;
export type CrewMemberNavigationProp = CrewMemberProps['navigation'];

export type bottomRouterParamList = {
    Rockets: undefined,
    CrewMembers: undefined
}