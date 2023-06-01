import React, {useState} from "react";
import {Trainee} from "../models";
import {nanoid} from "nanoid";
import dayjs from "dayjs";

interface Props {
    onAddRecord: (trainee: Trainee) => void,
}

export default function AddRecord ({onAddRecord}: Props) {

    const [record, setRecord] = useState(
        {
            date: "",
            distance: '',
        }
    );


    const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setRecord({...record, [name]: value});
    }



    const addNewRecord = (e) => {
        e.preventDefault();
        const newRecord: Trainee = {
            id: nanoid(),
            date: dayjs(record.date).format('DD.MM.YYYY'),
            distance: record.distance,
        }
        onAddRecord(newRecord);
        setRecord({
            date: "",
            distance: ""
        })
    }

    return (
        <form onSubmit={addNewRecord}>
            <div>
                <label htmlFor="date">Date</label>
                <input type="date" name="date" id="date" value={record.date} onChange={getValue} />
            </div>
            <div>
                <label htmlFor="distance">Distance</label>
                <input type="text" name="distance" id="distance" value={record.distance}  onChange={getValue}/>
            </div>
            <button type="submit">OK</button>
        </form>
    )
}