import {ChildEntity, Column, Entity, PrimaryGeneratedColumn, TableInheritance} from "typeorm";



@Entity()
export class Operation {
    @PrimaryGeneratedColumn('uuid')
    public id: string

    @Column()
    public operationProperty: string
}

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class Issuance extends Operation {
    @Column()
    public issuanceProperty: string
}



@ChildEntity()
export class BondIssuance extends Issuance {
    @Column()
    public bondProperty: string
}


@ChildEntity()
export class EMTNIssuance extends Issuance {
    @Column()
    public emtnProperty: string
}

