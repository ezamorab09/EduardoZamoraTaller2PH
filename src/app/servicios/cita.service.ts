import { Injectable } from '@angular/core';
import { Cita } from '../modelo/cita';
import { Capacitor } from '@capacitor/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
@Injectable({
  providedIn: 'root'
})
export class CitaService {

  sqlite:SQLiteConnection = new SQLiteConnection(CapacitorSQLite)
  plataforma: string = ""

  DB_NAME: string         = "Lista_Citas";
  DB_ENCRIPTADA: boolean  = false;
  DB_MODE: string         = "no-encryption";
  DB_VERSION: number      = 1;
  DB_READ_ONLY: boolean   = false;
  TABLE_NAME:string       = "lista-citas"
  DB_SQL_TABLAS: string = `
    CREATE TABLE IF NOT EXISTS ${this.TABLE_NAME} (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      cita TEXT NOT NULL,
      autor TEXT NOT NULL
    )
  `;

  db!: SQLiteDBConnection;

  constructor() { }

  private async _iniciarPluginWeb(): Promise<void> {
    await customElements.whenDefined('jeep-sqlite')
    const jeepSqliteEl = document.querySelector("jeep-sqlite")
    if( jeepSqliteEl != null) {
      await this.sqlite.initWebStore()
    }
  }

  async iniciarPlugin() {
    this.plataforma = Capacitor.getPlatform()
    if( this.plataforma == "web"){
      this._iniciarPluginWeb()
    }
    await this.abrirConexion()
    await this.db.execute(this.DB_SQL_TABLAS)
  }

  async abrirConexion() {
    const ret = await this.sqlite.checkConnectionsConsistency()
    const isConn = (await this.sqlite.isConnection(this.DB_NAME, this.DB_READ_ONLY)).result
    if(ret.result && isConn) {
      this.db = await this.sqlite.retrieveConnection(this.DB_NAME, this.DB_READ_ONLY)
    } else {
      this.db = await this.sqlite.createConnection(
        this.DB_NAME,
        this.DB_ENCRIPTADA,
        this.DB_MODE,
        this.DB_VERSION,
        this.DB_READ_ONLY
      )
    }

    await this.db.open()
    this.agregarCita({})

  }

  async getCitaAleatoria(): Promise<Cita> {
    const sql = `SELECT * FROM ${this.TABLE_NAME}`;
    const res = await this.db.query(sql);
    const citas = res?.values ?? [];
    const randomIndex = Math.floor(Math.random() * citas.length);
    return citas[randomIndex];
  }

  async agregarCita(cita: Cita) {
    const sql = `INSERT INTO ${this.TABLE_NAME} (cita, autor) VALUES (?, ?)`;
    await this.db.run(sql, [cita.cita, cita.autor]);
  }

  async borrarCita(id: number) {
    const sql = `DELETE FROM ${this.TABLE_NAME} WHERE id = ?`;
    await this.db.run(sql, [id]);
  }

  async getCitas(): Promise<Cita[]> {
    const sql = `SELECT * FROM ${this.TABLE_NAME}`
    const cita = await this.db.query(sql)
    return cita?.values ?? []
  }


}
