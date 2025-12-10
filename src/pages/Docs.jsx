const Docs = () => {


    return (

        <div className='p-10 max-w'>

            <h1 className='text-3xl font-bold mb-8'>Docs</h1>

            <div className='space-y-8 text-[var(--black)]'>

                <section>
                    <h2 className='text-xl font-semibold mb-2'>⚡ 1. Cálculos de consumo del cliente (punto de partida)</h2>
                    <p>• <b>Consumo diario en Wh:</b> Suma de todos los electrodomésticos × horas de uso.</p>
                    <p>• <b>Consumo mensual (kWh):</b> Sirve para entender si el sistema será on-grid, híbrido u off-grid.</p>
                    <p>• <b>Pico de potencia (W):</b> Qué equipos se usan al mismo tiempo → importante para dimensionar el inversor.</p>
                </section>

                <section>
                    <h2 className='text-xl font-semibold mb-2'>☀️ 2. Cálculos del generador solar (los paneles)</h2>
                    <p>• <b>Energía que puede generar la instalación:</b> Paneles (W) × horas pico solares del lugar (HSP).</p>
                    <p>• <b>Cantidad de paneles necesarios:</b> Consumo diario / producción por panel.</p>
                    <p>• <b>Cálculo de voltaje y corriente del arreglo:</b></p>
                    <p className='ml-4'>– Serie → suma voltajes.</p>
                    <p className='ml-4'>– Paralelo → suma corrientes.</p>
                    <p>• <b>Cálculo de pérdidas:</b> Por cables, temperatura, suciedad, inversor, etc. Se resta entre un 10% y 20%.</p>
                </section>

                <section>
                    <h2 className='text-xl font-semibold mb-2'>🔋 3. Cálculos para batería (si el sistema la lleva)</h2>
                    <p>• <b>Energía a almacenar (Wh o Ah):</b> Consumo diario × días de autonomía deseados.</p>
                    <p>• <b>Capacidad de la batería:</b> En Ah, según voltaje del banco (12V, 24V, 48V). Incluye profundidad de descarga (DoD).</p>
                    <p>• <b>Cantidad de baterías y su conexión:</b> Serie/paralelo según voltaje y amperaje requerido.</p>
                </section>

                <section>
                    <h2 className='text-xl font-semibold mb-2'>🔌 4. Cálculos del regulador de carga</h2>
                    <p>• <b>Corriente que debe soportar (A):</b> Amperios del arreglo de paneles × factor de seguridad (1,25).</p>
                    <p>• <b>Compatibilidad de voltaje:</b> Que el voltaje del arreglo (Voc/Vmp) no exceda límites del regulador MPPT/PWM.</p>
                </section>

                <section>
                    <h2 className='text-xl font-semibold mb-2'>⚡ 5. Cálculo del inversor</h2>
                    <p>• <b>Potencia nominal necesaria (W):</b> Según el pico de potencia del cliente.</p>
                    <p>• <b>Potencia de arranque:</b> Motores (heladeras, bombas) pueden pedir 2–3× más al arrancar.</p>
                    <p>• <b>Voltaje del sistema:</b> Inversores de 12/24/48V según el banco de baterías.</p>
                </section>

                <section>
                    <h2 className='text-xl font-semibold mb-2'>🧮 6. Cálculos eléctricos obligatorios</h2>
                    <p>• <b>Sección de cables (mm²):</b> Según corriente, distancia y caída de tensión (ideal &lt;3%).</p>
                    <p>• <b>Protecciones:</b> Fusibles o breakers en CC, termomagnéticas y disyuntores en CA, DPS según normas IRAM/CAIM.</p>
                    <p>• <b>Caída de tensión:</b> Para que la distancia no afecte la performance.</p>
                    <p>• <b>Puesta a tierra:</b> Valor de resistencia del terreno y sección del conductor.</p>
                </section>

                <section>
                    <h2 className='text-xl font-semibold mb-2'>🏗️ 7. Cálculos de estructura y montaje</h2>
                    <p>• <b>Inclinación y orientación:</b> Según latitud y estación.</p>
                    <p>• <b>Carga de viento y anclajes:</b> Verificar que la estructura soporte el viento local.</p>
                    <p>• <b>Distancias y sombras:</b> Calcular el ángulo para evitar sombreado entre paneles.</p>
                </section>

                <section>
                    <h2 className='text-xl font-semibold mb-2'>📦 8. Cálculo de materiales totales</h2>
                    <p>• <b>Listado de materiales (BoM):</b> Paneles, soportes, inversor, regulador, baterías, cables, conectores MC4, protecciones, caños, tornillos, caja estanca.</p>
                    <p>• <b>Metros de cable:</b></p>
                    <p className='ml-4'>– Paneles → regulador</p>
                    <p className='ml-4'>– Regulador → batería</p>
                    <p className='ml-4'>– Batería → inversor</p>
                    <p className='ml-4'>– Inversor → tablero</p>
                </section>

            </div>

        </div>

    )

}

export default Docs
