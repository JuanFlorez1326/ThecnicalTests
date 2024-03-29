export interface Stories {
    code:            number;
    status:          string;
    copyright:       string;
    attributionText: string;
    attributionHTML: string;
    etag:            string;
    data:            Data;
}

export interface Data {
    offset:  number;
    limit:   number;
    total:   number;
    count:   number;
    results: ResultStory[];
}

export interface ResultStory {
    id:            number;
    title:         string;
    description:   string;
    resourceURI:   string;
    type:          string;
    modified:      string;
    thumbnail:     null;
    creators:      Characters;
    characters:    Characters;
    series:        Characters;
    comics:        Characters;
    events:        Characters;
    originalIssue: OriginalIssue;
}

export interface Characters {
    available:     number;
    collectionURI: string;
    items:         OriginalIssue[];
    returned:      number;
}

export interface OriginalIssue {
    resourceURI: string;
    name:        string;
}