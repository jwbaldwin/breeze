/* eslint-disable @typescript-eslint/no-unused-vars */
export class Template {
    name: string;
    createdOn: Date;
    updatedOn: Date;
    questions: QnA[];

    constructor(name: string, questions?: QnA[]) {
        this.name = name
        this.createdOn = new Date()
        this.updatedOn = new Date()
        if (questions) {
            this.questions = questions
        }
    }
}


export class QnA {
    question: string;
    answer: string;

    constructor(question: string) {
        this.question = question
    }
}