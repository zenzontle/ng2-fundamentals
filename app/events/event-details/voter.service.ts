import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ISession } from '../shared/event.model';

@Injectable()
export class VoterService {
    
    constructor(private http: Http) { }
    
    deleteVoter(eventId: number, session: ISession, voterName: string) {
        session.voters = session.voters.filter(voter => voter !== voterName);
        
        let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        // self-subscribing as we don't care when we return nor the value
        this.http.delete(url).catch(this.handleError).subscribe();
    }
    
    addVoter(eventId: number, session: ISession, voterName: string) {
        session.voters.push(voterName);
        
        let headers = new Headers({'Content-Type':'applicatino/json'});
        let options = new RequestOptions({headers: headers});
        
        let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        // self-subscribing as we don't care when we return nor the value
        this.http.post(url, JSON.stringify({}), options).catch(this.handleError).subscribe();
    }
    
    userHasVoted(session: ISession, voterName: string) {
        return session.voters.some(voter => voter === voterName);
    }
    
    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}